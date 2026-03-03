import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/cart/cartSlice";
import { productsApi } from "../api/productsApi";

/* // combineSlices собирает редьюсеры автоматически
const rootReducer = combineSlices(cartSlice); */
/* combineSlices не существует — упадёт с ReferenceError
                                              // и rootReducer нигде не используется — просто мёртвый код */

// Создаём store
// регистрирую кэш RTK Query в Redux-дереве
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Тип RootState строим из rootReducer
export type RootState = ReturnType<typeof store.getState>;

// Тип dispatch (чтобы useDispatch<AppDispatch>() работал)
export type AppDispatch = typeof store.dispatch;
