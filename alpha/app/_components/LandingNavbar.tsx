"use client";
import { AiOutlineUser } from "react-icons/ai";

const LandingNavbar = () => {
  return (
    <main className="font-semibold">
      <div className="px-2 w-full lg:px-3 shadow-lg flex justify-between py-3 items-center bg-white">
        <section>
          <a className="mx-3 text-lg">Home</a>
        </section>
        <section className="flex">
          <button className="flex items-center px-4 mr-2 py-1 text-md  border border-primary rounded-md">
            Login
          </button>
          <button className="flex items-center px-4 py-1 mx-4 text-md bg-primary border border-secondary rounded-md">
            Join <AiOutlineUser className="ml-1" />
          </button>
        </section>
      </div>
    </main>
  );
};

export default LandingNavbar;
