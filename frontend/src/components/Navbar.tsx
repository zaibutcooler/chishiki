import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isAuthenticated = false;
  return (
    <nav className="bg-green-800 border-green-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-lg font-semibold">
              Home
            </Link>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <Link
                    to="/goals"
                    className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    Reflect
                  </Link>
                  <Link
                    to="/memories"
                    className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    Sub-Memory
                  </Link>
                  <Link
                    to="/todolist"
                    className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    TodoList
                  </Link>

                  <Link
                    to="/timetable"
                    className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    Time Table
                  </Link>
                </>
              )}
              <div className="flex items-center space-x-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/logout"
                      className="flex items-center justify-center w-24 bg-black text-white hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center justify-center mx-4 w-24 border border-black bg-black text-green-200 hover:bg-green-500 hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="flex items-center justify-center w-24 border border-black bg-green-500 text-black hover:bg-green-500 hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium">
                      Register
                    </Link>
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
