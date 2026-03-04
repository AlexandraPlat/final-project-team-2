import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import styles from "./cart.module.css";
import {
  clearCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "./cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

// SHIPPING — фиксированная стоимость доставки.
const SHIPPING = 9.99;

type PaymentMethod = "card" | "paypal" | "klarna" | "applepay";

export default function CartPage() {
  // dispatch нужен для отправки действий в Redux
  const dispatch = useDispatch<AppDispatch>();

  // Получаем список товаров из Redux store.
  const items = useSelector((state: RootState) => state.cart.items);

  // itemsCount — общее количество товаров
  const itemsCount = items.reduce((sum, i) => sum + i.qty, 0);

  // subtotal — сумма товаров без доставки
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  // subtotal — сумма товаров без доставки
  // Если корзина пустая — не добавляем доставку.
  // Если есть товары — subtotal + SHIPPING.
  const total = items.length > 0 ? subtotal + SHIPPING : 0;

  // ✅ Способы оплаты (для визуала)
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const paymentLabel = (p: PaymentMethod) => {
    switch (p) {
      case "card":
        return "Card (Visa / MasterCard)";
      case "paypal":
        return "PayPal";
      case "klarna":
        return "Klarna (Pay later)";
      case "applepay":
        return "Apple Pay";
      default:
        return "Payment";
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    alert(
      `✅ Checkout (demo)\n\nPayment: ${paymentLabel(payment)}\nTotal: $${total.toFixed(
        2,
      )}\n\nКогда-то будет реальная оплата 😄`,
    );
  };

  return (
    <div className={styles.cartPage}>
      {/* HEADER */}
      <div className={styles.cartTop}>
        <h1 className={styles.cartTitle}>Shopping Cart</h1>
        {/* Подзаголовок — сколько товаров */}
        <div className={styles.cartSubtitle}>{itemsCount} items</div>
      </div>

      {/* Clear Cart показываем только если корзина не пустая. */}
      {items.length > 0 && (
        <button
          className={styles.cartClear}
          onClick={() => dispatch(clearCart())}
        >
          🗑 Clear Cart
        </button>
      )}

      {/* Пустая корзина */}
      {items.length === 0 ? (
        <div className={styles.cartEmpty}>
          {/* Иконка пустой корзины */}
          <div className={styles.cartEmptyIcon}>🛒</div>
          <div className={styles.cartEmptyText}>Your cart is empty</div>

          {/* Кнопка возвращает в каталог */}
          <Link className={styles.cartPrimaryBtn} to="/catalog">
            {/* !!! Возможно придется изменить !!! */}
            Browse Catalog
          </Link>
        </div>
      ) : (
        /* Заполненная корзина */
        <div className={styles.cartGrid}>
          {/* === Левая часть: список товаров === */}
          <div className={styles.cartList}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                {/* Картинка товара */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cartImg}
                  />
                ) : (
                  /* Самозакрывающийся div, заглушка если нету картинки */
                  <div className={styles.cartImgPlaceholder}></div>
                )}

                {/* Информация о товаре */}
                <div className={styles.cartInfo}>
                  <div className={styles.cartItemTitle}>{item.title}</div>
                  <div className={styles.cartItemCategory}>
                    {item.category ?? "—"}
                  </div>
                </div>

                {/* Управление количеством */}
                <div className={styles.cartQty}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    −
                  </button>

                  <div className={styles.qtyValue}>{item.qty}</div>

                  <button
                    className={styles.qtyBtn}
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>

                {/* Цена одного товара */}
                <div className={styles.cartPrice}>${item.price.toFixed(2)}</div>

                {/* Удаление позиции полностью */}
                <button
                  className={styles.cartRemove}
                  onClick={() => dispatch(removeFromCart(item.id))}
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* ==== Правая часть: Order Summary ==== */}
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>

            {/* Сумма товаров */}
            <div className={styles.summaryRow}>
              <span>Items ({itemsCount})</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Фиксированная доставка */}
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>${SHIPPING.toFixed(2)}</span>
            </div>

            {/* визуальный разделитель */}
            <div className={styles.summaryDivider} />

            {/* Итог */}
            <div className={styles.summaryTotalRow}>
              <span>Total</span>
              <span className={styles.summaryTotal}>${total.toFixed(2)}</span>
            </div>

            {/* ✅ Payment methods (demo) */}
            <div className={styles.payBlock}>
              <div className={styles.payTitle}>Payment method</div>

              <label className={styles.payOption}>
                <input
                  className={styles.payRadio}
                  type="radio"
                  name="payment"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                <span className={styles.payIcon}>💳</span>
                <span className={styles.payText}>Card</span>
              </label>

              <label className={styles.payOption}>
                <input
                  className={styles.payRadio}
                  type="radio"
                  name="payment"
                  checked={payment === "paypal"}
                  onChange={() => setPayment("paypal")}
                />
                <span className={styles.payIcon}>🅿️</span>
                <span className={styles.payText}>PayPal</span>
              </label>

              <label className={styles.payOption}>
                <input
                  className={styles.payRadio}
                  type="radio"
                  name="payment"
                  checked={payment === "klarna"}
                  onChange={() => setPayment("klarna")}
                />
                <span className={styles.payIcon}>🧾</span>
                <span className={styles.payText}>Klarna</span>
              </label>

              <label className={styles.payOption}>
                <input
                  className={styles.payRadio}
                  type="radio"
                  name="payment"
                  checked={payment === "applepay"}
                  onChange={() => setPayment("applepay")}
                />
                <span className={styles.payIcon}>🍎</span>
                <span className={styles.payText}>Apple Pay</span>
              </label>
            </div>

            {/* Оформление заказа */}
            <button
              className={styles.summaryPrimaryBtn}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

            {/* Возврат в каталог */}
            <Link className={styles.summaryLink} to="/catalog">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
