import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import Section from "../components/Section";
import OfferingTile from "../components/OfferingTile";
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
      <Reveal variant="zoom"><Hero /></Reveal>

      <Section id="offerings" title="Offerings">
        <div style={{ display: "grid", gap: 16 }}>
          <Reveal>
            <OfferingTile
              title="Beverages"
              image="/tiles/beverages.jpeg"
              bullets={[
                "Coffee (Espresso, V60, French Press)",
                "Iced drinks & refreshers",
                "Smoothies",
              ]}
            />
          </Reveal>

          <Reveal delay={80}>
            <OfferingTile
              title="Food"
              image="/tiles/food.jpg"
              bullets={[
                "Croissants & desserts",
                "Cold sandwiches",
                "Salads",
              ]}
              imageRight   // put image on the right for variety
            />
          </Reveal>

          <Reveal delay={160}>
            <OfferingTile
              title="Experience"
              image="/tiles/experience.jpg"
              bullets={[
                "Workspaces for individuals & teams",
                "Bookings for workshops & meetups",
                "Community events & cultural nights",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <Section id="ceo" title="Leadership">
        <div style={{ display: "grid", gap: 24 }}>
          <Reveal variant="up">
            <CEO
              name="Joseph Abdayem"
              role="Founder & Co-CEO"
              photoUrl="/Joseph.jpg"
              bio="Development Speaker | Mentorship Coach | Entrepreneur F&B | Humanitarian Specialist"
            />
          </Reveal>
          <Reveal variant="up" delay={120}>
            <CEO
              name="Jeff Ghorra"
              role="Founder & Co-CEO"
              photoUrl="/Jeff.jpg"
              bio="Entrepreneur F&B | Community Builder | Humanitarian Leader | Development Advocate"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
