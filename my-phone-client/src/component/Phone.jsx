import React from "react";
import { useLoaderData } from "react-router";

const Phone = () => {
  const phone = useLoaderData();

  //   console.log(phone);

  return (
    <div>
      <h1>{phone.name}</h1>
      <img src={phone.image}></img>
    </div>
  );
};

export default Phone;
