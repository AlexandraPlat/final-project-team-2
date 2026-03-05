import type { Product } from "../../../types";
import ProductCard from "../../../components/ProductCard";
import styles from "./ProductGrid.module.css";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
