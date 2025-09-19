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

      <Section id="offerings" title="Offerings">
        <Offerings />
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
    </>
  );
}
