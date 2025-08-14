import React from "react";

const Card = ({ title, addImage1, addImage2, addImage3, price }) => {
  return (
    <div className="flex flex-col overflow-hidden h-[250px] w-[210px] space-y-1 ">
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-[65%] rounded-sm">
        <img
          src={addImage1}
          alt=""
          className=" w-full shrink-0 snap-center  object-cover"
        />
        <img
          src={addImage2}
          alt=""
          className=" w-full shrink-0 snap-center  object-cover"
        />
        <img
          src={addImage3}
          alt=""
          className=" w-full shrink-0 snap-center  object-cover"
        />
      </div>
      <div>
        <p className="text-[20px] text-black font-medium">{title}</p>
      </div>
      <div>
        <span className="text-[17px] text-gray-500">{price}/Month</span>
      </div>
    </div>
  );
};

export default Card;
