import AddUser from "./features/users/AddUser";
import DeleteUser from "./features/users/DeleteUser";
import Login from "./features/users/Login";

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

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* если нужно оставить user management */}
        <Route
          path="/users"
          element={
            <div style={{ padding: 20 }}>
              <h1>User Management</h1>
              <AddUser />
              <Login />
              <DeleteUser />
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
