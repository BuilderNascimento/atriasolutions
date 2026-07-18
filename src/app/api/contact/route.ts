import { NextResponse } from "next/server";

/**
 * Point d'entrée du formulaire de contact / devis.
 *
 * Pour l'envoi réel des e-mails, connectez ici un fournisseur
 * (Resend, SendGrid, Nodemailer…). Le formulaire est déjà branché
 * sur cette route via fetch.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // TODO: intégrer l'envoi d'e-mail (ex. Resend) avec les données `body`.
    // Pour l'instant, on journalise côté serveur.
    console.info("[contact] nouvelle demande:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      service: body.service,
      preferredDate: body.preferredDate,
      message: body.message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }
}
