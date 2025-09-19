// app/routes/tour.tsx
import type { Route } from "./+types/tour";
import { useState } from "react";
import Section from "../components/Section";
import VirtualTour from "../components/VirtualTour";

type Loc = "Zahle" | "Jbeil";

const MODELS: Record<Loc, string> = {
  Zahle: "jAHBNyfoc3a",   // from https://discover.matterport.com/space/jAHBNyfoc3a
  Jbeil: "4ekmJS96ppf",   // from https://discover.matterport.com/space/4ekmJS96ppf
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Virtual Tour • Thinkers C.C.C" },
    {
      name: "description",
      content: "Explore Thinkers C.C.C branches with interactive 3D tours.",
    },
  ];
}

export default function TourPage() {
  const [loc, setLoc] = useState<Loc>("Zahle");

  return (
    <>
      <Section
        id="virtual-tour"
        title="Virtual Tour"
        subtitle="Explore the space as if you're there."
      >
        {/* Location switcher */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          {(["Zahle", "Jbeil"] as Loc[]).map((l) => (
            <button
              key={l}
              onClick={() => setLoc(l)}
              className={`btn ${loc === l ? "btn--solid" : "btn--outline"}`}
              style={{ borderRadius: 8 }}
              aria-pressed={loc === l}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Embedded tour */}
        <VirtualTour modelId={MODELS[loc]} />
        <p style={{ color: "var(--muted)", marginTop: 10 }}>
          Currently viewing: <strong>{loc}</strong>
        </p>
      </Section>
    </>
  );
}
