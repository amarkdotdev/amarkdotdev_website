import { ImageResponse } from "next/og";

export const alt = "Aaron Mark — DevOps / Python Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0f",
          color: "#e7ebf0",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "rgba(139, 244, 255, 0.9)", marginBottom: 16, letterSpacing: "0.2em" }}>
          AARON MARK
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, maxWidth: 800, textAlign: "center", lineHeight: 1.2 }}>
          I build infrastructure that doesn&apos;t break.
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8", marginTop: 24 }}>
          DevOps / Python Engineer · Open-Source Contributor
        </div>
      </div>
    ),
    { ...size }
  );
}
