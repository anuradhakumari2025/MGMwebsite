import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Testomonial from "./Components/Testomonial";
import About from "./Components/About/About";
import Programs from "./Components/Programs/Programs";
import Campus from "./Components/Campus/Campus";
import CampusLife from "./Components/CampusLife";
import NavbarVidio from "./Components/NavbarVidio/NavbarVidio";
import ComputerEng from "./Components/ComputerEng";
import ItEngg from "./Components/ItEngg";
import BiomedicalEngg from "./Components/BiomedicalEngg";
import CivilEngg from "./Components/CivilEngg";
import ExtcEngg from "./Components/ExtcEngg";
import ChemicalEngg from "./Components/ChemicalEngg";
import Mechanical from "./Components/Mechanical";

function App() {
  return (
    <Router>
      <>
        <Head />
        <Navbar />
        {/* Main content where routes will change */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarVidio />
                <Programs />
                <About />
                <Campus />
                <Testomonial />
              </>
            }
          />
          <Route path="/more-campus" element={<CampusLife />} />
          <Route path="/comp-engg" element={<Mechanical />}/>
          {/* Add more routes for additional pages */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
