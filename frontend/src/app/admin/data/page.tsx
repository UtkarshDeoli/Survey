"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BsClipboardData,
  BsClipboardPlus,
  BsLayersHalf,
  BsListTask,
  BsPieChart,
} from "react-icons/bs";
import Loader from "@/components/ui/Loader";
import { getAllSurveyResponses } from "@/networks/response_networks";
import { formatDate } from "@/utils/common_functions";

function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data,setData] = useState <any[]>([]);
  const [searchValue,setSearchValue] = useState <string> ("")
  const [sortOrder,setSortOrder] = useState <string>('desc');
  const [reset,setReset] = useState <boolean>(false)
  
  const router = useRouter();
  function handleClick(target: string) {
    router.push(`/admin/data/${target}?survey_id=66e46be571b4ac2116bf1f9c`);
  }
 
  useEffect(()=>{
    getResponses()
   },[sortOrder,reset])

  async function getResponses(){
    const params ={search:searchValue,sortOrder}
    setLoading(true)
    const response = await getAllSurveyResponses(params)
    if(response.success){
      console.log(response)
      setData(response.data)
    }
    setLoading(false)
  }
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
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            className="w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
            placeholder="Search Surveys here"
          />
          <div className="flex space-x-3 ">
            <ButtonFilled onClick={getResponses} className="text-[14px] font-semibold flex gap-2 items-center justify-center">
              <p>Search</p>
            </ButtonFilled>
            <div className="flex space-x-3 ">
              <ButtonBordered onClick={()=>{
                  setSearchValue("")
                  setReset(!reset)
                }}>Reset</ButtonBordered>
            </div>
          </div>
          <div className="flex items-center space-x-10 ">
            <p className="">Sort By:</p>
            <div className="rounded-md py-2 px-2 justify-between border-2 border-secondary-200">
              <select
                onChange={(e)=>setSortOrder(e.target.value)}
                name="sortby"
                className="w-fit px-2 bg-white focus:outline-none"
                id="sortby"
              >
                <option value="asc">Date DESC</option>
                <option value="desc">Date ASC</option>
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
          <Loader className="h-[50vh] w-full flex justify-center items-center text-primary-300" />
        )}
        {!loading &&
          data.map((el: any, index: number) => (
            <div
              onClick={()=>router.push(`/admin/data/survey-responses?survey_id=${el.survey_id}`)}
              key={index}
              className="grid cursor-pointer grid-cols-7 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-white"
            >
              <div className="col-span-1 flex flex-col">
                <p className="">{el.surveyName}</p>
                <p className="text-[13px] text-my-gray-200">{formatDate(el.surveyCreatedAt)}</p>
              </div>
              <button onClick={()=>router.push(`/admin/data/survey-responses?survey_id=${el.survey_id}`)} className="col-span-1 flex justify-center items-center">
                {el.responseCount}
              </button>
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


