import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Features from "./components/Homepage/Features";
import CallToAction from "./components/Homepage/CallToAction";
import Hero from "./components/Homepage/Hero";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";

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
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
