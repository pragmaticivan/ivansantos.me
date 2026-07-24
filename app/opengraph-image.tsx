import { ImageResponse } from "next/og";

export const alt = "Ivan Santos — Staff Engineer and Engineering Consultant";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "72px 84px",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle at 88% 10%, #dfe6f8 0, #f8f9fc 38%)",
        color: "#18243b",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#5269b4",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Platform engineering · AI engineering
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.055em",
            lineHeight: 1,
          }}
        >
          Stronger platforms. Useful AI.
        </div>
        <div
          style={{
            display: "flex",
            color: "#56627a",
            fontSize: 30,
            lineHeight: 1.35,
          }}
        >
          Ivan Santos · Staff Engineer &amp; Engineering Consultant
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#5269b4",
          }}
        />
        ivansantos.me
      </div>
    </div>,
    size
  );
}
