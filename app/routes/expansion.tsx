import type { Route } from "./+types/expansion";
import Section from "../components/Section";
import Expansion from "../components/Expansion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Expansion & Resilience • Thinkers C.C.C" },
    { name: "description", content: "Growth across Lebanon and abroad." },
  ];
}

export default function ExpansionPage() {
  return (
    <Section id="expansion" title="Expansion & Resilience">
      <Expansion />
    </Section>
  );
}
