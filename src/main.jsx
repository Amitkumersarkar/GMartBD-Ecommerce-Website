import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayOut from "./mainLayout/MainLayOut";
import Home from "./components/HomePage/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
// import SignIn from "./auth/SignIn";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",                 // parent route
    Component: MainLayOut,     // layout component
    children: [
      {
        index: true,           // renders at "/"
        Component: Home,
      },
      {
        path: "allProducts",   // renders at "/allProducts"
        Component: AllProducts,
      },
      // {
      //   path: "signIn",
      //   Component: SignIn,
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
