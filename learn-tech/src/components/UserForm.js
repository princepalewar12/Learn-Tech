import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserDetails from "./UserDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import { myContext } from "../App";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  const nameField = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    nameField.current.focus();
  }, []);

  const handleFormData = () => {
    const userInfo = { id: Date.now(), firstName, lastName, city };
    dispatch(addUser(userInfo));
    setFirstName("");
    setLastName("");
    setCity("");
    nameField.current.focus();
  };

  return (
    <div>
      <div className="border-2 border-black bg-gray-300 h-auto w-80 m-5">
        <h1 className="text-center pt-3 text-3xl font-medium">User Detail</h1>
        <form className="m-4" onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-60 m-3 p-3 border-2 border-black"
            value={firstName}
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            ref={nameField}
          />
          <input
            className="w-60 m-3 p-3 border-2 border-black"
            value={lastName}
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="w-60 m-3 p-3 border-2 border-black"
            value={city}
            type="text"
            placeholder="Enter your city name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className=" m-3 p-2 border-2 font-bold border-black bg-blue-500 text-white"
            onClick={handleFormData}
          >
            SUBMIT
          </button>
          <Link
            to="/userdetails"
            className=" m-3 p-2 border-2 font-bold border-black bg-blue-500 text-white"
          >
            User Detail
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
