import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      id="experience"
      className=" h-auto w-[90%] mx-auto text-white rounded-sm pb-10 mb-10    "
    >
      <h1 className="text-xl md:text-2xl font-bold pl-20 pt-7">Experience</h1>

      <div className=" md:flex md:flex-row  justify-between mx-auto  h-auto w-auto px-20 md:px-40 ">
        <div className="w-40 h-40   mt-15 grid grid-cols-2 md:grid-cols-3 gap-5  mb-20 md:mb-0">
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center ">
            <FaHtml5 size={30} color="#E34F26" />
          </div>
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center">
            <FaCss3 size={30} color="#1572B6" />
          </div>
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center">
            <FaReact size={30} color="#61DAFB" />
          </div>
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center">
            <FaJs size={30} color="#F7DF1E" />
          </div>
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center">
            <FaFigma size={30} color="#F24E1E" />
          </div>
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center">
            <SiMongodb size={30} color="#47A248" />
          </div>
          <div className="bg-black flex justify-center h-10 w-10 rounded-lg items-center">
            <DiRedis size={30} color="#FF4438" />
          </div>
        </div>

        <div className="flex flex-col  flex-wrap w-auto space-y-5 ">
          <div className="bg-black/50 px-2 py-3 w-70 rounded-lg flex items-center justify-between">
            <div>
              <FaGoogle color="#4285F4" size={30} />
            </div>
            <div>
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </div>
          </div>
          <div className="bg-black/50 px-2 py-3 w-70 rounded-lg flex items-center justify-between">
            <div>
              <RiNetflixFill color="#E50914" size={30} />
            </div>
            <div>
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </div>
          </div>
          <div className="bg-black/50 px-2 py-3 w-70 rounded-lg flex items-center justify-between">
            <div>
              <FaAmazon color="#FF9900" size={30} />
            </div>
            <div>
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
