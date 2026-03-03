import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
          PortLink
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a3a3a3",
            marginTop: 16,
          }}
        >
          Build your portfolio in 60 seconds. Just a URL.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
