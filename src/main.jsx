import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayOut from "./mainLayout/MainLayOut";
import Home from "./components/HomePage/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
// import SignIn from "./auth/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import ProductCategory from "./pages/ProductCategory/ProductCategory";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: '/products/:category',
        Component: ProductCategory
      }
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
