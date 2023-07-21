import { Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/shop", element: <Shop /> },
];

export default routes;
