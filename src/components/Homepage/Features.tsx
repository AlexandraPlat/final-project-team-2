import FeatureItem from "./FeatureItem";
import Container from "./Container";
import { Link } from "react-router-dom";
import type { JSX } from "react";

const features: Feature[] = [
  { 
    icon: "🚚", 
    title: "Free Delivery", 
    desc: "On orders over $50",
    link: "/free-delivery"
  },
  { 
    icon: "🖥️", 
    title: "About us", 
    desc: "Our guarantee",
    link: "/about"
  },
  { 
    icon: "🔄", 
    title: "Easy Returns", 
    desc: "30-day return policy",
    link: "/returns"
  },
  { 
    icon: "💬", 
    title: "24/7 Support", 
    desc: "We are here to help",
    link: "/support"
  }
];

export default function Features(): JSX.Element {
  return (
    <section className="features">
      <Container>
        <div className="features__grid">
          {features.map((item) => (
            <Link key={item.title} to={item.link} className="features__link">
              <FeatureItem icon={item.icon} title={item.title} desc={item.desc} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}