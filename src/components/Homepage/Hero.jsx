import FeatureItem from "./FeatureItem";
import Container from "../ui/Container";
import styles from "./Hero.module.css";


const features = [
  { icon: "🚚", title: "Free Delivery", desc: "On orders over $50" },
  { icon: "🔒", title: "Secure Payments", desc: "100% protected" },
  { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" },
  { icon: "💬", title: "24/7 Support", desc: "We are here to help" }
];

export default function Features() {
  return (
    <section className="features">
      <Container>
        <div className="features__grid">
          {features.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}