// import { use } from "react";

// export default function Users({ fetchUsers }) {
//   const users = use(fetchUsers);

//   console.log(users);

//   return (
//     <div className="bor-der">
//       <h3>Users: </h3>
//     </div>
//   );
// }

import React from "react";
import { use } from "react";

const User = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  // console.log(users);

  return (
    <div className="bor-der">
      <h3>User: {users.length}</h3>
    </div>
  );
};

export default User;
