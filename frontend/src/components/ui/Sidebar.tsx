"use client";

import {
  BsBookFill,
  BsClipboardDataFill,
  BsGearFill,
  BsSpeedometer,
  BsTable,
} from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { Router } from "next/router";
import { useState } from "react";

// paths that should have small sidebar
const SMALL_PATHS = ["/admin/data/analytics", "/admin/surveys/questions"];

function Sidebar() {
  const path = usePathname();
  const router = useRouter();
  const flag = !SMALL_PATHS.includes(path);

  const [sidebarOpen, setSidebarOpen] = useState(flag);

  // console.log(path, pathLength, flag, "sidebarOpen", sidebarOpen);

  const SidebarScreens: any = [
    { icon: <BsSpeedometer size={24} />, name: "Dashboard" },
    { icon: <BsBookFill size={24} />, name: "Surveys" },
    { icon: <BsTable size={24} />, name: "Data" },
    { icon: <ImUser size={24} />, name: "Users" },
    { icon: <BsClipboardDataFill size={24} />, name: "Reports" },
    { icon: <BsGearFill size={24} />, name: "Settings" },
  ];

  return (
    <aside
      className={`h-screen  border-2 sticky left-0 top-0 ${flag ? "min-w-[243px]" : "min-w-[75px]"}`}
    >
      <div className={`flex flex-col items-start pt-6 ${flag ? "px-2" : ""}`}>
        {SidebarScreens.map((el: any, ind: number) => (
          <button
            onClick={() => {
              if (el.name === "Dashboard") router.push("/admin");
              else router.push(`/admin/${el.name.toLowerCase()}`);
            }}
            key={ind}
            className={`rounded-md px-8 py-4 flex gap-2 items-center text-[16px] text-secondary-300 font-semibold w-full ${path === `/admin/${el.name.toLowerCase()}` ? "border-2 bg-primary-300 bg-opacity-10 border-primary-300" : ""}`}
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
