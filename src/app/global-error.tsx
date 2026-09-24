"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#f5f5f7",
          color: "#1d1d1f",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>
            Le site a rencontré une erreur
          </h1>
          <p style={{ color: "#6e6e73", lineHeight: 1.6, marginBottom: 24 }}>
            Merci de réessayer dans un instant.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: "#0067cf",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
