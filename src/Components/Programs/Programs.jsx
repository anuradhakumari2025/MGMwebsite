import React, { useEffect, useRef } from "react";
import "./Programs.css";
import program1 from "/program-1.png";
import program2 from "/program-2.png";
import program3 from "/program-3.png";
import program_icon_1 from "/program-icon-1.png";
import program_icon_2 from "/program-icon-2.png";
import program_icon_3 from "/program-icon-3.png";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="">
      <h3 className="text-3xl font-bold uppercase py-4 pt-12 text-center text-[#212ea0]">
        our program
      </h3>
      <div>
        <h2 className="text-[#000f38] lg:text-[35px] text-[25px] text-center font-[700]">
          What We Offer
        </h2>
      </div>
      <div className="bg-white max-w-6xl w-full mx-auto my-4 grid sm:grid-cols-1 lg:grid-cols-3 lg:px-0 px-12  md:grid-cols-2 gap-10">
        <div className="program hover:scale-105">
          <img src={program1} alt="" className="rounded-xl block" />
          <Link to={"/departments"} onClick={() => window.scrollTo(0, 0)}>
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Graduation Degree</p>
            </div>
          </Link>
        </div>
        <div className="program hover:scale-105">
          <img src={program2} alt="" className="rounded-xl block" />
          <Link to={"/departments"} onClick={() => window.scrollTo(0, 0)}>
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Masters Degree</p>
            </div>
          </Link>
        </div>
        <div className="program hover:scale-105">
          <img src={program3} alt="" className="rounded-xl block" />
          <Link to={"/departments"} onClick={() => window.scrollTo(0, 0)}>
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Post Graduation</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;
