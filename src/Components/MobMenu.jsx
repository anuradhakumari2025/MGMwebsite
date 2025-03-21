import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";


function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
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
    <div>
      <button className="relative z-50" onClick={toggleDrawer}>
        {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <motion.div
        className="absolute left-0 right-0 top-[260px] overflow-y-auto h-full bg-white/30 backdrop-blur text-blue-600 p-6 z-50 border-[1px] border-black"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <span
                  className="flex-center-between text-[18px] p-4 hover:bg-white rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <FaAngleDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center text-[15px] hover:bg-white rounded-md gap-x-2 cursor-pointer"
                      >
                        {/* <Icon size={17} /> */}
                        {name}
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
