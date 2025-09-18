import ig from "../assets/icons/instagram.svg";
import fb from "../assets/icons/facebook.svg";
import tt from "../assets/icons/tiktok.svg";

export default function Footer() {
  return (
    <footer style={{ marginTop: 64, padding: "24px 0", borderTop: "1px solid #eee" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <small>© {new Date().getFullYear()} Thinkers C.C.C</small>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={ig} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={fb} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <img src={tt} alt="TikTok" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
