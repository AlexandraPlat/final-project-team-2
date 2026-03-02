export default function FeatureItem({ icon, title, desc }) {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}