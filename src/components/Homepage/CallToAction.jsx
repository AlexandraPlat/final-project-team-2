import Button from "../ui/Button";
import Container from "../ui/Container";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className="cta">
      <Container>
        <h2>Ready to Upgrade Your Tech?</h2>
        <p>Explore our catalog and discover cutting-edge products.</p>
        <Button variant="light">View Catalog</Button>
      </Container>
    </section>
  );
}