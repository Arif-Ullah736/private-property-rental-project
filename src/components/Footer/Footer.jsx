import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black  w-full h-auto p-5 pb-5">
      <div className="w-full h-auto flex justify-around">
        <div className=" flex flex-col gap-1 items-center">
          <p className="font-bold text-white">Contact Us</p>
          <ul className="text-gray-300 flex flex-col items-center">
            <li>03301234342</li>
            <li>user1@gmail.com</li>
            <li>addres,city/Pakistan</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-1 items-center">
          <p className="font-bold text-white">Our Services</p>
          <ul className="text-gray-300 flex flex-col items-center">
            <li>Home</li>
            <li>Add Listing</li>
            <li>Rent</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-1 items-center">
          <p className="font-bold text-white">Quick LInk</p>
          <ul className="text-gray-300 flex flex-col items-center">
            <li>Knowledge Base</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <p className="font-bold text-white">Private Property Rental</p>
          <NavLink to={"/contact"}>
            <button className=" px-5 py-0.5 rounded-full  flex items-center   text-white bg-red-500 text-[18px] hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in cursor-pointer  gap-2">
              <span>Contact Us</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-15 w-full flex justify-center">
        <p className="text-gray-300">Privacy Policy || Use of terms</p>
      </div>
    </footer>
  );
};

export default Footer;
