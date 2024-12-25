"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BsPieChart,
} from "react-icons/bs";
import Loader from "@/components/ui/Loader";
import { getAllSurveyResponses } from "@/networks/response_networks";
import { formatDate } from "@/utils/common_functions";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data,setData] = useState <any[]>([]);
  const [searchValue,setSearchValue] = useState <string> ("")
  const [sortOrder,setSortOrder] = useState <string>('desc');
  const [reset,setReset] = useState <boolean>(false)
  const [page,setPage] = useState<number>(1);
  const [pageLimit,setPageLimit] = useState<number>(10);
  const [totalResponsePages, setTotalResponsePages] = useState<number>(0);
  
  const router = useRouter();
  
 console.log(data)
  useEffect(()=>{
    getResponses()
   },[sortOrder,reset,page,pageLimit])

  async function getResponses(){
    const params ={search:searchValue,sortOrder,page,limit:pageLimit}
    setLoading(true)
    const response = await getAllSurveyResponses(params)
    if(response.success){
      console.log("response -----",response)
      setTotalResponsePages(response.pagination.totalPages)
      setPage(response.pagination.currentPage)
      setData(response.data)
    }
    setLoading(false)
  }

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    setPageLimit(newLimit);
    setPage(1);
  };

  const handleNextPage = () => {
    if (page < totalResponsePages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="w-full font-medium bg-[#ECF0FA]">
      <nav className="h-16 w-full py-3 px-8 flex justify-between">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Surveys Data</h1>
        </div>
        {/* <ButtonBordered className="bg-white font-semibold">
          Uploaded Summary
        </ButtonBordered> */}
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
              <ButtonFilled className="bg-dark-gray text-white" onClick={()=>{
                  setSearchValue("")
                  setReset(!reset)
                }}>Reset</ButtonFilled>
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
        <div className="grid grid-cols-4 text-white bg-dark-gray font-semibold px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
          <p className="col-span-1">Names</p>
          <p className="col-span-1 flex justify-center items-center">
            Responses
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Analytics
          </p>
          <p className="col-span-1 flex justify-center items-center">
            AC list
          </p>
          
        </div>
        {loading && (
          <Loader className="h-[50vh] w-full flex justify-center items-center text-primary-300" />
        )}
        {!loading &&
          data.length > 0 ? data.map((el: any, index: number) => (
            <div
              onClick={()=>router.push(`/admin/data/survey-responses?survey_id=${el.survey_id}`)}
              key={index}
              className="grid cursor-pointer grid-cols-4 p-4 border-l border-r border-b border-secondary-200 w-full bg-mid-gray"
            >
              <div className="col-span-1 flex flex-col">
                <p className="font-semibold">{el.surveyName}</p>
                <p className="text-[13px] text-my-gray-200">{formatDate(el.surveyCreatedAt)}</p>
              </div>
              <button onClick={()=>router.push(`/admin/data/survey-responses?survey_id=${el.survey_id}`)} className="col-span-1 flex justify-center items-center">
                {el.responseCount}
              </button>
              <p className="col-span-1 flex justify-center items-center">
                <BsPieChart
                  size={24}
                  onClick={(e) => {
                    e.stopPropagation()
                  router.push(`/admin/data/analytics?survey_id=${el.survey_id}`)
                  }}
                  className="cursor-pointer"
                />
              </p>
              <div className="col-span-1 flex justify-center items-center">
                {!el.ac_list && <p></p>}
                {el.ac_list && el.ac_list.length > 0 ? <p className="text-green-600 font-semibold">AC list included</p> : <p className="text-primary-300 font-semibold">AC list not included</p>}
              </div>
            </div>
          )) : (
            <div className="flex justify-center items-center h-[30vh] w-full">
              <p>No survey with responses</p>
            </div>
          )}
      </div>

      {!loading && (
        <div className="flex gap-3 items-center mt-4 pl-4 py-3 sticky bottom-0 left-0 bg-[#ECF0FA]">
          {/* Limit Select */}
          <div>
            <label htmlFor="limit-select" className="mr-2">
              Show:
            </label>
            <select
              id="limit-select"
              value={pageLimit}
              onChange={handleLimitChange}
              className="p-2 border rounded-md"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-2 border rounded-md disabled:opacity-50"
            >
              <IoIosArrowBack />
            </button>
            <span>
              Page {page} of {totalResponsePages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalResponsePages}
              className="p-2 border rounded-md disabled:opacity-50"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;


