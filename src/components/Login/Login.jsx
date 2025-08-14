import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successfully...");
  };

  // const navigate = useNavigate();
  return (
    <div className="p-10 pt-[160px]">
      <span className="text-2xl pl-2">Login Page</span>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="p-2">
            <p>Email</p>
            <input
              type="email"
              required
              className="border-1 w-100 outline-0 "
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Password</p>
            <input
              type="password"
              required
              className="border-1 w-100 outline-0"
            />
          </label>

          <div className="">
            <button className="border-1  px-5 py-0.5 rounded-full   flex items-center   justify-center   text-white bg-red-500 text-[18px] hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in cursor-pointer  gap-1">
              <p> Login</p>
              <FiLogIn size={25} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
