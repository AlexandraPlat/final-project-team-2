import { NavLink } from "react-router-dom";
import "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        
        <div className="footer__brand">
          <h3 className="footer__logo">Tech Store</h3>
          <p className="footer__text">
            Modern tech for modern people.
          </p>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/catalog">Catalog</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>Email: support@techstore.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Tech Store. All rights reserved.
      </div>
    </footer>
  );
}