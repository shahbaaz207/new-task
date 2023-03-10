import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import { Login } from "../container/auth";
import Product from "../container/product";
import SingleProduct from "../container/single-product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: ":id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
