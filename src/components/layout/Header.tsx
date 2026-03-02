


export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="logo">Tech Store</div>

          <nav>
            <ul className="nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/catalog">Catalog</NavLink></li>
              <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}