import React from "react";
import { TbFileLike } from "react-icons/tb";

const ContactUs = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert("Login Successfully...");
  //   };
  return (
    <div className="p-10 pt-[150px] ">
      <span className="text-2xl pl-2">Contact Page</span>
      <form
        action=" https://formspree.io/f/xqalnbeb "
        method="POST"
        // onSubmit={handleSubmit}
      >
        <div className="flex flex-col ">
          <label htmlFor="" className="p-2">
            <p>User Name</p>
            <input
              type="text"
              required
              name="username"
              className="border-1 w-100 outline-0 "
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Email</p>
            <input
              type="email"
              required
              name="mail"
              className="border-1 w-100 outline-0"
            />
          </label>
          <label htmlFor="" className="p-2">
            <p>Messages</p>
            <textarea
              name="message"
              id=""
              className="border-1 w-100 outline-0"
            ></textarea>
          </label>

          <div className="">
            <button className="border-1  px-5 py-0.5 rounded-full   flex items-center   justify-center   text-white bg-red-500 text-[18px] hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in cursor-pointer  gap-1">
              <p> Submit</p>
              <TbFileLike size={25} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
