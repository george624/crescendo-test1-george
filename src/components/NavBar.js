import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="h-24 bg-gray-900 bg-opacity-75 w-full fixed">
      <div className="text-gray-100 px-8 h-full">
        <ul className="flex justify-end items-center h-full">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
