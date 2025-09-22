// app/components/Hero.tsx
import heroImg from "../assets/hero/hero-coffee.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* Left: copy */}
        <div className="hero__copy">
          <h1>Coffee. Community. Creativity.</h1>
          <p className="hero__sub">
            Thinkers C.C.C is your neighborhood hub—specialty coffee, flexible workspaces,
            and events that bring people together.
          </p>

          <div className="hero__ctas">
            <a href="#offerings" className="btn btn--solid">Explore Offerings</a>
            <a href="/events" className="btn btn--outline">See Events</a>
          </div>
        </div>

        {/* Right: visual */}
        <div className="hero__visual" aria-hidden="true">
          <img src={heroImg} alt="" loading="eager" />
        </div>
      </div>
    </section>
  );
}
