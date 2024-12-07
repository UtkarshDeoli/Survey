"use client";

import React, { useEffect, useState } from "react";
import { BsBookFill, BsSpeedometer, BsTable } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { RiCalendarTodoFill } from "react-icons/ri";
import { checkToken } from "@/utils/common_functions";
import surveyProfile from "/public/images/survey_profile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

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
    // {
    //   icon: "/images/settings.png",
    //   name: "Settings",
    //   path: "/admin/settings",
    //   tooltip: "Settings",
    // },
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
    return `relative flex rounded-md ${
      sidebarOpen ? "w-full mb-3" : "w-fit self-center mb-5"
    } transition-all ease-in-out duration-200 ${
      el.path === "/admin" // Exact match for Dashboard
        ? path === el.path
          ? "bg-mid-gray hover:bg-mid-gray hover:scale-105"
          : "text-secondary-300 hover:bg-mid-gray hover:scale-105"
        : path.includes(el.path) // For all other paths
        ? "bg-mid-gray border-l-8 border-mid-gray font-bold hover:bg-mid-gray hover:scale-105"
        : "text-secondary-300 hover:bg-mid-gray hover:scale-105"
    }`;
  }

  return (
    <aside
      className={`font-montserrat h-screen overflow-visible relative border-2 border-secondary-100 flex-shrink-0 flex flex-col transition-all duration-300 ease-in-out pb-5 ${
        sidebarOpen ? "w-[300px]" : "w-[75px]"
      }`}
    >
      <button
        onClick={onSidebarToggle}
        className={`transition-all duration-300 absolute z-10 -right-[25px] top-1/2 transform -translate-y-1/2 ${
          !sidebarOpen ? "rotate-180" : ""
        }`}
      >
        <img src="/images/arrow-left.png" className=" w-[50px]" />
      </button>
      <div className="flex flex-col h-full w-full">
        <h1
          onClick={() => router.push("/")}
          className="flex flex-col font-semibold gap-3 cursor-pointer justify-center pt-4 items-center"
        >
          {sidebarOpen ? (
            // <Image
            //   src={surveyProfile.src}
            //   alt="logo"
            //   height={80}
            //   width={80}
            // />
            <div className="flex gap-2">
              <div className="h-12 w-12 rounded-full bg-primary-300 flex-shrink-0">
                <img src="/icons/logo.png" className="h-full w-full" />
              </div>
              <h1 className="font-extrabold text-lg">
                BHARAT DEMOGRAPHIC RESEARCH
              </h1>
            </div>
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary-300 flex-shrink-0">
              <img src="/icons/logo.png" className="h-full w-full" />
            </div>
          )}
          {/* <button>Profile</button> */}
        </h1>

        {/* upper section of tabs */}
        <div
          className={`flex flex-col items-start pt-10 ${
            sidebarOpen ? "px-2" : ""
          }`}
        >
          {SidebarScreens.map((el: any, ind: number) => (
            <div key={ind} className={getSidebarButtonClass(el)}>
              <button
                onClick={() => {
                  router.push(el.path);
                }}
                className={`rounded-md px-3 py-2 flex items-center gap-3 font-semibold ${
                  !sidebarOpen ? "w-fit" : "w-full"
                }`}
              >
                {!sidebarOpen && (
                  <div
                    className="w-full"
                    data-tooltip-id={`tooltip-${ind}`}
                    data-tooltip-content={el.tooltip}
                    data-tooltip-place="right"
                  >
                    <img src={el.icon} className="w-[20px]" />
                  </div>
                )}
                {sidebarOpen && <img src={el.icon} className="w-[20px]" />}
                {sidebarOpen && el.name}
                {sidebarOpen && <MdKeyboardArrowRight className="ml-auto" />}
              </button>
              <Tooltip
                id={`tooltip-${ind}`}
                style={{ zIndex: 30, position: "fixed" }}
              />
            </div>
          ))}
        </div>

        {/* lower section of tabs */}
        <div className={`flex flex-col w-full ${sidebarOpen ? "px-2" : ""}`}>
          {bottomTabs.map((el: any, ind: number) => (
            <div key={ind} className={getSidebarButtonClass(el)}>
              <button
                onClick={() => {
                  router.push(el.path);
                }}
                className={`rounded-md px-3 py-2 flex items-center gap-3 w-full font-semibold ${
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
                    <img src={el.icon} className="w-[20px]" />
                  </div>
                )}
                {sidebarOpen && <img src={el.icon} className="w-[20px]" />}
                {sidebarOpen && el.name}
                {sidebarOpen && <MdKeyboardArrowRight className="ml-auto" />}
              </button>
              <Tooltip
                id={`tooltip-${ind}`}
                style={{ zIndex: 30, position: "fixed" }}
              />
            </div>
          ))}
         
        </div>
        <div className="mt-auto w-[96%] mx-auto relative flex justify-center items-center bg-[#fcbd95] h-32  rounded-lg transition-all duration-150 overflow-hidden before:content-[''] before:absolute before:rounded-full before:w-[40px] before:h-[40px] before:bg-[#eb7e3b] before:top-[10px] before:left-[10px] after:content-[''] after:absolute after:rounded-full after:w-[70px] after:h-[70px] after:bg-[#eb7e3b] after:top-[-20px] after:right-[-20px]">
            <button
              onClick={() => { 
                localStorage.removeItem("jwt_token");
                router.push("/");
              }}
              className={` relative z-20 rounded-md px-3 py-2 flex items-center gap-3 text-[14px] font-bold bg-primary-300 h-fit text-white ${
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
              {sidebarOpen && (
                <IoMdLogOut className="text-[25px]" />
              )}
              {sidebarOpen && "Logout"}
            </button>
            <Tooltip
              id={`tooltip-logout`}
              style={{ zIndex: 30, position: "fixed" }}
            />
          </div>
      </div>
    </aside>
  );
}

export default Sidebar;
