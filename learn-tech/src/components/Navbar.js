import React from "react";
import logo from "./images/logo.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="hero">
        <nav>
          <a  href="#"><img src={logo} alt="" /></a>
          <h1 className="logo">Codemind Technology</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">ContactUs</a></li>
          </ul>
          <button type="button">Login</button>
          <button type="button">Logout</button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
