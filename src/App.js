import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Display from "./components/Display.js";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Display value={"Featured Product"} />
    </>
  );
}

export default App;
