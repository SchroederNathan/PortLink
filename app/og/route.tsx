import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const logoData = await readFile(
    join(process.cwd(), "public/favicons/android-chrome-512x512.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          gap: 24,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={120} height={120} alt="" />
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
          PortLink
        </div>
        <div style={{ fontSize: 28, color: "#a3a3a3" }}>
          Build your portfolio in 60 seconds
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
