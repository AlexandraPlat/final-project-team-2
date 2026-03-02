import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Тип товара.
// Потом можно заменить на настоящий тип из products.
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
};

// Товар в корзине = товар + количество
type CartItem = Product & {
  qty: number;
};

type CartState = {
  items: CartItem[];
};

// Начальное состояние: корзина пуста
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 1. Добавить товар
    // Принимает объект товара (Product)
    addToCart: (state, action: PayloadAction<Product>) => {
      // Проверяем, есть ли уже такой товар в массиве по ID
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        // Если товар уже был — просто увеличиваем его счетчик.
        // ПРИМЕЧАНИЕ: В Redux Toolkit можно писать так (изменять напрямую),
        // под капотом библиотека сама сделает это безопасно (иммутабельно).
        existing.qty += 1;
      } else {
        // Если товара не было — добавляем его в массив и ставим 1 шт.
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    // 2. Увеличить количество (+1)
    // Принимает только ID товара (number)
    increaseQty: (state, action: PayloadAction<string>) => {
      // Находим нужный товар и плюсуем
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },

    // 3. Уменьшить количество (-1)
    // Принимает только ID товара (string)
    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      // Если товар не найден — просто ничего не делаем и выходим
      item.qty -= 1;

      // Если количество упало до 0 или ниже — удаляем товар совсем
      if (item.qty <= 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    // 4. Удалить товар полностью
    removeFromCart: (state, action: PayloadAction<string>) => {
      // Оставляем в массиве только те товары, у которых ID НЕ совпадает с переданным
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    // 5. Очистить всю корзину (кнопка "Удалить всё")
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Экспортируем "экшены" (команды), чтобы вызывать их в компонентах
// Например: dispatch(addToCart(product))
export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Экспортируем сам редьюсер, чтобы подключить его в store.ts

export default cartSlice;