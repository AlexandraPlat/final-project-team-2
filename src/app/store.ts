import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../components/cart/cartSlice";
import { productsApi } from "../api/productsApi";
import { usersApi } from "../features/users/api";

export const store = configureStore({
  reducer: {
    // RTK Query APIs
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,

    // обычные slice
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(usersApi.middleware),
});

// Типы
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;