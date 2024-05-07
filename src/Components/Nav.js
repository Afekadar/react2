import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link>Website</Link>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>News</NavLink>
        </li>
        <li>
          <NavLink>Docs</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
