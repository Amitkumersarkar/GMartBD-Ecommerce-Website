import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import MainLayOut from "./mainLayout/MainLayOut";
import Home from "./components/HomePage/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Cart from "./pages/Cart/Cart";
import AddAddress from "./pages/AddAddress/AddAddress";
import MyOrders from "./pages/MyOrders/MyOrders";
import SellerLogIn from "./components/SellerDashBoard/SellerLogIn";
import SellerLayOut from "./pages/Seller/SellerLayOut";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AddProduct from "./pages/Seller/AddProduct/AddProduct";
import ProductList from "./pages/Seller/ProductList/ProductList";
import Orders from "./pages/Seller/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: AllProducts },
      { path: "products/:category", Component: ProductCategory },
      { path: "products/:category/:id", Component: ProductDetails },
      { path: "cart", Component: Cart },
      { path: "add-address", Component: AddAddress },
      { path: "myOrders", Component: MyOrders },
      { path: "seller", Component: SellerLogIn },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },

      // Seller Dashboard Routes — Nested under SellerLayOut
      {
        path: "sellerDashBoard",
        Component: SellerLayOut,
        children: [
          { index: true, Component: AddProduct },
          { path: "addProduct", Component: AddProduct },
          { path: "productList", Component: ProductList },
          { path: "Orders", Component: Orders },
        ],
      },
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