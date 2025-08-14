import React, { useContext } from "react";
import { IoAddCircle } from "react-icons/io5";
import { dataContext } from "../../context/UserContext";

const Listing = () => {
  let {
    title,
    setTitle,
    addListing,
    setAddListing,
    addImage1,
    setAddImage1,
    addImage2,
    setAddImage2,
    addImage3,
    setAddImage3,
    price,
    setPrice,
  } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Add Listing Successfully...");
    setAddListing(true);
  };
  return (
    <div className="p-10 pt-[160px]">
      <span className="text-2xl pl-2 ">Add Your Listing</span>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="" className="p-2">
            <p>Title</p>
            <input
              type="text"
              placeholder="_BHK------in location"
              required
              className="border-1 w-100 outline-0 pl-2 "
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Description </p>
            <textarea
              name=""
              id=""
              placeholder="About Listing"
              className="border-1 w-100 outline-0 pl-2"
            ></textarea>
          </label>

          <label htmlFor="" className="p-2">
            <p>Image URL 1</p>
            <input
              type="file"
              required
              className="border-1 w-100 outline-0 pl-2 "
              onChange={(e) => {
                setAddImage1(e.target.files[0]);
              }}
              //   value={addImage1}
            />
          </label>
          <label htmlFor="" className="p-2">
            <p>Image URL 2</p>
            <input
              type="file"
              required
              className="border-1 w-100 outline-0 pl-2"
              onChange={(e) => {
                setAddImage2(e.target.files[0]);
              }}
              //   value={addImage2}
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Image URL 3</p>
            <input
              type="file"
              required
              className="border-1 w-100 outline-0 pl-2"
              onChange={(e) => {
                setAddImage3(e.target.files[0]);
              }}
              //   value={addImage3}
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Price</p>
            <input
              type="text"
              placeholder="00,000/Month"
              className="border-1 w-100 outline-0 pl-2"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
            />
          </label>

          <label htmlFor="" className="p-2">
            <p>Location</p>
            <input
              type="text"
              placeholder="City/Country"
              required
              className="border-1 w-100 outline-0 pl-2"
            />
          </label>

          <div className="p-2">
            <button className="border-1  px-5 py-0.5 rounded-full  flex items-center   text-white bg-red-500 text-[18px] hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in cursor-pointer  gap-2">
              <span>Add</span>
              <IoAddCircle size={25} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Listing;
