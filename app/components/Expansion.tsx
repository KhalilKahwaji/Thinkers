export default function Expansion() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <p style={{ color: "var(--muted)" }}>
        Despite Lebanon’s financial, economic, and security crises, Thinkers
        C.C.C has grown to multiple locations in Lebanon and one abroad — a
        signal of brand loyalty and resilient strategy.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 12,
        }}
      >
        <div
          style={{ padding: 14, background: "var(--card)", borderRadius: 12 }}
        >
          <strong>Locations</strong>
          <ul style={{ margin: "8px 0 0 18px", color: "var(--muted)" }}>
            <li>Beirut</li>
            <li>Jounieh</li>
            <li>Byblos</li>
            <li>Abroad: Montenegro</li>
          </ul>
        </div>
        <div
          style={{ padding: 14, background: "var(--card)", borderRadius: 12 }}
        >
          <strong>Why it matters</strong>
          <ul style={{ margin: "8px 0 0 18px", color: "var(--muted)" }}>
            <li>Resilient entrepreneurship</li>
            <li>Community-first brand</li>
            <li>Operational adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
