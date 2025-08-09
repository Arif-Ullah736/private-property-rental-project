import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const NabBar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
  };
  return (
    <nav className="flex flex-wrap md:items-center justify-between px-10 md:px-20 pt-6  text-white fixed top-0 left-0 w-full bg-[#171d32]">
      <span className="font-bold text-xl tracking-wide">
        <a href="#home">Portfolio</a>
      </span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 mt-4 md:mt-5 px-2 rounded-xl  bg-gray-700 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex  gap-6 `}
      >
        <a href="#about">
          <li className="text-md transition-all duration-300 p-1 md:p-0 ">
            About
          </li>
        </a>
        <a href="#experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0 ">
            Experience
          </li>
        </a>
        <a href="#projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 ">
            Projects
          </li>
        </a>
        <a href="#contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 ">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <IoMdMenu
          size={30}
          className="md:hidden absolute right-10 top-6"
          onClick={handleShowMenu}
        />
      ) : (
        <RxCross2
          size={30}
          className="md:hidden absolute right-10 top-6"
          onClick={handleShowMenu}
        />
      )}
    </nav>
  );
};

export default NabBar;
