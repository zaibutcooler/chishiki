import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeUser } from "../store/userSlice";

function Navbar() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClassroomDropdownOpen, setIsClassroomDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
    dispatch(removeUser());
  };

  const toggleClassroomDropdown = () => {
    setIsClassroomDropdownOpen(!isClassroomDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const toggleCourseDropdown = () => {
    setIsCourseDropdownOpen(!isCourseDropdownOpen);
  };

  return (
    <nav className="bg-white text-sky-600 border-b-2 border-sky-50">
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
                    to="/classroom"
                    className="hover:text-sky-300 px-6 py-2 rounded-md text-sm font-medium">
                    Classroom
                  </NavLink>

                  <NavLink
                    to="/courses"
                    className="hover:text-sky-300 pl-6 py-2 rounded-md text-sm font-medium">
                    Courses
                  </NavLink>
                  <div
                    className="relative inline-block pr-4"
                    onClick={toggleCourseDropdown}>
                    <>
                      <BiChevronDown />
                    </>
                    {isCourseDropdownOpen && (
                      <div
                        className="absolute right-0 mt-2 py-2 bg-white border border-gray-200 lg:w-32 md:w-24 rounded-md shadow-md "
                        onMouseLeave={toggleCourseDropdown}>
                        <NavLink
                          to="/courses/all"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Discover Courses
                        </NavLink>
                        <NavLink
                          to="/courses/taken"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Finished Courses
                        </NavLink>
                        <NavLink
                          to="/courses/events"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Events
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <NavLink
                    to="/profile"
                    className="hover:text-sky-300 pl-6 py-2 rounded-md text-sm font-medium">
                    Profile
                  </NavLink>
                  <div
                    className="relative inline-block pr-4"
                    onClick={toggleProfileDropdown}>
                    <>
                      <BiChevronDown />
                    </>
                    {isProfileDropdownOpen && (
                      <div
                        className="absolute right-0 mt-2 py-2 bg-white border border-gray-200 rounded-md lg:w-32  md:w-24 shadow-md "
                        onMouseLeave={toggleProfileDropdown}>
                        <NavLink
                          to="/profile/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Edit Profile
                        </NavLink>
                        <NavLink
                          to="/profile/grades"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Grades
                        </NavLink>
                      </div>
                    )}
                  </div>
                </>
              )}
              <div className="flex items-center space-x-2">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleLogout}
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
