import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#FAF9F7",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(161,98,7,0.16), transparent 55%)",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#A16207",
            fontSize: 26,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#A16207",
              display: "flex",
            }}
          />
          Automatisation documentaire
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontFamily: "serif",
            fontWeight: 600,
            color: "#1C1917",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Vos documents, classés tout seuls.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#57534E",
            marginTop: 28,
            fontFamily: "serif",
            fontWeight: 600,
          }}
        >
          Classeo
        </div>
      </div>
    ),
    size
  );
}
