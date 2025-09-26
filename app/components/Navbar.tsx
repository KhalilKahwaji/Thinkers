// app/components/Navbar.tsx
import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/logo_circle.png";

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

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current || !btnRef.current) return;
      if (!menuRef.current.contains(t) && !btnRef.current.contains(t))
        setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  /*const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    padding: "8px 12px",
    textDecoration: "none",
    color: isActive ? "#fff" : "#cbd5e1",
    borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
  });*/
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link${isActive ? " is-active" : ""}`;

  return (
    <header className="nav">
      <nav className="nav__inner">
        <NavLink to="/" className="nav__brand">
          <img
            src="/favicon-dark.svg"
            alt="Thinkers logo"
            width={75}
            height={75}
          />
          <span className="logo-anim">Thinkers C.C.C</span>
        </NavLink>

        <div className="nav__links">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/events" className={linkClass}>
            Events
          </NavLink>
          <NavLink to="/tour" className={linkClass}>
            Virtual Tour
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>

          {/* Hamburger (dropdown toggle) */}
          <button
            ref={btnRef}
            className={`hamb ${open ? "is-open" : ""}`}
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="nav-dropdown"
            aria-haspopup="true"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
          </button>
        </div>
      </nav>

      {/* Dropdown panel */}
      <div
        id="nav-dropdown"
        ref={menuRef}
        className={`nav__dropdown ${open ? "open" : ""}`}
        role="menu"
        aria-label="More"
        onClick={() => setOpen(false)} // clicking a link closes
      >
        <div className="dd__section" onClick={(e) => e.stopPropagation()}>
          <h5>About</h5>
          <ul className="dd__links">
            {MORE_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
