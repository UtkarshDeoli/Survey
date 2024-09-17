"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import React from "react";
import analytics from "../../../../public/icons/survey_data/analytics.png";
import daily_report from "../../../../public/icons/survey_data/daily_report.png";
import Image from "next/image";
import summary_report from "../../../../public/icons/survey_data/summary_report.png";
import scoring_report from "../../../../public/icons/survey_data/scoring_report.png";
import spatial_report from "../../../../public/icons/survey_data/spatial_report.png";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  function handleClick(target: string) {
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
    <div className="w-full font-medium bg-[#ECF0FA] h-[100vh]">
      <nav className="h-16 w-full py-3 px-8 flex justify-between text-sm">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Surveys Data</h1>
        </div>
        <ButtonBordered>Uploaded Summary</ButtonBordered>
      </nav>

      <div className="p-5 text-sm text-my-gray-200">
        <div className="flex justify-between bg-white p-3 rounded-lg">
          <div className="h-10 w-96">
            <input
              type="text"
              placeholder="Search Surveys here"
              className="w-[387px] h-[41px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
            />
          </div>
          <div className="flex space-x-3 ">
            <ButtonFilled className="text-[14px] font-semibold flex gap-2 items-center justify-center">
              <p>Search</p>
            </ButtonFilled>
            <ButtonBordered>Reset</ButtonBordered>
          </div>
          <div className="flex h-10 items-center space-x-10 ">
            <p className="">Sort By:</p>
            <div className="rounded-md py-2 px-2 justify-between border-2 border-secondary-200">
              <select name="sortby" className="w-40 bg-white focus:outline-none" id="sortby">
                <option value="dateDesc">Date DESC</option>
                <option value="dateAsc">Date ASC</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full mt-3 text-center text-sm border-2 rounded-t-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-500 text-white">
              <tr className="w-full border-b">
                <td className="px-8 text-left py-2 w-1/6">Names</td>
                <td className="px-4 py-2">Responses</td>
                <td className="px-4 py-2">Analytics</td>
                <td className="px-4 py-2">Daily Report</td>
                <td className="px-4 py-2">Summary Report</td>
                <td className="px-4 py-2">Spatial Report</td>
                <td className="px-4 py-2 ">Scoring Report</td>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-[#FFFFFF] h-20 border-b">
                  <td className="px-8 py-2">
                    <div className="text-black space-y-1">
                      <p className="text-base text-left">{row.name}</p>
                      <p className="text-xs text-left">{row.date}</p>
                    </div>
                  </td>
                  <td className="px-4 py-2">{row.responses}</td>
                  <td className="px-4 py-2">
                    <Image
                      className="mx-auto cursor-pointer"
                      src={analytics.src}
                      alt="filter icon"
                      height={24}
                      width={24}
                      onClick={() => handleClick("analytics")}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Image
                      className="mx-auto"
                      src={daily_report.src}
                      alt="filter icon"
                      height={24}
                      width={24}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Image
                      className="mx-auto"
                      src={summary_report.src}
                      alt="filter icon"
                      height={24}
                      width={24}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Image
                      className="mx-auto"
                      src={spatial_report.src}
                      alt="filter icon"
                      height={24}
                      width={24}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Image
                      className="mx-auto"
                      src={scoring_report.src}
                      alt="filter icon"
                      height={24}
                      width={24}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
