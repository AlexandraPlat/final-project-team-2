import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.brand}>
          <h3 className={styles.logo}>Tech Store</h3>
          <p className={styles.text}>
            Modern tech for modern people.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Navigation</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/catalog">Catalog</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: support@techstore.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Tech Store. All rights reserved.
      </div>
    </footer>
  );
}