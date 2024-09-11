"use client";

import TwoDatePicker from "@/components/data/TwoDatePicker";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import { useState } from "react";
import eye from "../../../../../public/icons/survey_data/eye.png";
import file_plus from "../../../../../public/icons/survey_data/file_plus.png";
import Image from "next/image";


interface SurveyResponse {
  userId: string;
  collected_at: string;
  id: string;
  questions: {
    response?: string
  }[];
}

interface ColumnHead {
  columns: string[];
}


function page() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

    // get colums(questions) from survey info query
    const columns = [
      "How Often Does This?",
      "Compared To Similar",
      "How Often Does This?",
      "Compared To Similar",
    ];
  
    // get all responses of this survey
    const data: SurveyResponse[] = [
      {
        userId: "iuyb234fbp9w59",
        collected_at: "03-Sep-2024 11:47:00",
        id: "789",
        questions: [
          { response: "Very Often" },
          { response: "Slightly Fair" },
        ],
      },
      {
        userId: "WE34m567i8234hm",
        collected_at: "04-Sep-2024 11:47:00",
        id: "463",
        questions: [
          { response: "Occasionally" },
          { response: "Fair" },
        ],
      },
    ];

  return (
    <div className="w-full bg-my-gray-100 font-medium">
      <nav className="h-16 bg-white w-full py-3 px-8 flex justify-between shadow-md font-semibold">
        <div className="text-my-gray-200 items-center my-auto">
          <p className="text-sm">Survey Responses : Retail Company</p>
        </div>
        <div className="flex space-x-2 text-black text-base font-semibold">
          <ButtonFilled className="rounded-lg px-4 py-2">
            Export to Excel
          </ButtonFilled>
          <ButtonFilled className="rounded-lg px-4 py-2">Export to CSV</ButtonFilled>
          <ButtonFilled className="rounded-lg px-4 py-2">
            Configure Fields
          </ButtonFilled>
          <FilledGreyButton className="rounded-lg px-4 py-2">Back</FilledGreyButton>
        </div>
      </nav>

      <div className="p-5 font-semibold text-sm text-my-gray-200">
        <div className="bg-white space-y-4 rounded-lg px-4 py-6 shadow-md">
          <div className="w-[780px] space-y-8 pb-6 ">
            {/* Filters Dropdown */}
            <div className="space-y-2">
              <div className="">
                <h1 className="text-my-gray-200">Filters</h1>
              </div>
              <div className="w-full">
                <select
                  name="filters"
                  id="filters"
                  className="border w-full shadow-lg rounded-lg px-4 py-2"
                >
                  <option value="filter-one">filter-one</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between space-x-6">
              {/* Date Range */}
              <div className="">
                <h1 className="text-my-gray-200 mb-2">Date Range</h1>
                <div className="w-full border border-my-gray-200 flex items-center rounded-lg">
                  <TwoDatePicker
                    className="w-[352px] h-10"
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                </div>
              </div>

              {/* Selected User */}
              <div className="flex flex-col space-y-2 w-[352px]">
                <h1 className="text-my-gray-200">Selected User</h1>
                <select
                  name="selected-user"
                  id="selected-user"
                  className="border h-10 w-[352px] border-my-gray-200 rounded-lg px-4 py-2"
                >
                  <option value="all-users">All Users</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <h1 className="text-my-gray-200">Data Filter</h1>
              <ButtonFilled className="w-10 h-10 text-center">+</ButtonFilled>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <FilledGreyButton className="rounded-lg border-my-gray-200 bg-white px-4 py-2">Reset</FilledGreyButton>
              <ButtonFilled className="rounded-lg px-4 py-2">Apply</ButtonFilled>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      {/* fix/add overflow-scroll */}
      <div className="px-4 overflow-x-scroll text-my-gray-200">
        <div className="w-full shadow-md overflow-x-scroll rounded-t-2xl mt-8">
          <div className="grid grid-cols-7 gap-4 items-center rounded-t-2xl py-4 px-6 bg-my-gray-105 font-semibold border-2 border-secondary-200">
            <div className="col-span-1">--</div>
            <div className="col-span-1">ID</div>
            <div className="col-span-1">Data Collected</div>
            <div className="col-span-1">User ID</div>
            {columns.map((column, index) => (
              <div key={index} className="col-span-1 text-center">
                {column}
              </div>
            ))}
          </div>

          {data.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-7 gap-4 items-center p-4 text-black font-normal text-base border bg-white border-gray-200"
            >
              <div className="col-span-1 flex justify-center items-center space-x-2">
                <Image src={file_plus.src} alt="filter icon" height={24} width={24}/>
                <Image src={eye.src} alt="filter icon" height={24} width={24}/>
              </div>
              <div className="col-span-1">{row.id}</div>
              <div className="col-span-1">{row.collected_at}</div>
              <div className="col-span-1">{row.userId}</div>

              {columns.map((column, index) => (
                <div key={index} className="col-span-1 text-center">
                  {/* if that indexed answer not there, then print - */}
                  {row.questions[index] && row.questions[index].response
                    ? row.questions[index].response
                    : "-"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default page;
