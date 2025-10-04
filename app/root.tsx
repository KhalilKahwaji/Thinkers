// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import stylesheet from "./app.css?url";

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },

    // Single favicon we control at runtime (we'll swap href with matchMedia)
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon-dark.svg?v=3",
      id: "favicon",
    },

    // iOS / legacy fallback
    { rel: "apple-touch-icon", sizes: "180x180", href: "/logo_circle.png?v=3" },

    // Fonts
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
    },
    {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap",
},
  ];
}

export function meta() {
  return [
    { charSet: "utf-8" },
    { title: "Thinkers C.C.C" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}

export default function Root() {
  const matches = useMatches();

  // Swap favicon based on OS theme (inverted mapping):
  // Dark theme  -> /favicon-light.svg
  // Light theme -> /favicon-dark.svg
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");

    const apply = () => {
      const link = document.querySelector<HTMLLinkElement>("link#favicon");
      if (!link) return;
      link.href = mq?.matches
        ? "/favicon-light.svg?v=3"
        : "/favicon-dark.svg?v=3";
    };

    apply();
    mq?.addEventListener("change", apply);
    return () => mq?.removeEventListener("change", apply);
  }, []);

  // If the deepest matched route asked for a blank layout, hide navbar/footer
  const isBlankLayout = matches.some((m: any) => m.handle?.layout === "blank");

  const mainStyle = isBlankLayout
    ? { maxWidth: "100%", margin: 0, padding: 0 } // full-bleed
    : { maxWidth: 1100, margin: "0 auto", padding: "24px 16px" };

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        style={{
          fontFamily:
            "Roboto, system-ui, -apple-system, Segoe UI, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
          margin: 0,
        }}
      >
        {!isBlankLayout && <Navbar />}

        <main style={mainStyle}>
          <Outlet />
        </main>

        {!isBlankLayout && <Footer />}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
