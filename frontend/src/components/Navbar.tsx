import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const isAuthenticated = true;
  const navigate = useNavigate();
  return (
    <nav className="bg-white text-sky-600 border-b-2 border-sky-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-sky-500 text-lg font-semibold">
              Home
            </NavLink>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <NavLink
                    to="/profile"
                    className="hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium">
                    Profile
                  </NavLink>
                  <NavLink
                    to="/classroom"
                    className="hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium">
                    Classroom
                  </NavLink>
                  <NavLink
                    to="/courses"
                    className="hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium">
                    Courses
                  </NavLink>
                </>
              )}
              <div className="flex items-center space-x-2">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => navigate("/")}
                      className="flex items-center justify-center w-24 bg-sky-50 border border-sky-500 text-sky-950 hover:bg-sky-300 hover:text-sky-50 px-3 py-2 rounded-md text-sm font-medium">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="flex items-center justify-center w-24 bg-sky-50 border border-sky-500 text-sky-950 hover:bg-sky-300 hover:text-sky-50 px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="flex items-center justify-center w-24 bg-sky-500 border border-sky-500 text-sky-50 hover:bg-sky-300 hover:text-sky-950 px-3 py-2 rounded-md text-sm font-medium">
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
