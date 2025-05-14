import React from "react";
import { useLoaderData } from "react-router";

const UsersDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h1>this is details</h1>
    </div>
  );
};

export default UsersDetails;
