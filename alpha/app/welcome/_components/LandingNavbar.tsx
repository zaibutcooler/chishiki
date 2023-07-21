"use client";
import React, { useState } from "react";

const LandingNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed left-0 top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            {/* Brand logo or name */}
            <a href="/" className="text-slate-800">
              Home
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* Navigation links */}
              <a
                href="/about"
                className="text-slate-800 hover:bg-slate-100  px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a
                href="/services"
                className="text-slate-800 hover:bg-slate-100  px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a
                href="/contact"
                className="text-slate-800 hover:bg-slate-100  px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              {/* Add more navigation links as needed */}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-800 hover:bg-slate-100  px-2 py-1 rounded-md focus:outline-none">
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-semibold">
            <a
              href="/about"
              className="text-slate-800 hover:bg-slate-100  block px-3 py-2 rounded-md text-base">
              About
            </a>
            <a
              href="/services"
              className="text-slate-800 hover:bg-slate-100  block px-3 py-2 rounded-md text-base">
              Services
            </a>
            <a
              href="/contact"
              className="text-slate-800 hover:bg-slate-100   block px-3 py-2 rounded-md text-base">
              Contact
            </a>
            {/* Add more mobile menu items as needed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
