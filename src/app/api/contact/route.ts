import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const address = String(body?.address ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const preferredDate = String(body?.preferredDate ?? "").trim();

    if (!name || !email || !phone || !message || !service) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY manquante");
      return NextResponse.json(
        { ok: false, error: "Configuration e-mail manquante." },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;
    // Tant que le domaine n'est pas vérifié sur Resend, onboarding@resend.dev est obligatoire.
    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Atria Solutions <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const textLines = [
      "Nouvelle demande de devis - Atria Solutions",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `E-mail : ${email}`,
      `Adresse : ${address || "-"}`,
      `Service : ${service}`,
      `Date souhaitée : ${preferredDate || "-"}`,
      "",
      "Message :",
      message,
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0e2438">
        <h2 style="margin:0 0 16px">Nouvelle demande de devis</h2>
        <p style="margin:0 0 8px"><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
        <p style="margin:0 0 8px"><strong>E-mail :</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px"><strong>Adresse :</strong> ${escapeHtml(address || "-")}</p>
        <p style="margin:0 0 8px"><strong>Service :</strong> ${escapeHtml(service)}</p>
        <p style="margin:0 0 8px"><strong>Date souhaitée :</strong> ${escapeHtml(preferredDate || "-")}</p>
        <p style="margin:16px 0 8px"><strong>Message :</strong></p>
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Devis - ${service} - ${name}`,
      text: textLines.join("\n"),
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      const detail = `${error.name ?? ""} ${error.message ?? ""}`.toLowerCase();
      const isDomainIssue =
        detail.includes("domain") ||
        detail.includes("verify") ||
        detail.includes("testing") ||
        detail.includes("own email");

      return NextResponse.json(
        {
          ok: false,
          error: isDomainIssue
            ? "Configuration Resend incomplete (domaine / destinataire)."
            : "Envoi de l'e-mail impossible.",
          detail: error.message,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }
}
