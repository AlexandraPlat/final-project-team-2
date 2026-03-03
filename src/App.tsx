
import AddUser from "./features/users/AddUser"; // путь к твоему компоненту AddUser
import DeleteUser from "./features/users/DeleteUser";
import Login from "./features/users/Login";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{textAlign: "center"}}>User Management</h1>

      {/* Добавление нового пользователя */}
      <AddUser />
      <Login />
      <DeleteUser />
    </div>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Features from "./components/Homepage/Features";
import CallToAction from "./components/Homepage/CallToAction";
import Hero from "./components/Homepage/Hero";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./components/cart/CartPage";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/catalog" element={<div>Catalog Page</div>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
