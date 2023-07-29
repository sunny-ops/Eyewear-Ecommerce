import { Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
// import Product from "../components/Product/Product";
import ProductInfo from "../components/Product/ProductInfo";
import Recommended from "../components/Recommended/Recommened";
import Featured from "../components/Featured/Featured";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/featured", element: <Featured /> },
  { path: "/recommended", element: <Recommended /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/product/:id/:name", element: <ProductInfo /> },
];

export default routes;
