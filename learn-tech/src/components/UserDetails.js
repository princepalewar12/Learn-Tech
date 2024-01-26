import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const UserDetails = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.users);
  console.log(users);

const handleRemoveUser=(id)=>{
dispatch(removeUser(id))
}

  return (
    <div className=" h-auto w-80 m-5">
      <table className="border-collapse border-2 border-black ">
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
            <th className="border-2 border-black pe-4 ps-4 text-xl" colSpan="2">
              Action
            </th>
          </tr>
        </thead>

        <>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-2 border-black pe-4 ps-4 text-xl">
                  {user.id}
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
                  <button className="bg-gray-500 p-2 rounded text-white cursor-pointer">
                    Update
                  </button>
                </td>
                <td className="border-2 border-black pe-4 ps-4 text-xl">
                  <button className="bg-gray-500 p-2 rounded text-white cursor-pointer" onClick={()=>handleRemoveUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      </table>
    </div>
  );
};

export default UserDetails;
