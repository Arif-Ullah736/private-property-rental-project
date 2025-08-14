import React, { Children, createContext, useState } from "react";
export let dataContext = createContext();
const UserContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [addListing, setAddListing] = useState(false);
  const [addImage1, setAddImage1] = useState(null);
  const [addImage2, setAddImage2] = useState(null);
  const [addImage3, setAddImage3] = useState(null);
  const [price, setPrice] = useState(null);

  let value = {
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
  };

  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
