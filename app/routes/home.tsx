// app/routes/home.tsx
import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Offerings from "../components/Offerings";
import CEO from "../components/CEO";
import Reveal from "../components/Reveal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thinkers C.C.C" },
    {
      name: "description",
      content:
        "Coffee, workspace, and events. A resilient community hub built in Lebanon and beyond.",
    },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero zooms in on load/scroll */}
      <Reveal variant="zoom">
        <Hero />
      </Reveal>

      {/* Offerings rise in */}
      <Section id="offerings" title="Offerings">
        <Reveal variant="up">
          <Offerings />
        </Reveal>
      </Section>

      {/* Leadership cards: staggered reveal */}
      <Section id="ceo" title="Leadership">
        <div style={{ display: "grid", gap: 24 }}>
          <Reveal variant="up">
            <CEO
              name="Joseph Abdayem"
              role="Founder & Co-CEO"
              photoUrl="/Joseph.jpg" // ensure file is in /public
              bio="Development Speaker | Mentorship Coach | Entrepreneur F&B | Humanitarian Specialist"
            />
          </Reveal>

          <Reveal variant="up" delay={120}>
            <CEO
              name="Jeff Ghorra"
              role="Founder & Co-CEO"
              photoUrl="/Jeff.jpg" // ensure file is in /public
              bio="Entrepreneur F&B | Community Builder | Humanitarian Leader | Development Advocate"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
