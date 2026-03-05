import type { JSX } from "react";

export default function FreeDelivery(): JSX.Element {
  return (
    <div className="info-page">
      <h1>Free Delivery</h1>
      <img src="/images/freedelivery.jpg" alt="Free Delivery" />
      <p>We offer free delivery on all orders over $50.</p>
    </div>
  );
}