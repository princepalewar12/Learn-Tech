import React from "react";
import logo from "./images/logo.jpg";
import "./navbar.css";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideNav from "./SideNav";
import Home from "./Home";

const Navbar = () => {
  return (
    <>
      <Router>
        
        <div className="hero ">
          <nav>
            <NavLink to ="/">
              <img src={logo} alt="" />
            </NavLink>
            <h1 className="logo">Codemind Technology</h1>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to ="#">About</NavLink>
              </li>
              <li>
                <NavLink to ="#">Services</NavLink>
              </li>
              <li>
                <NavLink to ="#">ContactUs</NavLink>
              </li>
            </ul>
            <button type="button">Login</button>
            <button type="button">Logout</button>
          </nav>

          <div className="menubar">
            <ul>
              <li>
                <NavLink to ="#">HTML</NavLink>
              </li>
              <li>
                <NavLink to ="#">CSS</NavLink>
              </li>
              <li>
                <NavLink to ="#">JAVASCRIPT</NavLink>
              </li>
              <li>
                <NavLink to ="#">BOOTSTRAP</NavLink>
              </li>
              <li>
                <NavLink to ="/react">REACT</NavLink>
              </li>
              <li>
                <NavLink to ="#">NODEJS</NavLink>
              </li>
              <li>
                <NavLink to ="#">TYPESCRIPT</NavLink>
              </li>
              <li>
                <NavLink to ="#">PYTHON</NavLink>
              </li>
              <li>
                <NavLink to ="#">JAVA</NavLink>
              </li>
              <li>
                <NavLink to ="#">PHP</NavLink>
              </li>
              <li>
                <NavLink to ="#">MYSQL</NavLink>
              </li>
            </ul>
          </div>
          <Routes>
          <Route>
          <Route exact path="/"element={<Home/>}></Route>
          <Route exact path="/react" element={<SideNav />}></Route>

          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
};

export default Navbar;
