import { Link } from "react-router-dom"; // Import Link from react-router-dom
import DesktopMenu from "./DesktopMenu";
import { Menus } from "../assets/Utils";
import MobMenu from "./MobMenu";

function Navbar() {
  return (
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
    </>
  );
}

export default Navbar;
