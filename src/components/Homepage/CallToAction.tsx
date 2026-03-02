import type { JSX } from "react";
import Button from "./Button/Button"
import Container from "./Container";
import styles from "./CallToAction.module.css";

export default function CallToAction(): JSX.Element {
  return (
    <section className={styles.cta}>
      <Container>
        <h2 className={styles.title}>
          Ready to Upgrade Your Tech?
        </h2>

        <p className={styles.text}>
          Explore our catalog and discover cutting-edge products.
        </p>

        <Button variant="light">
          View Catalog
        </Button>
      </Container>
    </section>
  );
}