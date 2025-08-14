import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up Successfully...");
  };
  return (
    <div className="p-10 pt-[150px]">
      <span className="text-2xl pl-2 ">Sign Up Page</span>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="" className="p-2">
            <p>Full Name</p>
            <input type="text" required className="border-1 w-100 outline-0 " />
          </label>

          <label htmlFor="" className="p-2">
            <p>Email</p>
            <input type="email" required className="border-1 w-100 outline-0" />
          </label>

          <label htmlFor="" className="p-2">
            <p>Password</p>
            <input
              type="password"
              required
              className="border-1 w-100 outline-0"
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Confirm Password</p>
            <input type="email" required className="border-1 w-100 outline-0" />
          </label>

          <div className="p-2">
            <button className="border-1  px-5 py-0.5 rounded-full  flex items-center   text-white bg-red-500 text-[18px] hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in cursor-pointer  gap-2">
              <span>Sign Up</span>
              <MdPersonAddAlt1 size={25} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
