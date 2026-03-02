import { combineSlices, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/cart/cartSlice";

// combineSlices собирает редьюсеры автоматически
const rootReducer = combineSlices(cartSlice);

// Тип RootState строим из rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Создаём store
export const store = configureStore({
  reducer: rootReducer,
});

// Тип dispatch (чтобы useDispatch<AppDispatch>() работал)
export type AppDispatch = typeof store.dispatch;
