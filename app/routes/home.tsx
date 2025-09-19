import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Offerings from "../components/Offerings";
import Expansion from "../components/Expansion";
import Community from "../components/Community";
import MissionVision from "../components/MissionVision";
import CEO from "../components/CEO";
import Contact from "../components/Contact";

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
      <Hero />

      <Section
        id="concept"
        title="Concept & Identity"
        subtitle="Not just coffee: a space for creativity, social connection, and community."
      >
        <p style={{ color: "var(--muted)", maxWidth: 760 }}>
          Thinkers C.C.C isn’t only about coffee, it’s a space designed to inspire creativity, social
          connection, and community engagement. It blends the feel of a modern café with the
          atmosphere of a cultural and social hub. The brand has positioned itself as a resilient, forward-
          thinking business, even in Lebanon’s challenging economic climate.
        </p>
      </Section>

      <Section id="offerings" title="Offerings">
        <Offerings />
      </Section>

      <Section
        id="expansion"
        title="Expansion & Resilience"
        subtitle="Growth across Lebanon and even a location abroad — a sign of loyalty and strategy."
      >
        <Expansion />
      </Section>

      <Section id="community" title="Community Role">
        <Community />
      </Section>

      <Section id="mission" title="Mission & Vision">
        <MissionVision />
      </Section>

      <Section id="ceo" title="Leadership">
        <CEO
          name="Joseph Abdayem"
          role="Founder & Co-CEO"
          photoUrl="/Joseph.jpg" 
          bio="Development Speaker | Mentorship Coach | Entrepreneur F&B | Humanitarian Specialist"
        /><br/><br/><br/>
        <CEO
          name="Jeff Ghorra"
          role="Founder & Co-CEO"
          photoUrl="/Jeff.jpg" 
          bio="Entrepreneur F&B | Community Builder | Humanitarian Leader | Development Advocate"
        />
      </Section>

      <Section id="contact" title="Contact Us">
        <Contact />
      </Section>
    </>
  );
}
