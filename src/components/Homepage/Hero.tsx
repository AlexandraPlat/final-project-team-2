import Button from "./Button/Button";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>New Arrivals 2025</div>
      <h1 className={styles.title}>The Future of Tech</h1>
      <p className={styles.subtitle}>
        Discover the latest gadgets and innovation.
      </p>
      <Button
        variant="light"
        className={styles.button}
        onClick={() => navigate("/catalog")}
      >
        Shop Now
      </Button>
    </section>
  );
}
