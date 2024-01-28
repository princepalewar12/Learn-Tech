import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { myContext } from "../App";

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);

const navigate= useNavigate()  
  


  const handleUpdateInfo = () => {
    navigate("/userform")
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <div className=" h-full w-80 m-10">
      <Link
        to={"/userform"}
        className=" ml-1 p-2 border-2 border-black bg-blue-500 text-white"
      >
        Create User
      </Link>
        <table className="border-collapse border-2 border-black mt-3 ">
          <thead>
            <tr>
              <th className="border-2 border-black pe-4 ps-4 text-xl">ID</th>
              <th className="border-2 border-black pe-4 ps-4 text-xl">
                First Name
              </th>
              <th className="border-2 border-black pe-4 ps-4 text-xl">
                Last Name
              </th>
              <th className="border-2 border-black pe-4 ps-4 text-xl">City</th>
              <th
                className="border-2 border-black pe-4 ps-4 text-xl"
                colSpan="2"
              >
                Action
              </th>
            </tr>
          </thead>

          <>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border-2 border-black pe-4 ps-4 text-xl">
                    {index + 1}
                  </td>
                  <td className="border-2 border-black pe-4 ps-4 text-xl">
                    {user.firstName}
                  </td>
                  <td className="border-2 border-black pe-4 ps-4 text-xl">
                    {user.lastName}
                  </td>
                  <td className="border-2 border-black pe-4 ps-4 text-xl">
                    {user.city}
                  </td>
                  <td className="border-2 border-black pe-4 ps-4 text-xl">
                    <Link to={`/updateuser/${user.id}`}
                      className="bg-gray-500 p-2 rounded text-white cursor-pointer"
                     
                    >
                      Update
                    </Link>
                  </td>
                  <td className="border-2 border-black pe-4 ps-4 text-xl"> 
                    <button
                      className="bg-gray-500 p-2 rounded text-white cursor-pointer"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
