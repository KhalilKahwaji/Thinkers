import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} style={{ padding: "48px 0", borderBottom: "1px solid #222" }}>
      <header style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 28 }}>{title}</h2>
        {subtitle && <p style={{ color: "var(--muted)" }}>{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
