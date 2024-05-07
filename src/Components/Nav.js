import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/Website" className='title'>Website</Link>
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/Docs">Docs</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
