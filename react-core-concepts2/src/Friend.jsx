import React from "react";

const Friend = ({ friend }) => {
  // console.log(friend);
  const { name, email, phone } = friend;
  return (
    <div className="bor-der">
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
    </div>
  );
};

export default Friend;
