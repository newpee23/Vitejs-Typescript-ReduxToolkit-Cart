import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import SignIn from "./pages/SignIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/signin",
    element: <SignIn/>
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router}/>
      
    </Provider>
  </React.StrictMode>
);
