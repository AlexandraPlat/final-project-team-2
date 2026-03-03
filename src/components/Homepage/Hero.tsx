import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>New Arrivals 2025</div>
      <h1 className={styles.title}>The Future of Tech</h1>
      <p className={styles.subtitle}>
        Discover the latest gadgets and innovation.
      </p>
      <button className={styles.button}>Shop Now</button>
    </section>
  );
}