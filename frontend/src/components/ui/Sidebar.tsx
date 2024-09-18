"use client";

import React, { useState } from "react";
import {
  BsBookFill,
  BsSpeedometer,
  BsTable,
  BsClipboardDataFill,
  BsGearFill,
  BsChevronRight,
  BsChevronLeft,
  BsLifePreserver,
} from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";
import { VscThreeBars } from "react-icons/vsc";
import Image from "next/image";
import logo from "../../../public/icons/logo.png";
import logolg from "../../../public/icons/logo-large.png";
import { BiTestTube } from "react-icons/bi";

// Paths that should have a small sidebar
const SMALL_PATHS = ["/admin/data/analytics", "/admin/surveys/questions"];

function Sidebar() {
  const path = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(!SMALL_PATHS.includes(path));

  const SidebarScreens: any = [
    {
      icon: <BsSpeedometer size={18} />,
      name: "Dashboard",
      path: "/admin",
      tooltip: "Dashboard",
    },
    {
      icon: <BsBookFill size={18} />,
      name: "Surveys",
      path: "/admin/surveys",
      tooltip: "Surveys",
    },
    {
      icon: <BsTable size={18} />,
      name: "Data",
      path: "/admin/data",
      tooltip: "Data",
    },
    {
      icon: <ImUser size={18} />,
      name: "Users",
      path: "/admin/users",
      tooltip: "Users",
    },
    {
      icon: <BsLifePreserver size={18} />,
      name: "Support",
      path: "/admin/support",
      tooltip: "Support",
    },
    {
      icon: <BsGearFill size={18} />,
      name: "Settings",
      path: "/admin/settings",
      tooltip: "Settings",
    },
  ];

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <aside
      className={`h-screen sticky top-0 left-0 border-2 border-secondary-100 flex flex-col transition-all duration-300 ease-in-out justify-between ${
        sidebarOpen ? "max-w-[250px]" : "max-w-[75px]"
      }`}
    >
      <div>
        <h1
          onClick={() => router.push("/")}
          className="font-bold text-primary-300 cursor-pointer justify-center pt-2"
        >
          {sidebarOpen ? (
            <Image src={logolg.src} alt="logo" height={200} width={200} />
          ) : (
            <Image src={logo.src} alt="logo" height={64} width={64} />
          )}
        </h1>
        <div
          className={`flex flex-col items-start pt-16 ${sidebarOpen ? "px-2" : ""}`}
        >
          {SidebarScreens.map((el: any, ind: number) => (
            <div
              key={ind}
              className={`relative flex justify-center  ${sidebarOpen ? "w-full mb-6" : "w-fit self-center mb-10"} rounded-md ${
                el.path === "/admin" // Exact match for Dashboard
                  ? path === el.path
                    ? "bg-primary-300 text-secondary-600"
                    : "text-secondary-300"
                  : path.includes(el.path) // For all other paths
                    ? "bg-primary-300 text-secondary-600"
                    : "text-secondary-300"
              }`}
            >
              <button
                onClick={() => {
                  router.push(el.path);
                }}
                className={`rounded-md px-3 py-2 flex items-center gap-3 text-[14px] font-semibold ${!sidebarOpen ? "w-fir" : "w-[150px]"}`}
              >
                {!sidebarOpen && (
                  <div
                    className="w-full"
                    data-tooltip-id={`tooltip-${ind}`}
                    data-tooltip-content={el.tooltip}
                    data-tooltip-place="right"
                  >
                    {el.icon}
                  </div>
                )}
                {sidebarOpen && el.icon}
                {sidebarOpen && el.name}
              </button>
              <Tooltip
                id={`tooltip-${ind}`}
                style={{ zIndex: 30, position: "fixed" }}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className={`mt-2 text-secondary-300 mx-auto ${sidebarOpen ? "self-end" : "self-start"}`}
      >
        <VscThreeBars size={22} />
      </button>
    </aside>
  );
}

export default Sidebar;

