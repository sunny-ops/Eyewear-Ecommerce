import Navbar from "./components/Navbar.js";
import Banner from "./components/Home/Banner.js";
import Display from "./components/Home/Display.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home/Home.js";
import Shop from "./components/Shop/Shop.js";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useRoutes,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Shop />
      {/* <Banner />
      <Display value={"Featured Product"} />
      <Display value={"Recommended Products"} /> */}
      <Footer />
    </>
  );
}

export default App;
