export default function Hero() {
  return (
    <section
      style={{
        padding: "72px 0",
        paddingLeft: "15px",
        borderBottom: "1px solid #222",
        background:
          "linear-gradient(120deg, rgba(196,154,108,.08), rgba(0,0,0,0))",
        borderRadius: 12,
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 12 }}>Thinkers C.C.C</h1>
      <p style={{ color: "var(--muted)", maxWidth: 680 }}>
        A community café and cultural hub - coffee, workspace, and events.
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <a
          href="#offerings"
          style={{
            padding: "10px 16px",
            background: "var(--accent)",
            color: "#111",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Explore Menu & Spaces
        </a>
        <a
          href="/contact"
          style={{
            padding: "10px 16px",
            border: "1px solid var(--accent)",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
