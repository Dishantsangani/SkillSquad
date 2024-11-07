import React from "react";
import profile from "../assets/my-photo.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 z-50">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        {/* Left side: Brand name */}
        <Link
          to="/"
          className="text-lg font-semibold text-gray-700 dark:text-white"
        >
          SkillSquad
        </Link>

        {/* Right side: Profile icon and toggle button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden flex items-center text-gray-700"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={toggleSidebar ? "M4 6h16M4 12h16m-7 6h7" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
            <Link to="/">
              <img
                src={profile}
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
