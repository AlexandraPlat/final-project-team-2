import type { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <div className="info-page">
      <h1>About Us</h1>
      <img src="/images/about.jpg" alt="About Us" />
      <p>We are a company focused on quality and customer satisfaction.</p>
    </div>
  );
}