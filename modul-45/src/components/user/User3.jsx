import React from "react";
import { Link } from "react-router";

const User3 = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="p-5 border-2 my-5 rounded-2xl">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${user.id}`}>Show Details</Link>
    </div>
  );
};

export default User3;
