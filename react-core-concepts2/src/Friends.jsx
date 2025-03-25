import React from "react";
import { use } from "react";
import Friend from "./Friend";

const Friends = ({ userName }) => {
  const friendsNam = use(userName);
  // console.log(friendsNam);

  return (
    <div className="bor-der">
      <h2>Name: {friendsNam.length}</h2>
      {friendsNam.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
