import type { JSX } from "react";

export default function Returns(): JSX.Element {
  return (
    <div className="info-page">
      <h1>Easy Returns</h1>
      <img src="/images/returns.jpg" alt="Easy Returns" />
      <p>You can return any product within 30 days.</p>
    </div>
  );
}