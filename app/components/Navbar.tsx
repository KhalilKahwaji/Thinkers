import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/icons/logo_circle.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    padding: "8px 12px",
    textDecoration: "none",
    color: isActive ? "#fff" : "#cbd5e1",
    borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
  });

  return (
    <header className="nav">
      <nav className="nav__inner">
        <NavLink to="/" className="nav__brand">
          <img src={logo} alt="Thinkers logo" width={28} height={28} />
          <span>Thinkers C.C.C</span>
        </NavLink>

        <div className="nav__links" style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/events" style={linkStyle}>Events</NavLink>
          <NavLink to="/tour" style={linkStyle}>Virtual Tour</NavLink>

          {/* NEW: Contact Us visible in navbar */}
          <NavLink to="/contact" style={linkStyle}>Contact Us</NavLink>

          {/* NEW: Hamburger menu with everything else */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Open menu"
            style={{
              marginLeft: 8,
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid #2a2f38",
              background: "transparent",
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Panel */}
      {open && (
        <div
          id="nav-menu"
          role="menu"
          style={{
            position: "absolute",
            right: 16,
            top: 72,
            width: 280,
            background: "var(--card)",
            border: "1px solid #23262d",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            padding: 10,
            zIndex: 20,
          }}
          onClick={() => setOpen(false)}
        >
          <MenuLink to="/concept" label="Concept & Identity" />
          <MenuLink to="/offerings" label="Offerings" />
          <MenuLink to="/expansion" label="Expansion & Resilience" />
          <MenuLink to="/community" label="Community Role" />
          <MenuLink to="/mission" label="Mission & Vision" />
        </div>
      )}
    </header>
  );
}

function MenuLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      style={{
        display: "block",
        padding: "10px 12px",
        borderRadius: 8,
        color: "#e5e7eb",
        textDecoration: "none",
      }}
    >
      {label}
    </NavLink>
  );
}
