import { NavLink } from "react-router";
import logo from "../assets/icons/logo_circle.png";

export default function Navbar() {
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
        <div className="nav__links">
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/events" style={linkStyle}>Events</NavLink>
        </div>
      </nav>
    </header>
  );
}
