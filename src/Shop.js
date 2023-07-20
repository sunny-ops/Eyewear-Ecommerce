import NavbarShop from "./components/Shop/NavbarShop.js";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Home/Banner.js";
import Display from "./components/Home/Display.js";
import Footer from "./components/Footer.js";
import Products from "./components/Shop/Products.js";
function Shop() {
  return (
    <>
      <NavbarShop />
      <Products />
      <Footer></Footer>
    </>
  );
}

export default Shop;
