
import { useState } from "react";
import "./App.css";
import SearchBar from "./pages/CatalogPage/components/SearchBar";
import { BrowserRouter } from "react-router-dom";
import ProductGrid from "./pages/CatalogPage/components/ProductGrid";
import Footer from "./components/layout/Footer";

const fakeProducts = [
  {
    id: "prod-001",
    title: 'Apple MacBook Pro 14" M3 Pro',
    description:
      "The most powerful MacBook Pro ever. Features the M3 Pro chip with 12-core CPU and 18-core GPU, 18GB unified memory, and 512GB SSD. Perfect for developers, designers, and content creators who demand the best.",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop&auto=format",
    category: "Laptops",
    rating: 4.9,
    stock: 15,
  },
  {
    id: "prod-002",
    title: "iPhone 15 Pro Max",
    description:
      "Titanium design meets the A17 Pro chip. Features a 48MP main camera with 5x optical zoom, Action Button, and USB-C with USB 3 speeds. The most advanced iPhone ever made.",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1695639526461-7244f263119c?w=600&h=600&fit=crop&auto=format",
    category: "Smartphones",
    rating: 4.8,
    stock: 32,
  },
  {
    id: "prod-003",
    title: "Samsung Galaxy S24 Ultra",
    description:
      '200MP main camera, built-in S Pen, Snapdragon 8 Gen 3 processor, 12GB RAM, and a stunning 6.8" QHD+ Dynamic AMOLED display. The ultimate Android flagship for power users.',
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&auto=format",
    category: "Smartphones",
    rating: 4.7,
    stock: 28,
  },
];

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div style={{ padding: 32 }}>
        <SearchBar value={search} onChange={setSearch} />
        <p>Я ищу: {search}</p>
        <ProductGrid products={fakeProducts} />
      </div>

      <Footer />
    </BrowserRouter>
  );
}


export default App;
