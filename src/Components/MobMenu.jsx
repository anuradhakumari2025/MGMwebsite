import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
    setClicked(null); // Reset the clicked submenu
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  return (
    <div className="items-center">
      <button className="relative z-50 " onClick={toggleDrawer}>
        {isOpen ? (
          <RxCross1 className="font-bold text-2xl" />
        ) : (
          <GiHamburgerMenu />
        )}
      </button>
      <motion.div
        className="absolute left-0 right-0 top-[56vh] overflow-y-auto h-full bg-blue-700/50 backdrop-blur text-white  p-6 z-50 border-[1px] border-black duration-300"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu, path }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <div
                  className="flex-center-between text-[18px] p-4 font-normal hover:text-black hover:bg-white rounded-md cursor-pointer relative"
                  onClick={() =>
                    hasSubMenu ? setClicked(isClicked ? null : i) : closeMenu()
                  }
                >
                  {path ? (
                    <Link to={path} className="w-full">
                      {name}
                    </Link>
                  ) : (
                    <span>{name}</span>
                  )}
                  {hasSubMenu && (
                    <FaAngleDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </div>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, path, icon: Icon }) => (
                      <li key={name}>
                        <Link
                          to={path || "#"}
                          onClick={closeMenu}
                          className="p-2 flex-center text-[15px] hover:text-black font-thin hover:bg-white rounded-md gap-x-2 cursor-pointer"
                        >
                          {/* <Icon size={17} /> */}
                          {name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

export default MobMenu;
