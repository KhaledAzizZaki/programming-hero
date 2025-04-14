import React, { use } from "react";
import User3 from "./User3";

const User2 = ({ userData }) => {
  const user = use(userData);
  // console.log("user2", user);

  return (
    <div className="text-center mt-20 mx-auto">
      <h1 className="text-5xl">This is user 2</h1>
      <div className="p-5">
        {user.map((user) => (
          <User3 key={user.id} user={user}></User3>
        ))}
      </div>
    </div>
  );
};

export default User2;
