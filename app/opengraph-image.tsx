import { ImageResponse } from "next/og";

export const alt = "MNATRONIX LABS — разработка цифровых продуктов";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f5f8fc",
          color: "#151515",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#2f92fa",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          MNATRONIX LABS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              maxWidth: 930,
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
          >
            DIGITAL PRODUCTS BUILT TO SCALE
          </div>
          <div style={{ fontSize: 25, color: "#6b7280" }}>
            DESIGN / DEVELOPMENT / LAUNCH / SUPPORT
          </div>
        </div>
        <div style={{ width: 180, height: 10, borderRadius: 10, background: "#2f92fa" }} />
      </div>
    ),
    size,
  );
}
