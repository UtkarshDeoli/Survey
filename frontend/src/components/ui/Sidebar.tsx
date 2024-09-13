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
    { icon: <BsSpeedometer size={24} />, name: "Dashboard" },
    { icon: <BsBookFill size={24} />, name: "Surveys" },
    { icon: <BsTable size={24} />, name: "Data" },
    { icon: <ImUser size={24} />, name: "Users" },
    { icon: <BsClipboardDataFill size={24} />, name: "Reports" },
    { icon: <BsGearFill size={24} />, name: "Settings" },
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
              if (el.name === "Dashboard") router.push("/admin");
              else router.push(`/admin/${el.name.toLowerCase()}`);
            }}
            key={ind}
            className={`rounded-md px-8 py-4 flex gap-2 items-center text-[16px] text-secondary-300 font-semibold w-full ${
              path === `/admin/${el.name.toLowerCase()}`
                ? "border-2 bg-primary-300 bg-opacity-10 border-primary-300"
                : ""
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
