import { useState } from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [search, setSearch] = useState("");
  const { data: products, isLoading, isError } = useGetProductsQuery();

  // Пока грузится
  if (isLoading) return <p>Loading...</p>;

  // Если ошибка
  if (isError) return <p style={{ color: "red" }}>Failed to load products.</p>;

  // Фильтрация по поиску
  const filtered = (products ?? []).filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Catalog</h1>
        <p className={styles.subtitle}>
          {products ? `${products.length} products available` : ""}
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      {filtered.length === 0 ? (
        <p>No products found for "{search}"</p>
      ) : (
        <ProductGrid products={filtered} />
      )}
    </div>
  );
};

export default CatalogPage;
