import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import NavContents from "./components/NavContents";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import Error from "./components/Error";
import { createContext, useState } from "react";
import UpdateUser from "./components/UpdateUser";

// Move router configuration outside the App component
const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <NavContents />
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/userform/",
        element: <UserForm />,
      },
      {
        path: "/updateuser/:id",
        element: <UpdateUser />,
      },
      {
        path: "/userdetails",
        element: <UserDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const AppWithRouter = () => {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  );
};

export default AppWithRouter;
