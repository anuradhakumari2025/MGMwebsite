import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import items from "../Constants/NavbarItems";
import academicItems from "../Constants/AcademicsItems";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <nav className="text-lg">
        <div className="border-b-2 border-blue-700 py-2 px-10 h-20 flex items-center bg-gray-100">
          <div className="font-semibold text-xl text-blue-800 cursor-pointer">Home</div>
          <div className="flex flex-col ml-10">
            <div className="flex gap-6 font-semibold">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex items-center cursor-pointer gap-1 px-3 py-2 text-blue-800 rounded-lg transition-colors duration-300 ${
                    activeIndex === index ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-blue-600 hover:text-white'
                  }`}
                  onMouseEnter={() => handleDropdown(index)}
                  onMouseLeave={() => handleDropdown(null)}
                >
                  <span>{item.name}</span>
                  <FaAngleDown />
                  {activeIndex === index && (
                    <div className="absolute left-0 z-10 bg-white border border-gray-300 shadow-lg rounded-lg mt-[645px] w-48">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg text-center">
                        Departments
                      </div>
                      <ul className="py-2">
                        {academicItems.map((academicItem) => (
                          <li
                            key={academicItem.id}
                            className="px-4 py-2 text-blue-800 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                          >
                            {academicItem.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
