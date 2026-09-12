import { ImageResponse } from "next/og";

export const alt = "VedAIT Labs — Technology Startup";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#ff5a4f",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          VedAIT Labs
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          Technology startup building intelligent solutions.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          Kathmandu · Nepal
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
