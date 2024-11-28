import { truncateText, formatDate } from '@/utils/common_functions';
import React from 'react'
import { FaEye } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import ButtonFilled from '../ui/buttons/ButtonFilled';

interface ResponseTableProps {
    responses:any;
    users: {
      _id: string;
      name: string;
    }[];
    assignMode?: boolean;
    selectedResponses: string[];
    setSelectedResponse: (response: any) => void;
    setResponseModalIsOpen: (isOpen: boolean) => void;
    setMapModalIsOpen: (isOpen: boolean) => void;
    handleMemberClick: (responseId: string, rowIndex: number) => void;
    setMore: (questionId: string | null) => void;
    more: string | null;
    updatePannaPramukhs: () => void;
  }
function ResponseTable({
    responses,
    users,
    assignMode,
    selectedResponses,
    setSelectedResponse,
    setResponseModalIsOpen,
    setMapModalIsOpen,
    handleMemberClick,
    setMore,
    more,
    updatePannaPramukhs,
  }:ResponseTableProps) {
  return (
    <div
          id="scrollableDiv"
          className="w-[calc(100vw-250px)] overflow-scroll rounded-t-2xl border border-secondary-200 mx-4"
        >
          <table className="w-full table-auto">
            <thead className="">
              <tr className="bg-secondary-100">
                <td className="min-w-32 px-4 py-2 border-b text-center"></td>
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
                responses.map((response:any, rowIndex:number) => (
                  <tr
                    onClick={() => {
                      setSelectedResponse(response);
                      setResponseModalIsOpen(true);
                    }}
                    className="cursor-pointer"
                    key={rowIndex}
                  >
                    {assignMode && (
                      <td
                        onClick={(e) => e.stopPropagation()}
                        className="min-w-32 px-4 py-2 border-b text-center"
                      >
                        <input
                          disabled={response.panna_pramukh_assigned}
                          onChange={() =>
                            handleMemberClick(response._id, rowIndex)
                          }
                          checked={selectedResponses.includes(response._id)}
                          className="h-5 w-5"
                          type="checkbox"
                        />
                      </td>
                    )}
                    <td className="min-w-32 px-4 py-2 border-b text-center">
                      <ButtonFilled
                      className='w-10 p-0 flex justify-center items-center rounded-full h-10'
                        onClick={(e) => {
                          e.stopPropagation();
                          setMapModalIsOpen(true);
                        }}
                      >
                        <FaLocationDot />
                      </ButtonFilled>
                    </td>
                    <td className="min-w-32 px-4 py-2 border-b text-center">
                      <FaEye />
                    </td>
                    <td className="min-w-32 px-4 py-2 border-b text-center">
                      {response.panna_pramukh_assigned
                        ? response.panna_pramukh_assigned.name
                        : "--"}
                    </td>
                    <td className="min-w-32 px-4 py-2 border-b text-center">
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
                    <td className="min-w-32 px-4 py-2 border-b text-center">
                      {response.remark
                        ? truncateText(response.remark, 15)
                        : "---"}
                    </td>

                    <td className="min-w-32 px-4 py-2 border-b text-center">
                      {formatDate(response.createdAt)}
                    </td>
                    <td className="min-w-44 whitespace-nowrap px-4 py-2 border-b text-center">
                      {users.find((user) => user._id === response.user_id)
                        ?.name || "-"}
                    </td>

                    {response.responses.map((res: any, colIndex: any) => (
                      <td
                        key={colIndex}
                        className="px-4 py-2 border-b min-w-44 whitespace-nowrap text-center"
                      >
                        {res.question_type === "Radio Grid"
                          ? res.response
                              .split("\n")
                              .slice(0, 2)
                              .map((line: string, index: number) => (
                                <p key={index}>{line}</p>
                              ))
                              .concat(
                                res.response.split("\n").length > 2 ? (
                                  <p key="ellipsis">...</p>
                                ) : null
                              )
                          : res.question_type === "Date"
                          ? formatDate(res.response)
                          : truncateText(res.response, 20) || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              {/* </InfiniteScroll> */}
            </tbody>
          </table>
          {assignMode && (
            <ButtonFilled
              className="mt-5"
              onClick={() => {
                updatePannaPramukhs();
              }}
            >
              Assign
            </ButtonFilled>
          )}
        </div>
  )
}

export default ResponseTable