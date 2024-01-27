import React, { useState } from "react";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import NavContents from "./NavContents";
import { Provider } from "react-redux";
import App from "../App";

const Body = () => {
  const appRouter = createBrowserRouter([
   
    {
      path: "/userform",
      element: <UserForm />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
