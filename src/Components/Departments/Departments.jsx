import React from "react";
import { Link, Outlet } from "react-router-dom";

function Departments() {
  return (
    <>
      <hr />
      <div className="w-full max-w-5xl my-6 mx-auto lg:px-0 px-24">
        <ol className="list-disc space-y-4 ">
          <li className="font-bold text-xl">
            <Link to="/departments" className="hover:text-blue-500">
              UnderGraduate
            </Link>
            <ol className="list-decimal ml-5 my-2 font-normal text-[16px]">
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/biomedical">
                  BioMedical Engineering
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/chemical">
                  Chemical Engineering{" "}
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/computer">
                  Computer Engineering
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/civil">
                  Civil Engineering
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/electrical">
                  Electrical Engineering
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/extc">
                  Electronics and Telecommunication Engineering
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/it">
                  Infromation and Telecommunication Engineering
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/departments/undergraduate/mechanical">
                  Mechanical Engineering
                </Link>
              </li>
            </ol>
          </li>
          <li className="font-bold text-xl">
            PostGraduate
            <ol className="list-decimal ml-5 my-2 font-normal text-[16px]">
              <li>BioMedical Engineering</li>
              <li>Chemical Engineering</li>
              <li>Civil Engineering</li>
            </ol>
          </li>
          <li className="font-bold text-xl">PHD Courses</li>
        </ol>
      </div>
    </>
  );
}

export default Departments;
