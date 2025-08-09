import React from "react";
import image1 from "../assets/stdImg3.png";
const About = () => {
  return (
    <div
      id="about"
      className="bg-black h-auto w-[90%] mx-auto text-white rounded-sm pb-10 mb-10 "
    >
      <h1 className="text-2xl font-bold pl-20 pt-7">About</h1>

      <div className=" md:flex md:flex-row items-center justify-between w-auto px-30">
        <div className="w-[30%]">
          <img src={image1} alt="" className=" h-50 w-50  " />
        </div>

        <div className="flex flex-col justify-emd flex-wrap w-[60%] space-y-5 ">
          <div>
            <h1 className="text-xl md:2xl font-bold  tracking-tighter">
              {" "}
              &rarr; Frontend Developer
            </h1>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo rupti fugit quasi unde in quos nam magni dolore veniam.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold  tracking-tighter">
              {" "}
              &rarr; Database Developer
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo facilis.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold  tracking-tighter">
              {" "}
              &rarr; Backend Developer
            </h1>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo facilis corrupti fugit .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
