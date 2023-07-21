import Navbar from "./components/Navbar.js";
import Banner from "./components/Home/Banner.js";
import Display from "./components/Home/Display.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Banner />
      <Display value={"Featured Product"} />
      <Display value={"Recommended Products"} /> */}
      <Footer />
    </>
  );
}

export default App;
