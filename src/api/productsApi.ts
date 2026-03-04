/* 

Файл productsApi.ts создаёт API сервис с помощью RTK Query. 
Я описываю один endpoint getProducts, который делает GET-запрос к файлу /data/products.json. 
RTK Query автоматически генерирует хук useGetProductsQuery, который я использую в компоненте CatalogPage. 
Хук возвращает данные, флаг загрузки и флаг ошибки и мне не нужно управлять этим вручную через useState и useEffect. 
Тип ответа типизирован как Product[], что обеспечивает строгую типизацию TypeScript во всём проекте. 

Надеюсь, что понятно объяснила( */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/data/products.json",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
