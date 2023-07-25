import { Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
// import Product from "../components/Product/Product";
import ProductInfo from "../components/Product/ProductInfo";

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product/:id", element: <ProductInfo /> },
];

export default routes;
