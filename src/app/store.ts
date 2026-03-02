import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../features/users/api'


export const store = configureStore({
  reducer: {
    // подключаем RTK Query reducer
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch