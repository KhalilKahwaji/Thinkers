// app/components/Footer.tsx
import { NavLink } from "react-router";
import ig from "../assets/icons/instagram.svg";
import fb from "../assets/icons/facebook.svg";
import tt from "../assets/icons/tiktok.svg";
import li from "../assets/icons/linkedin.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer__grid">
        {/* Brand / blurb */}
        <div className="footer__brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <img src="/logo_circle.png" width={28} height={28} alt="Thinkers logo" />
            <strong>Thinkers C.C.C</strong>
          </div>
          <p>Community café & cultural hub - coffee, workspaces, and events across Lebanon.</p>
          <div className="footer__social">
          <a href="https://www.instagram.com/thinkersccc/" target="_blank" rel="noreferrer">
            <img src={ig} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/ThinkersZahle" target="_blank" rel="noreferrer">
            <img src={fb} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@thinkers.ccc" target="_blank" rel="noreferrer">
            <img src={tt} alt="TikTok" width={24} height={24} />
          </a>
         <a href="https://www.linkedin.com/company/thinkersccc/" target="_blank" rel="noreferrer">
            <img src={li} alt="Linkedin" width={24} height={24} />
          </a>
          </div>
        </div>

        {/* Explore (navbar items) */}
        <nav aria-label="Explore" className="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/tour">Virtual Tour</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </nav>

        {/* About (hamburger items) */}
        <nav aria-label="About" className="footer__col">
          <h4>About</h4>
          <ul>
            <li><NavLink to="/concept">Concept &amp; Identity</NavLink></li>
            <li><NavLink to="/community">Community Role</NavLink></li>
            <li><NavLink to="/mission">Mission &amp; Vision</NavLink></li>
            <li><NavLink to="/expansion">Expansion &amp; Resilience</NavLink></li>
          </ul>
        </nav>

        {/* Contact (quick info) */}
        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><NavLink to="/contact">Contact page</NavLink></li>
            <li>Jbeil • Zahle • Jounieh</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <small>© {year} Thinkers C.C.C</small>
        <a href="#" className="backtotop" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
