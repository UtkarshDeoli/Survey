"use client";

import { truncateText, formatDate } from "@/utils/common_functions";
import React, { useState } from "react";
import Response from "../survey-responses/Response";

interface ResponseTableProps {
  data: any;
  setSelectedResponse: (response: any) => void;
  setResponseModalIsOpen: (isOpen: boolean) => void;
}

function SampleResponses({
  data,
  setSelectedResponse,
  setResponseModalIsOpen,
}: ResponseTableProps) {
  const [more, setMore] = useState<string | null>(null); // State for managing expanded questions

  return (
    <div
      id="scrollableDiv"
      className="w-[96%] mx-auto max-h-[80vh] overflow-auto vertical-scrollbar rounded-t-2xl border border-secondary-200"
    >
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-dark-gray text-white sticky top-0 left-0 z-50">
            <td className="min-w-32 px-4 py-2 border-b text-center whitespace-nowrap sticky left-0 bg-dark-gray">
              Quality check status
            </td>
            <td className="px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold">
              Quality remark
            </td>
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
            {data&&
              data.length > 0 &&
              data[0].response_id.responses.map((response: any, index: number) => (
                <td
                  key={index}
                  className="gap-2 font-semibold px-4 py-2 border-b min-w-32 whitespace-nowrap text-center"
                >
                  {more !== response.question_id
                    ? truncateText(response.question, 10)
                    : response.question}
                  <button
                    className="text-primary-300 text-sm ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMore(
                        more === response.question_id ? null : response.question_id
                      );
                    }}
                  >
                    {more !== response.question_id &&
                    response.question.length > 10
                      ? "More"
                      : "Less"}
                  </button>
                </td>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data &&
            data.map(({response_id:response}: any, rowIndex: number) => (
                <tr
                onClick={() => {
                  setSelectedResponse(response);
                  setResponseModalIsOpen(true);
                }}
                className="cursor-pointer"
                key={rowIndex}
              >
                <td className="min-w-32 px-4 py-4 border-b h-full sticky left-0 bg-white w-full text-center">
                  status
                </td>
                <td className="min-w-32 px-4 py-4 border-b text-center">
                  {response.quality_check_remarks
                    && response.quality_check_remarks.length > 0 ? response.quality_check_remarks[response.quality_check_remarks.length -1].note
                    : "--"}
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
                {/* <td className="min-w-44 whitespace-nowrap px-4 py-2 border-b text-center">
                  {users.find((user) => user._id === response.user_id)?.name ||
                    "-"}
                </td> */}

                {response.responses.map((res: any, colIndex: any) => (
                  <Response
                    expand={false}
                    questionType={res.question_type}
                    response={res.response}
                  />
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SampleResponses;
