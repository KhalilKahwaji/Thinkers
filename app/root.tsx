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

    // Favicon / icons (PNG in /public)
    { rel: "icon", type: "image/png", href: "/logo_circle.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/logo_circle.png" },

    // Fonts (keep or remove as you prefer)
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Playfair+Display:wght@600&display=swap",
    },

    // If you imported from src/assets, replace the PNG lines above with:
    // { rel: "icon", type: "image/png", href: logoIcon },
    // { rel: "apple-touch-icon", sizes: "180x180", href: logoIcon },
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
