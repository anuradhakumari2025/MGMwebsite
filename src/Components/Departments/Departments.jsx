import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Departments() {
  const underGradDepts = [
    { name: "BioMedical Engineering", path: "biomedical" },
    { name: "Chemical Engineering", path: "chemical" },
    { name: "Computer Engineering", path: "computer" },
    { name: "Civil Engineering", path: "civil" },
    // { name: " Electrical Engineering", path: " electrical" },
    { name: "Electronics and Telecommunication Engineering", path: "extc" },
    { name: "Infromation and Telecommunication Engineering", path: "it" },
    { name: " Mechanical", path: "mechanical" },
  ];
  const postGradDepts = [
    { name: "BioMedical Engineering" },
    { name: "Chemical Engineering" },
    { name: "Civil Engineering" },
  ];
  return (
    <>
      <hr />
      <div className="flex pt-6">
        <div className="lg:w-[300px] bg-ambr-400 pl-4">
          <div className="lg:space-y-4 ">
            <div className="font-bold lg:text-xl text-base">
              <p className="text-blue-800">UnderGraduate</p>
              <div className="ml-3 my-4 font-normal lg:text-[18px] text-sm">
                {underGradDepts.map((dept, idx) => (
                  <div key={idx} className="hover:text-blue-600">
                    <NavLink
                      to={`/departments/undergraduate/${dept.path}`}
                      className={({ isActive }) =>
                        `flex items-center gap-2 py-4 pl-2 cursor-pointer  duration-200 ${
                          isActive
                            ? "border-r-4 md:border-r-[6px] border-blue-600 bg-blue-600/20 text-blue-600"
                            : "hover:bg-blue-200/90 border-white"
                        }`
                      }
                    >
                      {dept.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            {/* Post Graduate */}
            <div className="font-bold lg:text-xl text-base">
              <p className="text-blue-800">PostGraduate</p>
              <div className=" ml-3 my-2 space-y-3 font-normal lg:text-[18px] text-sm">
                {postGradDepts.map((dept, idx) => (
                  <div className="" key={idx}>
                    <NavLink>{dept.name}</NavLink>
                  </div>
                ))}
              </div>
            </div>

            {/* <li className="font-bold text-xl">PHD Courses</li> */}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Departments;
