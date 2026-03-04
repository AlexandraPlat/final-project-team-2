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

import FreeDelivery from "./components/Homepage/FreeDelivery";
import About from "./components/Homepage/About";
import Returns from "./components/Homepage/Returns";
import Support from "./components/Homepage/Support";

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
        {/* Главная */}
        <Route path="/" element={<Home />} />

        {/* Каталог */}
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* 4 страницы фич */}
        <Route path="/free-delivery" element={<FreeDelivery />} />
        <Route path="/about" element={<About />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/support" element={<Support />} />

        {/* Users */}
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