// app/components/EventCard.tsx
import type { EventItem } from "../data/events";

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function EventCard({ ev }: { ev: EventItem }) {
  const past = new Date(ev.dateStartISO).getTime() < Date.now();

  return (
     <article className={`event-card ${past ? "event-card--past" : ""}`}>
      <div className="event-card__media" /*here if its a past event i want to color it like its muted*/>
        <img src={ev.image} alt={ev.title} loading="lazy" />
      </div>

      <div className="event-card__body">
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <h3 style={{ margin: 0 }}>{ev.title}</h3>
          {past && (
            <span
              style={{
                alignSelf: "start",
                padding: "2px 8px",
                borderRadius: 999,
                fontSize: 12,
                border: "1px solid #444",
                color: "#aaa",
              }}
            >
              Past
            </span>
          )}
        </div>

        {ev.description && (
          <p style={{ color: "var(--muted)", margin: "8px 0 12px" }}>
            {ev.description}
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <div className="info">
            <div className="info__label">Branch</div>
            <div className="info__value">{ev.branch}</div>
          </div>

          <div className="info">
            <div className="info__label">Show</div>
            <div className="info__value">{fmtDate(ev.dateStartISO)}</div>
          </div>

          {ev.doorsISO && (
            <div className="info">
              <div className="info__label">Doors</div>
              <div className="info__value">{fmtDate(ev.doorsISO)}</div>
            </div>
          )}

          <div className="info">
            <div className="info__label">Ticket</div>
            <div className="info__value">${ev.priceUSD}</div>
          </div>

          {ev.tags?.length ? (
            <div className="info">
              <div className="info__label">Tags</div>
              <div className="info__value">{ev.tags.join(" • ")}</div>
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {!past && ev.rsvpPhone && (
            <a
              href={`https://wa.me/${ev.rsvpPhone.replace(/\D/g, "")}`}
              target="_blank"
              className="btn btn--solid"
            >
              RSVP
            </a>
          )}

          {!past && ev.mapsQuery && (
            <a
              href={`https://www.google.com/maps?q=${ev.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Directions
            </a>
          )}

          {!past && ev.ticketsUrl && (
            <a
              href={ev.ticketsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--solid"
            >
              Buy Tickets
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
