import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <Link>Home</Link>
        </li>
      </ul>
    </nav>
  );
};
