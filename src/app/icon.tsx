import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1917",
          borderRadius: "50%",
          color: "#A16207",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "serif",
        }}
      >
        C
      </div>
    ),
    size
  );
}
