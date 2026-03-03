import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Features from "./components/Homepage/Features";
import CallToAction from "./components/Homepage/CallToAction";
import Hero from "./components/Homepage/Hero";
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
        <Route path="/catalog" element={<div>Catalog Page</div>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
