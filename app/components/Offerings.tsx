type Card = { title: string; items: string[] };

const cards: Card[] = [
  {
    title: "Beverages & Food",
    items: [
      "Coffee (Espresso, V60, French Press)",
      "Iced drinks & refreshers",
      "Smoothies",
      "Croissants & desserts",
      "Cold sandwiches & salads",
    ],
  },
  {
    title: "Experiences",
    items: [
      "Working space rentals",
      "Quiet zones for teams & students",
      "Fast Wi-Fi & power everywhere",
    ],
  },
  {
    title: "Events",
    items: [
      "In-house workshops",
      "Stand-up comedy nights",
      "Community-building activities",
    ],
  },
];

export default function Offerings() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 16,
      }}
    >
      {cards.map((c) => (
        <article
          key={c.title}
          style={{
            border: "1px solid #23262d",
            background: "var(--card)",
            borderRadius: 14,
            padding: 16,
          }}
        >
          <h3 style={{ marginBottom: 8 }}>{c.title}</h3>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
            {c.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
