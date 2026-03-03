import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

/* 
import { Provider } from 'react-redux' — это специальный React-компонент. 
Он принимает store как prop и передаёт его всем дочерним компонентам через React Context. 

import { store } from './app/store' — импортируем store

<Provider store={store}> — оборачиваем <App />. 


....и теперь любой компонент внутри приложения — на любом уровне вложенности может вызвать useSelector или useDispatch и они найдут store через контекст.*/
