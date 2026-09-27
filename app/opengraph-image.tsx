import { ImageResponse } from "next/og"

export const alt = "Two Guys Automotive Repair — Auto Shop in Springfield, OR"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#141414",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* amber top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#ffb020",
          }}
        />

        {/* business name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "16px",
          }}
        >
          Two Guys Automotive Repair
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#ffb020",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Auto Repair Shop — Springfield, OR
        </div>

        {/* details row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            fontSize: "22px",
            color: "#9ca3af",
          }}
        >
          <span>191 N 39th St, Springfield, OR 97478</span>
          <span style={{ color: "#ffb020" }}>|</span>
          <span>(541) 744-3626</span>
        </div>

        {/* amber bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#ffb020",
          }}
        />
      </div>
    ),
    { ...size },
  )
}
