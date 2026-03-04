import FeatureItem from "./FeatureItem";
import Container from "./Container";
import { Link } from "react-router-dom";

const features = [
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

export default function Features() {
  return (
    <section className="features">
      <Container>
        <div className="features__grid">
          {features.map((item, index) => (
            <Link to={item.link} key={index} className="features__link">
              <FeatureItem description={""} {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}