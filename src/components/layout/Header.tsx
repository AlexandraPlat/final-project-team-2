import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Tech Store</div>

        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/users">Log in</NavLink>

        </nav>
      </div>
    </header>
  );
}