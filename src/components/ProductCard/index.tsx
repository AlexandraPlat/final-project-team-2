import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import type { Product } from "../../types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const to = `/product/${product.id}`;

  return (
    <div className={styles.card}>
      <Link to={to} className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.category}>{product.category}</span>
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={to} className={styles.titleLink}>
            {product.title}
          </Link>
        </h3>

        <div className={styles.meta}>
          <span className={styles.price}>
            ${product.price.toLocaleString()}
          </span>
          <span className={styles.rating}>★ {product.rating}</span>
        </div>

        <div className={styles.stock}>
          {product.stock > 0 ? (
            <span className={styles.inStock}>In stock</span>
          ) : (
            <span className={styles.outOfStock}>Out of stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
