import React from "react";
import Banner from "./Banner";
import Display from "./Display";

function Home() {
  return (
    <>
      <Banner />
      <Display value={"Featured Product"} />
      <Display value={"Recommended Products"} />
    </>
  );
}

export default Home;
