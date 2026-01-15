import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Home from "./components/HomePage/Home";
import MainLayOut from "./mainLayout/MainLayOut";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <Error></Error>,
    children: {
      index: true,
      path: "/",
      Component: Home

    }
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
