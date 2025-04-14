import React from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="text-center mt-20 text-5xl">
      <h1 className="">This is user page</h1>
    </div>
  );
};

export default User;
