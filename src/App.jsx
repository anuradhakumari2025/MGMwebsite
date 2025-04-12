import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CampusLife from "./Components/CampusLife";
import Departments from "./Components/Departments/Departments";
import ComputerEng from "./Components/Departments/Undergraduate/ComputerEng";
import CivilEngg from "./Components/Departments/Undergraduate/CivilEngg";
import Mechanical from "./Components/Departments/Undergraduate/Mechanical";
import ElectricalEng from "./Components/Departments/Undergraduate/ElectricalEng";
import BiomedicalEngg from "./Components/Departments/Undergraduate/BiomedicalEngg";
import ItEngg from "./Components/Departments/Undergraduate/ItEngg";
import ChemicalEngg from "./Components/Departments/Undergraduate/ChemicalEngg";
import ExtcEngg from "./Components/Departments/Undergraduate/ExtcEngg";
import Home from "./Components/Home";
import ChairmanMsg from "./Components/About/ChairmanMsg";
import VicePrincipalMsg from "./Components/About/VicePrincipalMsg";
import TrusteeMsg from "./Components/About/TrusteeMsg";
import VisionMission from "./Components/About/VisionMission";
import CodeOfConduct from "./Components/About/CodeOfConduct";
import StudentActivity from "./Components/StudentActivity";
import Alumni from "./Components/Alumni";
import AcademicCalender from "./Components/Academics/AcademicCalender";
import Contact from "./Components/Contact/Contact";
import FeeStructure from "./Components/Admission/FeeStructure";

function App() {
  return (
    <Router>
      <>
        <Head />
        <Navbar />
        {/* Main content where routes will change */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/chairman-msg" element={<ChairmanMsg />} />
          <Route
            path="/about/vice-principal-msg"
            element={<VicePrincipalMsg />}
          />
          <Route path="/about/trustee-msg" element={<TrusteeMsg />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/code-of-conduct" element={<CodeOfConduct />} />

          {/* Academics */}
          <Route path="/academics/calendar" element={<AcademicCalender />} />

          {/* Departments */}
          <Route path="/departments" element={<Departments />} />
          <Route
            path="/departments/undergraduate/computer"
            element={<ComputerEng />}
          />
          <Route
            path="/departments/undergraduate/civil"
            element={<CivilEngg />}
          />
          <Route
            path="/departments/undergraduate/mechanical"
            element={<Mechanical />}
          />
          <Route
            path="/departments/undergraduate/electrical"
            element={<ElectricalEng />}
          />
          <Route
            path="/departments/undergraduate/biomedical"
            element={<BiomedicalEngg />}
          />
          <Route path="/departments/undergraduate/it" element={<ItEngg />} />
          <Route
            path="/departments/undergraduate/chemical"
            element={<ChemicalEngg />}
          />
          <Route
            path="/departments/undergraduate/extc"
            element={<ExtcEngg />}
          />

          {/* Campus */}
          <Route path="/campus" element={<CampusLife />} />

          {/* Admission */}
          <Route path="/admission/fee-structure" element={<FeeStructure />} />

          {/* Students Activity */}
          <Route path="/students-activity" element={<StudentActivity />} />

          {/* Alumni */}
          <Route path="/alumni" element={<Alumni />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 Not Found */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
