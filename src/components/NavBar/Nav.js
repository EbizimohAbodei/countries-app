import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navContainer">
      <ul>
        <li className="navList">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
