import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import items from "../Constants/NavbarItems";
import academicItems from "../Constants/AcademicsItems";
function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    console.log("btn clicked");
  };
  return (
    <nav className="text-lg">
      <div className="border-2 border-blue-500 py-2 px-10 h-20 flex items-center">
        <div className="font-semibold">Home</div>
        <div className="flex flex-col">
          <div className="flex gap-4 font-semibold mx-24">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center hover:bg-red-600 hover:text-white cursor-pointer gap-1 px-3 py-2 rounded-xl"
                onClick={()=>handleDropdown(index)}
              >
                <span>{item.name}</span>
                <FaAngleDown />
              </div>
            ))}
          </div>
          {/* Dropdown Div */}
          {academicItems.map((item,index)=>(activeIndex === index && (
            <div className=" border-2 border-purple-500  text-black text-lg w-1/4 p-4 rounded-2xl mt-80 ">
              <div className="bg-black text-white px-4 py-2 rounded-lg text-center">
                Departments
              </div>
              <div>
                <ul className="px-4 mt-2">
                  {academicItems.map((item)=>(
                  <li key={item.id} className="py-1">{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>)
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
