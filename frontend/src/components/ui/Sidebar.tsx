"use client";

import React, { useEffect, useState } from "react";
import {
  BsBookFill,
  BsSpeedometer,
  BsTable,
} from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { RiCalendarTodoFill } from "react-icons/ri";
import { checkToken } from "@/utils/common_functions";
import surveyProfile from "/public/images/survey_profile.png";

// Paths that should have a small sidebar
function Sidebar({ sidebarOpen, onSidebarToggle }: any) {
  const path = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const token = checkToken();
    if (token) {
      setUser(token);
    }
  }, []);

  // Define Sidebar items
  let SidebarScreens: any = [
    {
      icon: "/images/dashboard.png",
      name: "Dashboard",
      path: "/admin",
      tooltip: "Dashboard",
    },
    {
      icon: "/images/survey.png",
      name: "Surveys",
      path: "/admin/surveys",
      tooltip: "Surveys",
    },
    {
      icon: "/images/database.png",
      name: "Data",
      path: "/admin/data",
      tooltip: "Data",
    },
    {
      icon: "/images/todo.png",
      name: "To-Do list",
      path: "/admin/todos",
      tooltip: "todo-list",
    },
  ];

  let bottomTabs = [
    {
      icon: "/images/support.png",
      name: "Support",
      path: "/admin/support",
      tooltip: "Support",
    },
    {
      icon: "/images/settings.png",
      name: "Settings",
      path: "/admin/settings",
      tooltip: "Settings",
    },
  ];

  // Filter out "Karyakarta" and "Users" tabs if the user has "operation team" role
  if (user?.role && user.role.includes("Operation team")) {
    SidebarScreens = SidebarScreens.filter(
      (item: any) => item.name !== "Karyakarta" && item.name !== "Users"
    );
  } else {
    // Add "Karyakarta" and "Users" if the user does not have "operation team" role
    SidebarScreens.push(
      {
        icon: "/images/karyakarta.png",
        name: "Karyakarta",
        path: "/admin/karyakarta",
        tooltip: "Karyakarta",
      },
      {
        icon: "/images/survey-user.png",
        name: "Users",
        path: "/admin/users",
        tooltip: "Users",
      }
    );
  }
  function getSidebarButtonClass(el: any) {
    return `relative flex justify-center ${
      sidebarOpen ? "w-full mb-3" : "w-fit self-center mb-5"
    } rounded-[15px] transition-all ease-in-out duration-200 ${
      el.path === "/admin" // Exact match for Dashboard
        ? path === el.path
          ? "bg-primary-300 text-secondary-600 hover:bg-primary-100 hover:text-white hover:scale-105"
          : "text-secondary-300 hover:bg-primary-300 hover:text-white hover:scale-105"
        : path.includes(el.path) // For all other paths
        ? "bg-primary-300 text-secondary-600 hover:bg-primary-100 hover:text-white hover:scale-105"
        : "text-secondary-300 hover:bg-primary-300 hover:text-white hover:scale-105"
    }`;
  }
  

  return (
    <aside
      className={`h-screen overflow-visible relative border-2 border-secondary-100 flex flex-col transition-all duration-300 ease-in-out justify-between pb-5 ${
        sidebarOpen ? "w-[250px]" : "w-[75px]"
      }`}
    >
      <button onClick={onSidebarToggle} className={`transition-all duration-300 absolute z-50 -right-[25px] top-1/2 transform -translate-y-1/2 ${!sidebarOpen ? "rotate-180":"" }`}>
        <img src="/images/arrow-left.png" className=" w-[50px]"/>
      </button>
      <div className="flex flex-col h-full w-full">
        <h1
          onClick={() => router.push("/")}
          className="flex flex-col font-semibold gap-3 cursor-pointer justify-center pt-2 items-center"
        >
          {sidebarOpen ? (
            <Image
              src={surveyProfile.src}
              alt="logo"
              height={123}
              width={123}
            />
          ) : (
            <Image src={surveyProfile.src} alt="logo" height={64} width={64} />
          )}
          <button>Profile</button>
        </h1>

        {/* upper section of tabs */}
        <div
          className={`flex flex-1 flex-col items-start pt-10 ${
            sidebarOpen ? "px-2" : ""
          }`}
        >
          {SidebarScreens.map((el: any, ind: number) => (
            <div
              key={ind}
              className={getSidebarButtonClass(el)}
            >
              <button
                onClick={() => {
                  router.push(el.path);
                }}
                className={`rounded-md px-3 py-2 flex items-center gap-3 text-[14px] font-semibold ${
                  !sidebarOpen ? "w-fit" : "w-[150px]"
                }`}
              >
                {!sidebarOpen && (
                  <div
                    className="w-full"
                    data-tooltip-id={`tooltip-${ind}`}
                    data-tooltip-content={el.tooltip}
                    data-tooltip-place="right"
                  >
                    <img src={el.icon} className="w-[20px]"/>
                  </div>
                )}
                {sidebarOpen && <img src={el.icon} className="w-[20px]"/>}
                {sidebarOpen && el.name}
              </button>
              <Tooltip
                id={`tooltip-${ind}`}
                style={{ zIndex: 30, position: "fixed" }}
              />
            </div>
          ))}
        </div>

        {/* lower section of tabs */}
        <div
          className={`flex flex-col w-full ${
            sidebarOpen ? "px-2" : ""
          }`}
        >
          {bottomTabs.map((el: any, ind: number) => (
            <div
              key={ind}
              className={getSidebarButtonClass(el)}
            >
              <button
                onClick={() => {
                  router.push(el.path);
                }}
                className={`rounded-md px-3 py-2 flex items-center gap-3 text-[14px] font-semibold ${
                  !sidebarOpen ? "" : "w-[150px]"
                }`}
              >
                {!sidebarOpen && (
                  <div
                    className="w-full"
                    data-tooltip-id={`tooltip-${ind}`}
                    data-tooltip-content={el.tooltip}
                    data-tooltip-place="right"
                  >
                    <img src={el.icon} className="w-[20px]"/>
                  </div>
                )}
                {sidebarOpen && <img src={el.icon} className="w-[20px]"/>}
                {sidebarOpen && el.name}
              </button>
              <Tooltip
                id={`tooltip-${ind}`}
                style={{ zIndex: 30, position: "fixed" }}
              />
            </div>
          ))}
          <div className="relative flex justify-center hover:bg-primary-300 rounded-[20px] transition-all duration-150">
            <button
              onClick={() => {
                localStorage.removeItem("jwt_token");
                router.push("/");
              }}
              className={`rounded-md px-3 py-2 flex items-center gap-3 text-[14px] font-bold text-primary-300 hover:text-white ${
                !sidebarOpen ? "w-fit" : "w-[150px]"
              }`}
            >
               {!sidebarOpen && (
                  <div
                    className="w-full"
                    data-tooltip-id={`tooltip-logout`}
                    data-tooltip-content={"Logout"}
                    data-tooltip-place="right"
                  >
                    <img src="/images/logout.png" className="w-[25px]" />
                  </div>
                )}
                {sidebarOpen && <img src="/images/logout.png" className="w-[25px]" />}
                {sidebarOpen && 'logout'}
              </button>
              <Tooltip
                id={`tooltip-logout`}
                style={{ zIndex: 30, position: "fixed" }}
              />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
