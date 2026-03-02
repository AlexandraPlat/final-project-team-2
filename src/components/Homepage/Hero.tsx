import "./Hero.module.css";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__badge">🚀 New Arrivals 2025</span>

        <h1 className="hero__title">
          The Future of Tech,
          <br />
          In Your Hands
        </h1>

        <p className="hero__subtitle">
          Discover the latest gadgets and innovation. Premium quality,
          unbeatable prices, and exceptional service.
        </p>

        <NavLink to="/catalog" className="hero__button">
          Shop Now →
        </NavLink>
      </div>
    </section>
  );
}