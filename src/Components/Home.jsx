import React from "react";
import NavbarVidio from "./NavbarVidio/NavbarVidio";
import Programs from "./Programs/Programs";
import About from "./About/About";
import Campus from "./Campus/Campus";
import Testimonial from "./Testomonial";

function Home() {
  return (
    <>
      <NavbarVidio />
      <About />
      <Programs />
      <Campus />
      <Testimonial />
    </>
  );
}

export default Home;
