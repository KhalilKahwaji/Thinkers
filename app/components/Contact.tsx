import { useState } from "react";

export default function Contact() {
  const [location, setLocation] = useState("Zahle");
  const locations: Record<string, string> = {
    Zahle: "https://www.google.com/maps?q=Zahle%20Lebanon&output=embed",
    Jounieh: "https://www.google.com/maps?q=Jounieh%20Lebanon&output=embed",
    Jbeil: "https://www.google.com/maps?q=Byblos%20Lebanon&output=embed",
  };

  return (
    <div className="contact-grid">
      <div>
        <p style={{ color: "var(--muted)" }}>
          Address: Main Street, {location}, Lebanon <br />
          Phone: +961 71 000 000 • Email: hello@thinkers.ccc
        </p>
      </div>

      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {Object.keys(locations).map((loc) => (
            <button
              key={loc}
              onClick={() => setLocation(loc)}
              className={`btn ${location === loc ? "btn--solid" : "btn--outline"}`}
              style={{ borderRadius: 8 }}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="map-box">
          <iframe
            title="Thinkers Map"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            src={locations[location]}
          />
        </div>
      </div>
    </div>
  );
}
