import type { Route } from "./+types/community";
import Section from "../components/Section";
import Community from "../components/Community";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Community Role • Thinkers C.C.C" },
    { name: "description", content: "How we connect and contribute to our community." },
  ];
}

export default function CommunityPage() {
  return (
    <Section id="community" title="Community Role">
      <Community />
    </Section>
  );
}
