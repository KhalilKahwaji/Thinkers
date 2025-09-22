// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches, // ← import this
} from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import stylesheet from "./app.css?url";

// If instead you keep the image under src (e.g. app/assets/logo_circle.png),
// you can import it like this and use `href: logoIcon` below:
// import logoIcon from "./assets/logo_circle.png?url";

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },

    { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo_circle.png?v=2" },
    { rel: "shortcut icon", href: "/logo_circle.png?v=2" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/logo_circle.png?v=2" },
    // Roboto (400/500/700 covers body, buttons, headings)
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
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
            "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
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
