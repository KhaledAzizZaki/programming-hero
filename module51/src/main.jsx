import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Root from "./layouts/Root.jsx";
import Register from "./components/register/Register.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Orders from "./components/orders/Orders.jsx";
import Profile from "./components/profile/Profile.jsx";
import PrivateRout from "./router/PrivateRout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "orders",
        // Component: Orders,
        element: (
          <PrivateRout>
            <Orders></Orders>
          </PrivateRout>
        ),
      },
      {
        path: "profile",
        // Component: Profile,
        element: (
          <PrivateRout>
            <Profile></Profile>
          </PrivateRout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
