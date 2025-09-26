// app/routes/not-found.tsx
import type { Route } from "./+types/not-found";
import { Link } from "react-router";

export const handle = { layout: "blank" } as const;

export function meta({}: Route.MetaArgs) {
  return [{ title: "404 • Thinkers C.C.C" }];
}

export default function NotFoundPage() {
  return (
    <section className="page_404">
      {/* Absolute background layer */}
      <div className="nf_bg" aria-hidden="true" />

      {/* Top title, fixed to the top */}
      <h1 className="nf_title">404</h1>

      {/* Bottom content, fixed to the bottom */}
      <div className="nf_bottom">
        <h3 className="h2">Looks like you're lost</h3>
        <p>the page you are looking for is not avaible!</p>
        <Link to="/" className="link_404">
          Go back home
        </Link>
      </div>
    </section>
  );
}
