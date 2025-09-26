import type { Route } from "./+types/contact";
import Section from "../components/Section";
import Contact from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us • Thinkers C.C.C" },
    {
      name: "description",
      content: "Reach Thinkers C.C.C branches and find us on the map.",
    },
  ];
}

export default function ContactPage() {
  return (
    <Section id="contact" title="Contact Us">
      <Contact />
    </Section>
  );
}
