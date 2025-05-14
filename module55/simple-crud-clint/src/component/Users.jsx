import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    //create user in the db
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after creating user in the db", data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
          alert("user added successfully.");
          e.target.reset();
        }
      });
  };

  const handleUserDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
          console.log("after delete", data);
        }
      });
  };

  return (
    <div>
      <div>
        <h4>users: {users.length}</h4>
        <form onSubmit={handleAddUser} action="">
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" />
          <br />
          <input type="submit" value="Add user" />
        </form>
      </div>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}: {user.email}
            <Link to={`/user/${user._id}`}>Details</Link>
            <button onClick={() => handleUserDelete(user._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
