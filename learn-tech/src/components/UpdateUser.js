import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../utils/userSlice";

const UpdateUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);

  const users = useSelector((state) => state.user.users);
  // console.log(users);

  const existingUser = users.filter((user) => user.id === parseInt(id));
  // console.log(existingUser);
  const { firstName, lastName, city } = existingUser[0];

  const [fName, setFname] = useState(firstName);
  const [lName, setLname] = useState(lastName);
  const [cityName, setCityName] = useState(city);

  const handleUpdateData = (e) => {
    e.preventDefault();
    // console.log(`Clicked`);
    dispatch(
      updateUser({ id: parseInt(id), firstName: fName, lastName: lName, city: cityName })
    );
    navigate("/userdetails");
  };
  return (
    <div>
      <div className="border-2 border-black bg-gray-300 h-auto w-80 m-5">
        <h1 className="text-center pt-3 text-3xl font-medium">User Detail</h1>
        <form className="m-4" onSubmit={handleUpdateData}>
          <input
            className="w-60 m-3 p-3 border-2 border-black"
            value={fName}
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            className="w-60 m-3 p-3 border-2 border-black"
            value={lName}
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            className="w-60 m-3 p-3 border-2 border-black"
            value={cityName}
            type="text"
            placeholder="Enter your city name"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button className=" m-3 p-2 border-2 font-bold border-black bg-blue-500 text-white">
            Update
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

export default UpdateUser;
