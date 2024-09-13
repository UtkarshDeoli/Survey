"use client";

import { useState } from "react";
import {
  BsBookFill,
  BsBox,
  BsChevronLeft,
  BsChevronRight,
  BsClipboardDataFill,
  BsGearFill,
  BsSpeedometer,
  BsTable,
} from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";

interface SidebarScreenType {
  icon?: JSX.Element;
  name: string;
}

const SidebarScreens: SidebarScreenType[] = [
  { icon: <BsSpeedometer size={24} />, name: "Dashboard" },
  { icon: <BsBookFill size={24} />, name: "Surveys" },
  { icon: <BsTable size={24} />, name: "Data" },
  { icon: <ImUser size={24} />, name: "Users" },
  { icon: <BsClipboardDataFill size={24} />, name: "Reports" },
  { icon: <BsGearFill size={24} />, name: "Settings" },
];

function SimpleButton({ Screen, ind, sidebarClosed, router }) {
  return (
    <button
      onClick={() =>
        router.push(`/admin/${Screen.name.toLowerCase()}`, "_self")
      }
      key={ind}
      className="px-8 py-4 flex gap-2 items-center text-[16px] text-secondary-300 font-semibold"
    >
      {Screen.icon ? Screen.icon : <BsBox size={24} />}

      {sidebarClosed && Screen.name}
    </button>
  );
}

function SelectedButton({ Screen, ind, sidebarClosed }) {
  return (
    <button
      key={ind}
      className="px-8 py-4 flex gap-2 items-center text-[16px] text-primary-300 font-semibold bg-primary-300 bg-opacity-10 border-primary-300 border-2 rounded-md"
    >
      {Screen.icon ? Screen.icon : <BsBox size={24} />}

      {sidebarClosed && Screen.name}
    </button>
  );
}

function Sidebar() {
  const router = useRouter();
  const path = usePathname();
  const pathLength = path.split("/").length;
  const flag = pathLength > 3;

  const [sidebarClosed, setSidebarClosed] = useState(!flag);

  return (
    <aside
      className={`h-screen  border-2 sticky left-0 top-0 ${flag ? "min-w-[243px]" : "min-w-[75px]"}`}
    >
      <div className="flex justify-end">
        {sidebarClosed ? (
          <BsChevronLeft size={24} onClick={() => setSidebarClosed(false)} />
        ) : (
          <BsChevronRight size={24} onClick={() => setSidebarClosed(true)} />
        )}
      </div>

      <div className={`flex flex-col items-start pt-6 px-4`}>
        {SidebarScreens.map((Screen: SidebarScreenType, ind: number) => {
          console.log(path.includes(Screen.name.toLowerCase()), Screen.name);
          return path.includes(Screen.name.toLowerCase()) ? (
            <SelectedButton
              Screen={Screen}
              ind={ind}
              sidebarClosed={sidebarClosed}
            />
          ) : (
            <SimpleButton
              Screen={Screen}
              ind={ind}
              sidebarClosed={sidebarClosed}
              router={router}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
