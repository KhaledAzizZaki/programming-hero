import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Moviles from "./components/moviles/Moviles.jsx";
import Laptop from "./components/laptop/Laptop.jsx";
import User from "./components/user/User.jsx";
import User2 from "./components/user/User2.jsx";
import UserDetails from "./components/user/UserDetails.jsx";
import Posts from "./components/post/Posts.jsx";
import PostDetails from "./components/post/PostDetails.jsx";

const userData = fetch("https://jsonplaceholder.typicode.com/users#").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Moviles },
      { path: "laptop", Component: Laptop },
      {
        path: "user",
        Component: User,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users#"),
      },
      {
        path: "user2",
        element: (
          <Suspense fallback={<p>Loading....</p>}>
            <User2 userData={userData}></User2>
          </Suspense>
        ),
      },
      {
        path: "User2/:userid",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDetails,
      },
      {
        path: "post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "post/:postid",
        Component: PostDetails,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
      },
    ],
  },
  {
    path: "about",
    element: <div>About me here</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "app2",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
