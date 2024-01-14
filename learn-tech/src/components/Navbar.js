import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
  const [buttonName, setButtonName] = useState("Login");

  const buttonChange = () => {
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
    console.log(`Button Clicked`);
  };

  return (
    <>
      <div className="nav-container ">
        <div className="flex justify-between bg-green-200 max-lg:bg-green-100">
          <div className="logo flex  ">
            <img className=" w-36" src={LOGO_URL} alt="logo" />
            <h3 className="text-5xl mt-4 pt-4 text-green-600 max-lg:invisible ">
              Codemind Technology
            </h3>
          </div>
          <div className="nav-items flex ">
            <ul className=" my-4 py-4 flex">
              <li className="text-3xl pe-3 pt-2">Home</li>
              <li className="text-3xl pe-3 pt-2">About</li>
              <li className="text-3xl pe-3 pt-2">Services</li>
              <li className="text-3xl pe-2 pt-2">Contact</li>
            </ul>
            <div className="ms-3">
              <button
                className="my-5 text-3xl me-4  px-3 py-2  rounded-xl text-white bg-green-600 w-[120px]"
                onClick={buttonChange}
              >
                {buttonName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
