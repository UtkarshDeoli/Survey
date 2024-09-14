"use client";

import React, { useState } from "react";
import { BsBookFill, BsSpeedometer, BsTable, BsClipboardDataFill, BsGearFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";
import { VscThreeBars } from "react-icons/vsc";

// Paths that should have a small sidebar
const SMALL_PATHS = ["/admin/data/analytics", "/admin/surveys/questions"];

function Sidebar() {
  const path = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(!SMALL_PATHS.includes(path));

  const SidebarScreens: any = [
    { icon: <BsSpeedometer size={24} />, name: "Dashboard", path: "/admin", tooltip: "Dashboard" },
    { icon: <BsBookFill size={24} />, name: "Surveys", path: "/admin/surveys", tooltip: "Surveys" },
    { icon: <BsTable size={24} />, name: "Data", path: "/admin/data", tooltip: "Data" },
    { icon: <ImUser size={24} />, name: "Users", path: "/admin/users", tooltip: "Users" },
    { icon: <BsClipboardDataFill size={24} />, name: "Reports", path: "/admin/reports", tooltip: "Reports" },
    { icon: <BsGearFill size={24} />, name: "Settings", path: "/admin/settings", tooltip: "Settings" },
  ];

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <aside
      className={`h-screen sticky top-0 left-0 border-2 flex flex-col transition-all duration-300 ease-in-out ${
        sidebarOpen ? "min-w-[243px]" : "min-w-[75px]"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className={`mt-2 text-secondary-300 mx-auto ${sidebarOpen ? "self-end" : "self-start"}`}
      >
        <VscThreeBars size={22} />
      </button>
      <div className={`flex flex-col items-start pt-6 ${sidebarOpen ? "px-2" : ""}`}>
        {SidebarScreens.map((el: any, ind: number) => (
          <div key={ind} className={`relative flex justify-center w-full rounded-md ${
            el.path === "/admin" // Exact match for Dashboard
              ? path === el.path
                ? "border-2 bg-primary-300 bg-opacity-10 border-primary-300 text-primary-300"
                : "text-secondary-300"
              : path.includes(el.path) // For all other paths
              ? "border-2 bg-primary-300 bg-opacity-10 border-primary-300 text-primary-300"
              : "text-secondary-300"
          }`}>
            <button
              onClick={() => {
                router.push(el.path);
              }}
              className={`rounded-md px-4 py-4 flex items-center gap-3 text-[16px] font-semibold ${!sidebarOpen ? "w-fit" : "w-[150px]"}`}
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
    </aside>
  );
}

export default Sidebar;
