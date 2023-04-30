import React from "react";
import Card from "./Card";
import Feature from "./Feature";

const CardContainer = () => {
  return (
    <>
      <div className="main_container">
        <div className="card_container sm:flex sm:flex-wrap lg:flex ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Feature />
        <div className="card_container sm:flex sm:flex-wrap lg:flex md:mt-52  xl:mt-20">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Feature />
      </div>
    </>
  );
};

export default CardContainer;
