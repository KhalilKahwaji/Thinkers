// app/components/Navbar.tsx
import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";


type MoreLink = { to: string; label: string };

const MORE_LINKS: MoreLink[] = [
  { to: "/concept", label: "Concept & Identity" },
  { to: "/community", label: "Community Role" },
  { to: "/mission", label: "Mission & Vision" },
  { to: "/expansion", label: "Expansion & Resilience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current || !btnRef.current) return;
      if (!menuRef.current.contains(t) && !btnRef.current.contains(t)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link${isActive ? " is-active" : ""}`;

  return (
    <header className="nav">
      <nav className="nav__inner">
        <NavLink to="/" className="nav__brand">
          <img
            src="/favicon-dark.svg"
            alt="Thinkers logo"
            width={84}
            height={84}
            className="brand-logo"
            loading="eager"
            decoding="async"
          />
          <span className="logo-anim">Thinkers C.C.C</span>
        </NavLink>

        <div className="nav__links">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/tour" className={linkClass}>Virtual Tour</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>

          <button
            ref={btnRef}
            className={`hamb ${open ? "is-open" : ""}`}
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="nav-dropdown nav-drawer"
            aria-haspopup="true"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
          </button>
        </div>
      </nav>

      {/* Desktop dropdown */}
      <div
        id="nav-dropdown"
        ref={menuRef}
        className={`nav__dropdown ${open ? "open" : ""}`}
        role="menu"
        aria-label="More"
        onClick={() => setOpen(false)}
      >
        <div className="dd__section" onClick={(e) => e.stopPropagation()}>
          <h5>About</h5>
          <ul className="dd__links">
            {MORE_LINKS.map((l) => (
              <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        className={`nav__menu-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside
        id="nav-drawer"
        className={`nav__drawer ${open ? "open" : ""}`}
        role="menu"
        aria-label="Menu"
        onClick={() => setOpen(false)}
      >
        <div className="drawer__header" onClick={(e) => e.stopPropagation()}>
          <strong>Menu</strong>
          <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="drawer__section" onClick={(e) => e.stopPropagation()}>
          <ul className="drawer__links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/tour">Virtual Tour</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          <h5 style={{ marginTop: 12 }}>About</h5>
          <ul className="drawer__links">
            {MORE_LINKS.map((l) => (
              <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
}
