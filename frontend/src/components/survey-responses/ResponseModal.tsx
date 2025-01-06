"use client";

import React, { useState } from "react";
import CustomModal from "../ui/Modal";
import Response from "./Response";
import { formatDate, formatTime } from "@/utils/common_functions";

interface props {
  selectedResponse: any;
  users: any[];
  setResponseModalIsOpen: (isOpen: boolean) => void;
  responseModalIsOpen: boolean;
}

function ResponseModal({
  selectedResponse,
  users,
  setResponseModalIsOpen,
  responseModalIsOpen,
}: props) {
  const [showAll, setShowAll] = useState(false);

  const remarksToShow =
  selectedResponse?.remark_list && selectedResponse.remark_list.length > 0
    ? showAll
      ? [...selectedResponse.remark_list].reverse()
      : [...selectedResponse.remark_list].reverse().slice(0, 2)
    : [];

  const handleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <CustomModal
      open={responseModalIsOpen}
      closeModal={() => setResponseModalIsOpen(false)}
    >
      {selectedResponse && (
        <div className="p-4 h-[80vh] flex justify-center items-center w-[60vw]">
          <div className="flex h-full w-full justify-center items-center flex-col gap-4">
            {/* Fixed Header */}
            <div className="grid grid-cols-2 w-full">
              <h2 className="w-full h-full text-center text-xl font-semibold border-b-2 pb-2">
                Question
              </h2>
              <p className="w-full h-full text-center text-xl font-semibold border-b-2 pb-2">
                Response
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="flex h-full w-full flex-col overflow-y-auto vertical-scrollbar">
              <div className="grid grid-cols-2 w-full">
                <p className="py-4 bg-primary-50 w-full h-full text-center font-medium">
                  Status
                </p>
                <p className="py-4 bg-primary-50 w-full h-full flex justify-center font-medium">
                  {selectedResponse.contacted ? (
                    <p className="bg-green-200 p-2 rounded-md w-fit">
                      Completed
                    </p>
                  ) : (
                    <p>Pending</p>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-2 w-full">
                <p className="py-4 bg-primary-100 w-full h-full text-center font-medium">
                  Remark
                </p>
                <div className="grid grid-cols-2 py-4 bg-primary-100 w-full text-center h-full font-medium">
                  {selectedResponse.remark_list &&
                  selectedResponse.remark_list.length > 0 ? (
                    <>
                      <p className="font-semibold">
                        Report:{" "}
                      </p>
                      <p className="font-normal ml-2">
                        {selectedResponse.remark_list[selectedResponse.remark_list.length-1].remark}
                      </p>
                      <p className="font-semibold">
                        Date:{" "}
                      </p>
                      <p className="font-normal ml-2">
                        {formatDate(selectedResponse.remark_list[ selectedResponse.remark_list.length-1].date)}
                      </p>
                      <p className="font-semibold">
                        Time:{" "}
                      </p>
                      <p className="font-normal ml-2">
                        {formatTime(selectedResponse.remark_list[ selectedResponse.remark_list.length-1].date)}
                      </p>
                    </>
                  ) : (
                    "---"
                  )}
                </div>
              </div>

              {/* Remark History */}
              <div className="grid grid-cols-2 w-full bg-primary-50">
                <h2 className="font-medium py-4 text-center">Remark History</h2>
                {selectedResponse.remark_list &&
                selectedResponse.remark_list.length > 0 ? (
                  <div className="p-4 flex flex-col items-center ">
                    {remarksToShow.map((remarkObj: any, index: number) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 w-full py-2 border-b last:border-b-0"
                      >
                        <p className="font-medium text-primary-700">
                          {remarkObj.remark}
                        </p>
                        <p className="text-xs text-gray-600 text-end">
                          {`${formatDate(remarkObj.date)} at ${formatTime(remarkObj.date)}`}
                        </p>
                      </div>
                    ))}
                    {selectedResponse.remark_list.length > 2 && (
                      <button
                        onClick={handleShowMore}
                        className="mt-4 text-sm font-medium hover:text-gray-500"
                      >
                        {showAll ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                ) : (
                  <p className="text-center">No remarks available.</p>
                )}
              </div>
              <div className="grid grid-cols-2 w-full">
                <h2 className="py-4 bg-primary-100 w-full h-full text-center font-medium">
                  Response by
                </h2>
                <p className="py-4 bg-primary-100 w-full h-full text-center font-medium">
                  {users.find((u) => u._id === selectedResponse.user_id)
                    ?.name || "-"}
                </p>
              </div>
              {selectedResponse.responses.map(
                (response: any, index: number) => (
                  <div key={index} className="grid grid-cols-2 w-full">
                    <h2
                      className={`w-full py-4 h-full text-center ${
                        index % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
                      }`}
                    >
                      {response.question}
                    </h2>
                    <p
                      className={`w-full py-4 h-full flex justify-center items-center ${
                        index % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
                      }`}
                    >
                      <Response
                        questionType={response.question_type}
                        response={response.response}
                        expand={true}
                      />
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </CustomModal>
  );
}

export default ResponseModal;
