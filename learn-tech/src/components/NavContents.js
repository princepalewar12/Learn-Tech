import React from "react";

const NavContents = () => {
  return (
    <>
      <div className="nav-container ">
        <ul className="flex justify-between px-8 py-2 border-y-4 border-y-black bg-slate-600 text-white ">
          <li className="text-2xl font-semibold">React</li>
          <li className="text-2xl font-semibold">JavaScript</li>
          <li className="text-2xl font-semibold">Tailwindcss</li>
          <li className="text-2xl font-semibold">BootStrap</li>
          <li className="text-2xl font-semibold">CSS</li>
          <li className="text-2xl font-semibold">HTML</li>
        </ul>
      </div>
    </>
  );
};

export default NavContents;
