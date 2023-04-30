import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CardContainer from "./components/CardContainer";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container m-auto ">
        <Navbar />
        <Slider />
        <Promo />
        <CardContainer />
      </div>
      <Footer />
    </>
  );
};

export default App;
