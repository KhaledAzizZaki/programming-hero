import React from "react";
import Link from "./Link";

const navigationData = [
  {
    id: 1,
    name: "Home",
    url: "/home",
    path: "home",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    path: "about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
    path: "services",
  },
  {
    id: 4,
    name: "Portfolio",
    url: "/portfolio",
    path: "portfolio",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
    path: "contact",
  },
];

const DaisyNavbar = () => {
  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigationData.map((route) => (
            <li>
              <a href={route.url}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-5">Button</a>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow -ms-40"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DaisyNavbar;
