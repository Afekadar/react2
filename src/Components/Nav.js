import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/Website" className="title">
        Website
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }} //if menuOpen exist then open else nothing
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
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
