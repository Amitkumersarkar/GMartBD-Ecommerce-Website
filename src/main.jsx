// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppContextProvider } from './context/AppContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </BrowserRouter>
  // </StrictMode>,
)
