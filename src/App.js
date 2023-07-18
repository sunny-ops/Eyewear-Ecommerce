import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Display from "./components/Display.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Display value={"Featured Product"} />
      <Display value={"Recommended Products"} />
      <Footer />
    </>
  );
}

export default App;
