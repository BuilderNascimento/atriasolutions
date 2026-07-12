import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #16324F 0%, #0e2438 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "2px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#fff", fontSize: 34, fontWeight: 800 }}>
              Atria<span style={{ color: "#34a870" }}>.</span>
            </span>
            <span
              style={{
                color: "rgba(217,222,229,0.7)",
                fontSize: 16,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Solutions
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#34a870", fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>
            PARIS · ÎLE-DE-FRANCE
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 16,
              maxWidth: 900,
            }}
          >
            Nettoyage professionnel à Paris.
          </span>
          <span style={{ color: "rgba(217,222,229,0.85)", fontSize: 28, marginTop: 24 }}>
            Prestations haut de gamme · Appartements · Bureaux · Airbnb
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
