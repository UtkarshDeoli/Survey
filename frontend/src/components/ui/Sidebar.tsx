"use client";

import {
  BsBookFill,
  BsSpeedometer,
  BsTable,
  BsClipboardDataFill,
  BsGearFill,
} from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// Paths that should have a small sidebar
const SMALL_PATHS = ["/admin/data/analytics", "/admin/surveys/questions"];

function Sidebar() {
  const path = usePathname();
  const router = useRouter();
  const flag = !SMALL_PATHS.includes(path);

  const [sidebarOpen, setSidebarOpen] = useState(flag);

  const SidebarScreens: any = [
    { icon: <BsSpeedometer size={24} />, name: "Dashboard", path: "/admin" },
    { icon: <BsBookFill size={24} />, name: "Surveys", path: "/admin/surveys" },
    { icon: <BsTable size={24} />, name: "Data", path: "/admin/data" },
    { icon: <ImUser size={24} />, name: "Users", path: "/admin/users" },
    { icon: <BsClipboardDataFill size={24} />, name: "Reports", path: "/admin/reports" },
    { icon: <BsGearFill size={24} />, name: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside
      className={`h-screen sticky top-0 left-0 border-2 ${
        flag ? "min-w-[243px]" : "min-w-[75px]"
      }`}
    >
      <div className={`flex flex-col items-start pt-6 ${flag ? "px-2" : ""}`}>
        {SidebarScreens.map((el: any, ind: number) => (
          <button
            onClick={() => {
              router.push(el.path);
            }}
            key={ind}
            className={`rounded-md px-8 py-4 flex gap-2 items-center text-[16px] font-semibold w-full ${
              el.path === "/admin" // Exact match for Dashboard
                ? path === el.path
                  ? "border-2 bg-primary-300 bg-opacity-10 border-primary-300 text-primary-300"
                  : "text-secondary-300"
                : path.includes(el.path) // For all other paths
                ? "border-2 bg-primary-300 bg-opacity-10 border-primary-300 text-primary-300"
                : "text-secondary-300"
            }`}
          >
            {el.icon}
            {flag && el.name}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
