import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-full">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Sidebar</h1>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Link 3
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Link 4
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
