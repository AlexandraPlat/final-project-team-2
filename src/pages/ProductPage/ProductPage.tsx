import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../../api/productsApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../components/cart/cartSlice";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  // я беру :id из URL.
  // Например /product/prod-001 → id = "prod-001"
  const { id } = useParams<{ id: string }>();

  // беру весь список товаров из RTK Query кэша
  const { data: products, isLoading, isError } = useGetProductsQuery();

  // подключаю Redux — dispatch для отправки действий
  const dispatch = useAppDispatch();

  // прроверяю есть ли уже этот товар в корзине
  // state.cart.items — массив CartItem (Product + qty)
  const isInCart = useAppSelector((state) =>
    state.cart.items.some((item) => item.id === id),
  );

  // локальное состояние для анимации кнопки после добавления
  const [justAdded, setJustAdded] = useState(false);

  // состояния загрузки и ошибки
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p style={{ color: "red" }}>Failed to load product.</p>;

  // я ищу конкретный товар по id из URL среди всех загруженных товаров
  const product = id ? products?.find((p) => p.id === id) : undefined;

  // а если товар не найден — показывю страницу 404
  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>🔍</div>
        <h2 className={styles.notFoundTitle}>Product Not Found</h2>
        <p className={styles.notFoundText}>
          The product you&apos;re looking for doesn&apos;t exist or was removed.
        </p>
        <Link to="/catalog" className={styles.notFoundLink}>
          Back to Catalog
        </Link>
      </div>
    );
  }

  // это обработчик кнопки "Add to Cart"
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // отправляем действие в Redux
    setJustAdded(true); // включаем зелёную анимацию
    setTimeout(() => setJustAdded(false), 2500); // через 2.5с возвращаем кнопку
  };

  // вычисляю CSS-класс кнопки в зависимости от состояния
  const btnClass = [
    styles.addBtn,
    justAdded
      ? styles.addBtnSuccess // если только что добавила, тогда зелёная
      : isInCart
        ? styles.addBtnInCart // уже в корзине, тогда голубая
        : product.stock === 0
          ? styles.addBtnDisabled // нет в наличии, тогда серая
          : styles.addBtnDefault, // обычная, тогда будет синяя
  ].join(" ");

  return (
    <div className={styles.page}>
      <Link to="/catalog" className={styles.backLink}>
        ← Back to Catalog
      </Link>

      <div className={styles.grid}>
        {/* Левая колонка — фото */}
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>

        {/* Правая колонка — детали */}
        <div className={styles.details}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.priceLine}>
            <span className={styles.price}>
              ${product.price.toLocaleString()}
            </span>
            <div className={styles.ratingBadge}>★ {product.rating}</div>
          </div>

          <p className={styles.description}>{product.description}</p>

          {/* Наличие товара */}
          <div className={styles.stockLine}>
            {product.stock > 0 ? (
              <>
                <span
                  className={`${styles.stockDot} ${styles.stockDotGreen}`}
                />
                <span className={styles.stockTextGreen}>
                  In stock — {product.stock} units available
                </span>
              </>
            ) : (
              <>
                <span className={`${styles.stockDot} ${styles.stockDotRed}`} />
                <span className={styles.stockTextRed}>Out of stock</span>
              </>
            )}
          </div>

          {/* Кнопка с тремя состояниями */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={btnClass}
          >
            {justAdded
              ? "✓ Added to Cart!"
              : isInCart
                ? "Add One More"
                : "Add to Cart"}
          </button>

          {/* Ссылка на корзину появляется только если товар туда добавлен */}
          {isInCart && !justAdded && (
            <Link to="/cart" className={styles.viewCartLink}>
              View Cart →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
