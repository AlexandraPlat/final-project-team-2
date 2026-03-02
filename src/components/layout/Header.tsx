import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Tech Store</div>
      <nav>
        <ul className="nav-list">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/catalog">Catalog</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}