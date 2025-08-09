import React from "react";
import cardImage from "../assets/stdImg2.png";
const Projects = () => {
  return (
    <div
      id="projects"
      className=" h-auto w-[90%] mx-auto text-white rounded-sm pb-10 mb-10    "
    >
      <h1 className="text-xl md:text-2xl font-bold pl-20 pt-7">Projects</h1>

      <div className="h-auto w-[75%] flex space-x-3  mx-auto items-center mt-5 ">
        <div className="bg-black rounded-sm h-auto w-63   p-5 space-y-3">
          <img
            src={cardImage}
            alt=""
            className="h-35 w-full rounded object-cover "
          />
          <div className="mt-2">
            <h1 className="text-xl font-bold tracking-tighter leading-normal">
              Blogging Website
            </h1>
            <p className="text-sm opacity-85 leading-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, perspiciatis?
            </p>
          </div>

          <div className="flex justify-between mt-10  ">
            <button className=" bg-[#465697] px-3 rounded-full py-0.5 hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm">
              Demo
            </button>

            <button className=" bg-[#465697] px-3 rounded-full py-0.5 hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm">
              Source Code
            </button>
          </div>
        </div>

        <div className="bg-black rounded-sm h-auto w-63   p-5 space-y-3">
          <img
            src={cardImage}
            alt=""
            className="h-35 w-full rounded object-cover "
          />
          <div className="mt-2">
            <h1 className="text-xl   font-bold tracking-tighter leading-normal">
              Blogging Website
            </h1>
            <p className="text-sm opacity-85 leading-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, perspiciatis?
            </p>
          </div>

          <div className="flex justify-between mt-10  ">
            <button className=" bg-[#465697] px-3 rounded-full py-0.5 hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm">
              Demo
            </button>

            <button className=" bg-[#465697] px-3 rounded-full py-0.5 hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm">
              Source Code
            </button>
          </div>
        </div>

        <div className="bg-black rounded-sm h-auto w-63   p-5 space-y-3">
          <img
            src={cardImage}
            alt=""
            className="h-35 w-full rounded object-cover "
          />
          <div className="mt-2">
            <h1 className="text-xl font-bold tracking-tighter leading-normal">
              Blogging Website
            </h1>
            <p className="text-sm opacity-85 leading-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, perspiciatis?
            </p>
          </div>

          <div className="flex justify-between mt-10  ">
            <button className=" bg-[#465697] px-3 rounded-full py-0.5 hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm">
              Demo
            </button>

            <button className=" bg-[#465697] px-3 rounded-full py-0.5 hover:bg-[#465697]/85 transition-all duration-300 ease-in text-sm">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
