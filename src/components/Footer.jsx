import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#465697]  h-auto w-full  text-white flex justify-around p-10 items-center"
    >
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <span className="text-sm opacity-85 leading-4 mt-2">
          Feel Free To reach out!
        </span>
      </div>

      <div>
        <ul>
          <li className="flex items-center gap-1 text-sm opacity-85 leading-4 mt-2 ">
            <MdOutlineMailOutline />
            <a href="">myemail@gmail.com</a>
          </li>
          <li className="flex items-center gap-1 text-sm opacity-85 leading-4 mt-2 ">
            <FaLinkedin />
            <a href="">linkedin.com/username</a>
          </li>
          <li className="flex items-center gap-1 text-sm opacity-85 leading-4 mt-2 ">
            <FaGithub />
            <a href="">github.com/username</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
