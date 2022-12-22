import React from "react";
import Navbar from "./Navbar";
import Lower from "./Lower";
import Middle from "./Middle";
import Upper from "./Upper";


const Airbnb = () => {
  return (
    <>
        <Navbar />
        <Upper/>
        <Middle />
        <Lower />
    </>
  );
};

export default Airbnb;