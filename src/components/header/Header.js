import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { navBarHeader } from "../../portfolio.js";
import { style } from "glamor";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "5px",
    width: "25px",
    margin: "15px",
    padding: "0 0 20px 0",
    borderRadius: "80px",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    transition: "all 0.2s ease-in-out",
  });

  const pagePath = navBarHeader.pages;

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <BsToggleOn
        strokeWidth={1}
        size={25}
        color={props.theme.name === "light" ? "" : "#0d6efd"}
        style={{ padding: "0 1px 5px 3px" }}
      />
    ) : (
      <BsToggleOff
        strokeWidth={1}
        size={25}
        color={props.theme.name === "light" ? "darkgray" : "darkray"}
        style={{ padding: "0 1px 5px 3px" }}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to="/" className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {navBarHeader.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            {pagePath.map((page, idx) => (
              <li key={idx}>
                <NavLink
                  key={idx}
                  className={page.class}
                  to={page.path}
                  tag={Link}
                  activeStyle={{
                    color: "#33adff",
                    fontWeight: "bold",
                    borderBottom: "2px #33adff solid",
                  }}
                  style={{ color: theme.text }}
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
