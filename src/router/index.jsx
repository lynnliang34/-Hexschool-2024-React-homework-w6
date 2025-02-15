import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import AdminProductsPage from "../pages/AdminProductsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
