import type { Route } from "./+types/mission";
import Section from "../components/Section";
import MissionVision from "../components/MissionVision";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mission & Vision • Thinkers C.C.C" },
    { name: "description", content: "Our mission and long-term vision." },
  ];
}

export default function MissionPage() {
  return (
    <Section id="mission" title="Mission & Vision">
      <MissionVision />
    </Section>
  );
}
