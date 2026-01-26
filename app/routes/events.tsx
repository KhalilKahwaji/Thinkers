import type { Route } from "./+types/events";
import { useEffect, useMemo, useState } from "react";
import EventCard from "../components/EventCard";
import Reveal from "../components/Reveal";
import { supabase } from "~/lib/supabaseClient";
import type { Branch, EventItem } from "../data/events";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events • Thinkers C.C.C" },
    {
      name: "description",
      content: "Workshops, stand-up comedy, and community events.",
    },
  ];
}

const branches: ("All" | Branch)[] = ["All", "Zahle", "Jounieh", "Jbeil"];

export default function Events() {
  const [filter, setFilter] = useState<"All" | Branch>("All");
  const [allEvents, setAllEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("events")
        .select(
          `
          id,
          title,
          dateStartISO,
          doorsISO,
          branch,
          priceUSD,
          rsvpPhone,
          image,
          description,
          tags,
          mapsQuery,
          ticketsUrl
        `
        )

      if (cancelled) return;

      console.log("[events fetch] error:", error);
      console.log("[events fetch] data:", data);
      if (error) {
        setError(error.message);
        setAllEvents([]);
        setLoading(false);
        return;
      }

      // Supabase already returns the right shapes for these columns
      setAllEvents((data ?? []) as EventItem[]);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const { upcoming, past } = useMemo(() => {
    const now = Date.now();
    const filtered =
      filter === "All"
        ? allEvents
        : allEvents.filter((e) => e.branch === filter);

    const upcoming = filtered
      .filter((e) => new Date(e.dateStartISO).getTime() >= now)
      .sort((a, b) => +new Date(a.dateStartISO) - +new Date(b.dateStartISO));

    const past = filtered
      .filter((e) => new Date(e.dateStartISO).getTime() < now)
      .sort((a, b) => +new Date(b.dateStartISO) - +new Date(a.dateStartISO));

    return { upcoming, past };
  }, [filter, allEvents]);

  return (
    <section>
      <h1 style={{ marginBottom: 8 }}>Events</h1>
      <p style={{ color: "var(--muted)", marginBottom: 16 }}>
        Comedy nights, workshops, and community gatherings.
      </p>

      {/* Branch filter */}
      <div
        style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}
      >
        {branches.map((b) => (
          <button
            key={b}
            onClick={() => setFilter(b)}
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid var(--accent)",
              background: filter === b ? "var(--accent)" : "transparent",
              color: filter === b ? "#111" : "var(--text)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {b}
          </button>
        ))}
      </div>

      {loading && <p style={{ color: "var(--muted)" }}>Loading events…</p>}

      {error && (
        <p style={{ color: "crimson" }}>Failed to load events: {error}</p>
      )}

      {!loading && !error && (
        <>
          {/* Upcoming */}
          {upcoming.length > 0 && (
            <>
              <h2 style={{ margin: "12px 0" }}>Upcoming</h2>
              <div style={{ display: "grid", gap: 16 }}>
                {upcoming.map((ev, i) => (
                  <Reveal key={ev.id} delay={i * 80}>
                    <EventCard ev={ev} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {/* Past */}
          {past.length > 0 && (
            <>
              <h2 style={{ margin: "24px 0 12px" }}>Past</h2>
              <div style={{ display: "grid", gap: 16 }}>
                {past.map((ev, i) => (
                  <Reveal key={ev.id} delay={i * 60} variant="left">
                    <EventCard ev={ev} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {/* Empty state */}
          {upcoming.length === 0 && past.length === 0 && (
            <p style={{ color: "var(--muted)" }}>
              No events found for this branch.
            </p>
          )}
        </>
      )}
    </section>
  );
}
