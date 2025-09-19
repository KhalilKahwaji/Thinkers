import type { Route } from "./+types/concept";
import Section from "../components/Section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Concept & Identity • Thinkers C.C.C" },
    { name: "description", content: "Our concept, identity, and purpose." },
  ];
}

export default function ConceptPage() {
  return (
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
  );
}
