import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">Tech Store</div>

        <nav className="nav">
          <ul className="nav__list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
              >
                Catalog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}