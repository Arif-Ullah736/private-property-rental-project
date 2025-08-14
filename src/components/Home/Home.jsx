import React from "react";
import Card from "../Card/Card";
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";
import { dataContext } from "../../context/UserContext";
import { useContext } from "react";
const Home = () => {
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
  return (
    <div className="w-full h-auto flex-wrap  flex items-center justify-center  gap-5 bg-white  pt-[170px] ">
      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      <Card
        title={"2BHK villa in jhansi"}
        addImage1={house}
        addImage2={house1}
        addImage3={house2}
        price={"20,000/Month"}
      />

      {addListing ? (
        <Card
          title={title}
          addImage1={URL.createObjectURL(addImage1)}
          addImage2={URL.createObjectURL(addImage2)}
          addImage3={URL.createObjectURL(addImage3)}
          price={price}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
