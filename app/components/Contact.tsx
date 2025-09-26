import { useState } from "react";

export default function Contact() {
  const [location, setLocation] = useState("Zahle");
  const locations: Record<string, string> = {
    Zahle:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.733362660786!2d35.90556120000001!3d33.844986299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f355e4deb3609%3A0xcc769d511919e252!2sThinkers%20C.C.C%20Zahl%C3%A9!5e0!3m2!1sen!2slb!4v1758279351455!5m2!1sen!2slb",
    Jounieh:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.907807390792!2d35.642095975223185!3d33.99490172075675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f410046f3eacf%3A0xfdfe8e3670684417!2sThinkers%20C.C.C%20Jounieh!5e0!3m2!1sen!2slb!4v1758279532681!5m2!1sen!2slb",
    Jbeil:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8654028498813!2d35.646013975719484!3d34.12419537312993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f5d40f2e76151%3A0xa856598069ea09b2!2sThinkers%20C.C.C%20Byblos!5e0!3m2!1sen!2slb!4v1758279501714!5m2!1sen!2slb",
  };

  return (
    <div className="contact-grid">
      <div>
        <p style={{ color: "var(--muted)" }}>
          Phone: +961 70 178 859 or +961 81 135 993
          <br />
          Email: contact@thinkersccc.com
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
