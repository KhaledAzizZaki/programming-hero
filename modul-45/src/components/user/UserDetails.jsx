import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const data = useLoaderData();

  const { website, name } = data;
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
