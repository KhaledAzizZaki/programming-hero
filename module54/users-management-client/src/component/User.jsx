import React, { use, useState } from "react";

const User = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);
  //   console.log(users);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after post", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name}: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
