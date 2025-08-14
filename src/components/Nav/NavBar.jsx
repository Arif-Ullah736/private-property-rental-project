import React, { useState } from "react";
import logo from "../../assets/p.jpg";
import { VscThreeBars } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LuTentTree } from "react-icons/lu";
import { FaTreeCity } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav className="w-full h-[160px] flex items-center justify-center flex-col fixed top-0 right-0">
      {isVisible ? (
        <div className=" absolute w-[190px] h-[220px] bg-white top-15 right-[3%] flex flex-col items-start justify-center p-2.5 border-1 rounded-[30px] shadow-lg/50 box-border">
          <div className="p-2.5  text-[16px] cursor-pointer font-medium text-black hover:bg-gray-300 w-full rounded-full">
            <NavLink to={"/login"}>Login</NavLink>
          </div>
          <div className="p-2.5  text-[16px] cursor-pointer font-medium text-black hover:bg-gray-300 w-full rounded-full">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </div>
          <div className="p-2.5  text-[16px] cursor-pointer font-medium text-black hover:bg-gray-300 w-full rounded-full">
            <NavLink to={"/listing"}> list your home</NavLink>
          </div>
          <div className="p-2.5  text-[16px] cursor-pointer font-medium text-black hover:bg-gray-300 w-full rounded-full">
            <NavLink to={"/contact"}> help center</NavLink>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/*  Nav Bar part 1 */}
      <div className="w-full h-[50%] bg-white border-b-1 border-gray-600 flex justify-between items-center   p-[20px] box-border">
        <NavLink to={"/"}>
          <div className="flex items-center">
            <img src={logo} className="h-15 w-15" alt="" />
            <h1 className="text-[18px] text-red-500  max-[900px]:hidden">
              Private Property Rental
            </h1>
          </div>
        </NavLink>

        <div className="flex gap-2 md:gap-1">
          <input
            type="text"
            placeholder="Search Distanition"
            className="  w-[150px]   md:w-[250px] p-[10px] border-1 rounded-full pl-5 outline-0 text-black text-[15px]"
          />
          <button className="border-1  p-[10px] rounded-full  flex items-center  gap-2 text-white bg-red-500 text-[16px] hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in cursor-pointer">
            <CiSearch className="w-[20px] h-[20px]  " />
            <p className=" hidden md:block"> Search</p>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[16px] cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-full transition-all duration-300 ease-in max-[700px]:hidden">
            List Your Home
          </button>
          <button className="flex gap-2 md:border-1 px-4 py-2 rounded-full hover:shadow-lg/50 transition-all duration-300 ease-in cursor-pointer">
            <VscThreeBars
              className=""
              onClick={() => setIsVisible((prev) => !prev)}
            />
            <CgProfile className="hidden md:block" />
          </button>
        </div>
      </div>

      {/*  Nav Bar part 2 */}

      <div className="w-full h-[50%] flex items-center justify-center gap-5 overflow-x-scroll md:overflow-x-hidden  bg-white ">
        <NavLink to={"/"}>
          <div
            className={`    flex flex-col items-center justify-center gap-1 shrink-0  `}
          >
            <MdOutlineWhatshot className="w-[25px] h-[25px] text-black" />
            <h3 className="text-[12px] text-gray-600 font-medium">Trending</h3>
          </div>
        </NavLink>
        <NavLink to={"/houses"}>
          <div className="flex flex-col items-center justify-center gap-1 shrink-0">
            <GiFamilyHouse className="w-[25px] h-[25px] text-black" />
            <h3 className="text-[12px] text-gray-600 font-medium">Houses</h3>
          </div>
        </NavLink>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <MdBedroomParent className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">Rooms</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <PiFarm className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">Farm Houses</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <MdOutlinePool className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">Pool Houses</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <LuTentTree className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">Tent Houses</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <GiWoodCabin className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">Cabins</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <SiHomeassistantcommunitystore className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">Shops</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 shrink-0">
          <FaTreeCity className="w-[25px] h-[25px] text-black" />
          <h3 className="text-[12px] text-gray-600 font-medium">
            Forest Houses
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
