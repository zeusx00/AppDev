import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Typography } from "@mui/material";
//import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <Typography fontFamily={"monospace"} fontSize={50}><span>EDUTREE</span></Typography>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              {/* <CodeIcon /> */}
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/workout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/progress"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Session
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;
