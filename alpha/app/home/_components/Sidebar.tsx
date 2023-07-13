"use client";
import {
  RiDashboardLine,
  RiBookOpenLine,
  RiGroupLine,
  RiFileListLine,
  RiNotificationLine,
  RiBarChartLine,
  RiChat1Line,
  RiLogoutBoxLine,
  RiContactsLine,
  RiSunLine,
  RiMoonLine,
} from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);

  const links = [
    { title: "Dashboard", route: "/dashboard", icon: <RiDashboardLine /> },
    { title: "Classrooms", route: "/classrooms", icon: <RiGroupLine /> },
    { title: "Courses", route: "/courses", icon: <RiBookOpenLine /> },
    { title: "Assignments", route: "/assignments", icon: <RiFileListLine /> },
    {
      title: "Announcements",
      route: "/announcements",
      icon: <RiNotificationLine />,
    },
    { title: "Chat", route: "/chat", icon: <RiChat1Line /> },

    { title: "Contact", route: "/contact", icon: <RiContactsLine /> },
  ];

  return (
    <main className="min-h-screen border-r bg-white">
      <div className="px-3 pt-6 pb-2 text-lg text-center">Title</div>
      <div className="text-semibold text-sm ml-2">
        <section className="">
          {links.map((link) => (
            <button className="flex my-3 px-2 py-2 items-center">
              <div className="text-lg mr-2">{link.icon}</div>
              <p>{link.title}</p>
            </button>
          ))}
        </section>
        <hr />
        <section>
          <button className="flex my-3 px-2 py-2 items-center">
            <div className="text-lg mr-2">
              <RiBarChartLine />
            </div>
            <p>Grades</p>
          </button>
          {isDark ? (
            <button className="flex my-3 px-2 py-2 items-center">
              <div className="text-lg mr-2">
                <RiMoonLine />
              </div>
              <p>Dark Mode</p>
            </button>
          ) : (
            <button className="flex my-3 px-2 py-2 items-center">
              <div className="text-lg mr-2">
                <RiSunLine />
              </div>
              <p>Light Mode</p>
            </button>
          )}

          <hr />
          <button className="flex my-3 px-2 py-2 items-center">
            <div className="text-lg mr-2">
              <RiLogoutBoxLine />
            </div>
            <p>Logout</p>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Sidebar;
