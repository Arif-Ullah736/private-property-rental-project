import React from "react";
import img from "../assets/pic.png";
import TextChange from "./TextChange";
const Home = () => {
  return (
    <div
      id="home"
      className=" text-white w-full flex flex-col-reverse md:flex-row md:items-start md:justify-between p-10 md:p-20"
    >
      <div className=" md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl flex font-bold tracking-tighter leading-normal">
          <TextChange />
        </h1>
        <p className="text-sm tracking-tight md:text-2xl ">
          Lorem ipsum olor sit amet. Loremolor <br /> sit amet. Lorem dolor sit
          amet. Lorem.
        </p>
        <button className="bg-[#465697] text-white px-3 py-2 rounded-3xl hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm md:text-lg md:py-2 md:px-4 leading-normal tracking-tighter mt-5 md:mt-10  font-semibold">
          Contact Me
        </button>
      </div>
      <div className="md:pt-10">
        <img
          src={img}
          alt=""
          className="h-50 w-50 rounded-full border-3 border-dotted border-blue-400"
        />
      </div>
    </div>
  );
};

export default Home;
