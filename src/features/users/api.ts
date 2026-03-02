import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ---------- Типы данных ----------

// Пользователь, который возвращается сервером при создании нового пользователя
export type User = {
  id?: number; // генерируется сервером
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // можно добавить другие поля, если будут нужны
};

// Пользователь для отправки на сервер (новый пользователь)
export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // можно добавить другие поля, которые реально отправляются
};

// Тип запроса для логина
export type LoginRequest = {
  username: string;
  password: string;
  expiresInMins?: number; // опционально, defaults to 60
};


// Тип ответа при логине
export type LoginRequestResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender?: string; // optional, сервер может не возвращать
  image?: string;
  accessToken: string; // JWT access token
  refreshToken: string; // refresh token
};

// Ответ при "удалении" пользователя на dummyjson
export type DeletedUser = {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;

  isDeleted: boolean; // true, т.к. сервер симулирует удаление
  deletedOn: string; // ISO-время удаления
  // можно добавить другие поля, которые возвращает сервер
};

// ---------- RTK Query API ----------

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }), // базовый URL API

  endpoints: (builder) => ({
    // ---------- Добавление пользователя ----------
    // POST /users/add
    // Отправляем объект NewUser, сервер возвращает созданного User с id
    addUser: builder.mutation<User, NewUser>({
      query: (newUser) => ({
        url: "users/add",
        method: "POST",
        body: newUser,
      }),
    }),

    // ---------- Логин пользователя ----------
    // POST /user/login
    // Отправляем {username, password, expiresInMins} (опционально)
    // Сервер возвращает объект пользователя с accessToken и refreshToken
    login: builder.mutation<LoginRequestResponse, LoginRequest>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // ---------- Удаление пользователя ----------
    // DELETE /users/:id
    // dummyjson симулирует удаление и возвращает объект DeletedUser
    // Поля: isDeleted = true, deletedOn = ISO-время
    deleteUser: builder.mutation<DeletedUser, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// ---------- Экспорт хуков для компонентов ----------
export const { useAddUserMutation, useLoginMutation, useDeleteUserMutation } =
  usersApi;
