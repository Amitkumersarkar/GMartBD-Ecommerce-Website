import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayOut from "./mainLayout/MainLayOut";
import Home from "./components/HomePage/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Cart from "./pages/Cart/Cart";

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
        path: "products/:category",
        Component: ProductCategory,
      },
      {
        path: "allProducts/:category/:id",
        Component: ProductDetails,
      },
      {
        path: 'cart',
        Component: Cart
      }
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
