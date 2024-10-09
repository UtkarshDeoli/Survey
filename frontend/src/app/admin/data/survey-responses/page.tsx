"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import TwoDatePicker from "@/components/ui/date/TwoDatePicker";
import { useEffect, useState } from "react";
import { getSurveyResponses } from "@/networks/response_networks";
import { useSearchParams } from "next/navigation";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

interface SurveyResponse {
  userId: string;
  collected_at: string;
  id: string;
  questions: {
    response?: string
  }[];
}

function page() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [user,setUsers] = useState <any>("");
  const searchParams = useSearchParams()
  const surveyId = searchParams.get("survey_id")
  const [responses, setResponses] = useState<any[]>([])

  useEffect(()=>{
      getUserResponses();
  },[])

  async function getUserResponses(){
    const params = {surveyId}
    const response = await getSurveyResponses(params)
    console.log("data--->",response.data)
    setResponses(response.data);
  }

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

      
       {/* Table Container */}
       <div className="overflow-x-auto rounded-t-2xl border border-secondary-200 mx-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-secondary-100">
              <td className="min-w-20 px-4 py-2 border-b"></td>
              <td className="min-w-20 px-4 py-2 border-b"></td>
              {responses.length > 0 && responses[0].responses.map((response:any, index:number) => (
                <td key={index} className="text-secondary-300 px-4 py-2 text-left border-b min-w-20">{response.question}</td>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {responses.map((response, rowIndex) => (
              <tr key={rowIndex}>
                <td className="min-w-20 px-4 py-2 border-b"><AiOutlineFileAdd /></td>
                <td className="min-w-20 px-4 py-2 border-b"><FaEye /></td>
                {response.responses.map((res:any, colIndex:any) => (
                  <td key={colIndex} className="px-4 py-2 border-b min-w-20 ">{res.response || '-'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default page;
