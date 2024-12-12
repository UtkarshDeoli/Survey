"use client";

import { truncateText, formatDate } from "@/utils/common_functions";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaCircleXmark, FaLocationDot } from "react-icons/fa6";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import toast from "react-hot-toast";
import { updateKaryakartas } from "@/networks/user_networks";
import { useSearchParams } from "next/navigation";
import Response from "../survey-responses/Response";
import { updateResponse } from "@/networks/response_networks";
import { GoCheckCircleFill } from "react-icons/go";

interface ResponseTableProps {
  responses: any;
  users: {
    _id: string;
    name: string;
  }[];
  assignMode?: boolean;
  setSelectedResponse: (response: any) => void;
  setResponseModalIsOpen: (isOpen: boolean) => void;
  setMapModalIsOpen: (isOpen: boolean) => void;
  setMore: (questionId: string | null) => void;
  more: string | null;
  setAssignedMode: (val: boolean) => void;
  selectedPanna: string | null;
  getUserResponses: any;
  setSelectedPanna: (val: string | null) => void;
}
function ResponseGrid({
  responses,
  users,
  setSelectedResponse,
  setResponseModalIsOpen,
  setMore,
  more,
  getUserResponses
}: ResponseTableProps) {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("survey_id");
  async function updateStatus(response_id:string,status:string,e:any){
    e.stopPropagation();
    const params = {response_id,status}
    const response = await updateResponse(params);
    if(response.success){
      toast.success("Successfully updated!")
      getUserResponses();
    }else{
      toast.error("Failed to update!")
    }
  }

  return (
    <div
      id="scrollableDiv"
      className="w-[96%] mx-auto max-h-[80vh] overflow-auto vertical-scrollbar rounded-t-2xl border border-secondary-200"
    >
      <table className="w-full table-auto">
        <thead className="">
          <tr className="bg-dark-gray text-white sticky top-0 left-0 z-10">
            <td className="min-w-32 px-4 py-2 border-b text-center"></td>
            <td className="px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold">
              Panna pramukh
            </td>
            <td className="px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold">
              Status
            </td>
            <td className="px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold">
              Remark
            </td>
            <td className="px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold">
              Response date
            </td>
            <td className="px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold">
              User
            </td>
            {responses &&
              responses.length > 0 &&
              responses[0].responses.map((response: any, index: number) => (
                <td
                  key={index}
                  className="gap-2 font-semibold px-4 py-2 border-b min-w-32 whitespace-nowrap text-center"
                >
                  {more !== response.question_id
                    ? truncateText(response.question, 10)
                    : response.question}
                  <button
                    className="text-primary-300 text-sm ml-2"
                    onClick={() => setMore(response.question_id)}
                  >
                    {more !== response.question_id &&
                    response.question.length > 10
                      ? "More"
                      : ""}
                  </button>
                  <button
                    className="text-primary-300 text-sm ml-2"
                    onClick={() => setMore(null)}
                  >
                    {more === response.question_id &&
                    response.question.length > 10
                      ? "Less"
                      : ""}
                  </button>
                </td>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {responses &&
            responses.map((response: any, rowIndex: number) => (
              <tr
                onClick={() => {
                  setSelectedResponse(response);
                  setResponseModalIsOpen(true);
                }}
                className="cursor-pointer"
                key={rowIndex}
              >
                <td className="min-w-32 px-4 py-4 border-b h-full sticky left-0 bg-white w-full text-center">
                  {
                    response.status === "Pending" ? (
                      <div className="flex gap-3">
                          <button onClick={(e)=>updateStatus(response._id,"Approved",e)} className="bg-green-500 p-2 rounded-md text-white"><GoCheckCircleFill /></button>
                          <button onClick={(e)=>updateStatus(response._id,"Rejected",e)} className="bg-red-400 p-2 rounded-md text-white"><FaCircleXmark /></button>
                      </div>
                    ) : response.status === "Approved" ? (
                      <p className="bg-green-500 p-2 rounded-md flex gap-2 items-center w-fit text-white"><GoCheckCircleFill /> Approved</p>
                    ) :(
                      <p className="bg-red-400 p-2 rounded-md flex gap-2 items-center w-fit text-white"><FaCircleXmark /> Rejected</p>
                    )
                  }
                </td>
                <td className="min-w-32 px-4 py-4 border-b text-center">
                  {response.panna_pramukh_assigned
                    ? response.panna_pramukh_assigned.name
                    : "--"}
                </td>
                <td className="min-w-32 px-4 py-4 border-b text-center">
                  {response.contacted ? (
                    <p className="w-full p-2 bg-green-200 rounded-md">
                      Complete
                    </p>
                  ) : response.panna_pramukh_assigned ? (
                    <p className="w-full p-2 bg-amber-300 rounded-md">
                      Pending
                    </p>
                  ) : (
                    "---"
                  )}
                </td>
                <td className="min-w-32 px-4 py-4 border-b text-center">
                  {response.remark ? truncateText(response.remark, 15) : "---"}
                </td>

                <td className="min-w-32 px-4 py-4 border-b text-center">
                  {formatDate(response.createdAt)}
                </td>
                <td className="min-w-44 whitespace-nowrap px-4 py-2 border-b text-center">
                  {users.find((user) => user._id === response.user_id)?.name ||
                    "-"}
                </td>

                {response.responses.map((res: any, colIndex: any) => (
                  <Response
                    expand={false}
                    questionType={res.question_type}
                    response={res.response}
                  />
                ))}
              </tr>
            ))}
          {/* </InfiniteScroll> */}
        </tbody>
      </table>
    </div>
  );
}

export default ResponseGrid;
