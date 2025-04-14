import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="py-5">This is header</h1>
      <nav>
        <NavLink className="mr-5" to="/">
          Home
        </NavLink>
        <NavLink className="mr-5" to="/mobiles">
          Mobiles
        </NavLink>
        <NavLink className="mr-5" to="/laptop">
          Laptop
        </NavLink>
        <NavLink className="mr-5" to="/user">
          User
        </NavLink>
        <NavLink className="mr-5" to="/user2">
          User 2
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
