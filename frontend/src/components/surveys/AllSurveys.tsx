"use client";

import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getAllSurveys } from "@/networks/survey_networks";
import { formatDate } from "@/utils/common_functions";
function AllSurveys() {
  const [allSurveys, setAllSurveys] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleGetAllSurveys();
  }, []);

  async function handleGetAllSurveys() {
    const params = {}; //to be dynamic
    setLoading(true)
    const response = await getAllSurveys(params);
    setAllSurveys(response.data)
  }
  return (
    <div className="w-full px-8 py-3">
      {/* surveys */}
      <div className="grid grid-cols-10 text-secondary-300 font-semibold bg-secondary-100 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
        <p className="col-span-4">All surveys</p>
        <p className="col-span-2">Total responses</p>
        <p className="col-span-2">Date created</p>
        <p className="col-span-2">Status</p>
      </div>

      {allSurveys && allSurveys.length > 0 ? (
        allSurveys.map((el:any, index:number) => (
          <div
            key={index}
            className="grid grid-cols-10 px-8 py-[16px] border border-secondary-200 w-full"
          >
            <p className="col-span-4">{el.name}</p>
            <p className="col-span-2">0</p>
            <p className="col-span-2">{formatDate(el.createdAt)}</p>
            <div className="col-span-2 flex items-center justify-between w-full">
              <button className={`border rounded-md px-2 py-1 text-[14px] font-medium ${el.published ? "border-custom-green-300 text-custom-green-300" : "border-red-500 text-red-500"}`}>
                {el.published ? "Published" : "Unpublished"}
              </button>
              <BsThreeDotsVertical />
            </div>
          </div>
        ))
      ) : (
        <p>No surveys</p>
      )}
    </div>
  );
}

export default AllSurveys;
