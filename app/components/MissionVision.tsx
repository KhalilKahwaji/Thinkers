export default function MissionVision() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: 16,
      }}
    >
      <article
        style={{ background: "var(--card)", borderRadius: 12, padding: 16 }}
      >
        <h3>Mission</h3>
        <p style={{ color: "var(--muted)" }}>
          Create an inspiring and inclusive space where people can connect,
          work, and grow. We serve quality coffee and food while fostering
          creativity, knowledge-sharing, and community through cultural events,
          workshops, and social experiences.
        </p>
      </article>
      <article
        style={{ background: "var(--card)", borderRadius: 12, padding: 16 }}
      >
        <h3>Vision</h3>
        <p style={{ color: "var(--muted)" }}>
          To become Lebanon’s leading community café and cultural hub, expanding
          beyond coffee to spark innovation, empower local talent, and bring
          people together across cities and borders. We aim to stand as a
          resilient model of entrepreneurship that thrives despite challenges,
          proving that creativity and community can flourish anywhere.
        </p>
      </article>
    </div>
  );
}
