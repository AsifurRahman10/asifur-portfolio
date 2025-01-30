import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleMenuChange = () => {
    setOpenSidebar(!openSidebar);
  };

  const navList = (
    <>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Tech</li>
      </NavLink>
      <NavLink>
        <li>Projects</li>
      </NavLink>
      <NavLink>
        <li>Contract</li>
      </NavLink>
    </>
  );
  const socialIcons = (
    <>
      <Link>
        <li className="hover:text-gray-500">
          <FaGithub></FaGithub>
        </li>
      </Link>
      <Link>
        <li className="hover:text-blue-500">
          <FaLinkedin></FaLinkedin>
        </li>
      </Link>
      <Link>
        <li className="hover:text-blue-500">
          <FaFacebook></FaFacebook>
        </li>
      </Link>
    </>
  );
  return (
    <nav className="fixed z-10 py-5 border-b w-full  border-b-gray-600 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
        <Link>
          <h2 className="font-semibold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent opacity-60 text-2xl md:text-3xl">
            Asifur
          </h2>
        </Link>

        <ul className="text-gray-300 font-light hidden md:flex justify-center items-center gap-6">
          {navList}
        </ul>

        <ul className="text-white text-xl hidden md:flex justify-center items-center gap-4 ">
          {socialIcons}
        </ul>
        {openSidebar ? (
          <RxCross2
            onClick={handleMenuChange}
            className="block md:hidden text-gray-400 text-4xl"
          />
        ) : (
          <IoIosMenu
            onClick={handleMenuChange}
            className="block md:hidden text-gray-400 text-4xl"
          />
        )}
        <div
          className={`fixed top-0 right-0 h-screen w-[200px] bg-black/90 transition-transform duration-300 ${
            openSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <RxCross2
              onClick={handleMenuChange}
              className="text-gray-400 text-3xl cursor-pointer"
            />
          </div>
          <ul className="text-gray-300 font-light flex flex-col gap-4 p-6">
            {navList}
          </ul>
          <ul className="text-gray-300 font-light flex flex-wrap gap-4 px-6 text-2xl">
            {socialIcons}
          </ul>
        </div>
      </div>
    </nav>
  );
};
