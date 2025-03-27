import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function DesktopMenu({ menu }) {
  const hasSubMenu = menu?.subMenu?.length > 0;
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  // Animation Variants
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <Link 
      to={menu.path || "#"} // Ensure path exists
       className="flex-center gap-1  hover:bg-white cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <FaAngleDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </Link>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-2 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu?.subMenu?.map((subMenu, idx) => (
              <div key={idx} className="cursor-pointer">
                <div className="group/menubox">
                  <div className="group-hover/menubox:bg-white hover:text-black px-6 py-2 duration-300">
                  {subMenu.name === "Contact" ? (
                      <Link to="#footer">
                        <h6
                        onClick={() => {
                          const footerElement = document.getElementById("footer");
                          if (footerElement) {
                            footerElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        >{subMenu?.name}</h6>
                      </Link>
                    ) : (
                      <Link to={subMenu.path || "#"}>
                        <h6>{subMenu?.name}</h6>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}

export default DesktopMenu;
