"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BsClipboardData,
  BsClipboardPlus,
  BsLayersHalf,
  BsListTask,
  BsPieChart,
} from "react-icons/bs";
import Loader from "@/components/ui/Loader";

function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  function handleClick(target: string) {
    console.log("called");
    router.push(`/admin/data/${target}?survey_id=66e46be571b4ac2116bf1f9c`);
  }
  const data = [
    {
      date: "10-Sept-2024",
      name: "Kalpana",
      responses: "45",
      Analytics: "Completed",
      DailyReport: "Reviewed",
      SummaryReport: "Pending",
      SpatialReport: "Not Started",
      ScoringReport: "In Progress",
    },
    {
      date: "02-Jun-2024",
      name: "Vikram",
      responses: "7",
      Analytics: "In Progress",
      DailyReport: "Pending",
      SummaryReport: "Reviewed",
      SpatialReport: "Completed",
      ScoringReport: "Completed",
    },
  ];

  return (
    <div className="w-full font-medium bg-[#ECF0FA] h-full">
      <nav className="h-16 w-full py-3 px-8 flex justify-between">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Surveys Data</h1>
        </div>
        <ButtonBordered className="bg-white font-semibold">
          Uploaded Summary
        </ButtonBordered>
      </nav>

      <div className="p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2">
        <div className="flex justify-between">
          <input
            className="w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
            placeholder="Search Surveys here"
          />
          <div className="flex space-x-3 ">
            <ButtonFilled className="text-[14px] font-semibold flex gap-2 items-center justify-center">
              <p>Search</p>
            </ButtonFilled>
            <div className="flex space-x-3 ">
              <ButtonBordered>Reset</ButtonBordered>
            </div>
          </div>
          <div className="flex items-center space-x-10 ">
            <p className="">Sort By:</p>
            <div className="rounded-md py-2 px-2 justify-between border-2 border-secondary-200">
              <select
                name="sortby"
                className="w-fit px-2 bg-white focus:outline-none"
                id="sortby"
              >
                <option value="dateDesc">Date DESC</option>
                <option value="dateAsc">Date ASC</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 py-5 text-sm">
        <div className="grid grid-cols-7 text-white bg-blue-500 font-semibold px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
          <p className="col-span-1">Names</p>
          <p className="col-span-1 flex justify-center items-center">
            Responses
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Analytics
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Daily Report
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Summary Report
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Spatial Report
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Scoring Report
          </p>
        </div>
        {loading && (
          <Loader className="h-[40vh] w-full flex justify-center items-center text-primary-300" />
        )}
        {!loading &&
          data.map((el: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-7 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-white"
            >
              <div className="col-span-1 flex flex-col">
                <p className="">{el.name}</p>
                <p className="text-[13px] text-my-gray-200">Date</p>
              </div>
              <p className="col-span-1 flex justify-center items-center">
                {el.responses}
              </p>
              <p className="col-span-1 flex justify-center items-center">
                <BsPieChart
                  size={24}
                  onClick={() => {
                    handleClick("analytics");
                  }}
                  className="cursor-pointer"
                />
              </p>
              <p className="col-span-1 flex justify-center items-center">
                <BsClipboardData size={24} />
              </p>
              <p className="col-span-1 flex justify-center items-center">
                <BsListTask size={24} />
              </p>
              <p className="col-span-1 flex justify-center items-center">
                <BsLayersHalf size={24} />
              </p>
              <p className="col-span-1 flex justify-center items-center">
                <BsClipboardPlus size={24} />
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default page;
