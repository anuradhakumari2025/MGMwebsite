import { useState } from "react";
import items from "../Constants/NavbarItems";
import academicItems from "../Constants/AcademicsItems";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import { Menus } from "../assets/Utils";
import MobMenu from "./MobMenu";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/comp-engg"); // Redirect to the new page
  };
  return (
    // <div>
    //   <nav className="text-lg">
    //     <div className="border-b-2 border-blue-700 py-2 px-10 h-20 flex items-center bg-gry-100 bg-pink-300">
    //       <div className="font-semibold text-xl text-blue-800 cursor-pointer">
    //         <Link to="/">Home</Link>
    //       </div>
    //       <button
    //         className="ml-5 border-2 border-blue-600 p-2 rounded-3xl"
    //         onClick={handleRedirect}
    //       >
    //         Comp
    //       </button>
    //       <div className="flex flex-col ml-10">
    //         <div className="flex gap-6 font-semibold">
    //           {items.map((item, index) => (
    //             <div
    //               key={item.id}
    //               className={`relative flex items-center cursor-pointer gap-1 px-3 py-2 text-blue-800 rounded-lg transition-colors duration-300 ${
    //                 activeIndex === index
    //                   ? "hover:bg-blue-600 hover:text-white"
    //                   : "hover:bg-blue-600 hover:text-white"
    //               }`}
    //               onMouseEnter={() => handleDropdown(index)}
    //               onMouseLeave={() => handleDropdown(null)}
    //             >
    //               <span>{item.name}</span>
    //               <FaAngleDown />
    //               {activeIndex === index && (
    //                 <div className="absolute left-0 z-10 bg-white border border-gray-300 shadow-lg rounded-lg mt-[645px] w-48">
    //                   <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg text-center">
    //                     Departments
    //                   </div>
    //                   <ul className="py-2">
    //                     {academicItems.map((academicItem) => (
    //                       <li
    //                         key={academicItem.id}
    //                         className="px-4 py-2 text-blue-800 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
    //                       >
    //                         {academicItem.name}
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               )}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <>
      <div className="">
        <header className="h-16 text-[15px] inset-0 flex-center bg-white border-t-[1px] border-t-gray-500">
          <nav className=" px-10 lg:px-2  flex items-center justify-between lg:justify-center text-blue-800 text-xl lg:text-lg gap-6 font-semibold lg:font-medium w-full max-w-7xl mx-auto">
            <div className="flex-center gap-x-3 z-[999] relative">
              {/* <img src='/mgm-logo.jpeg' alt="" className="size-8" /> */}
              <Link to='/'>
                <h3 className="cursor-pointer">Home</h3>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="">
              <ul className="gap-x-1 lg:flex lg:items-center  hidden">
                {Menus.map((menu) => (
                  <DesktopMenu menu={menu} key={menu.name} />
                ))}
              </ul>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </nav>
        </header>
      </div>
      {/* <hr className="h-8 lg:h-2"/> */}
    </>
  );
}

export default Navbar;
