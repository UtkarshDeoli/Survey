import React from 'react'
import CustomModal from '../ui/Modal'

interface props{
    selectedResponse: any;
    users: any[];
    setResponseModalIsOpen: (isOpen: boolean) => void;
    responseModalIsOpen: boolean;
}
function ResponseModal({selectedResponse,users,setResponseModalIsOpen,responseModalIsOpen}:props) {
  return (
    <CustomModal
    open={responseModalIsOpen}
    closeModal={() => setResponseModalIsOpen(false)}
  >
    {selectedResponse && (
      <div className="p-4 h-[60vh] flex justify-center items-center w-[50vw]">
        <div className="flex h-full w-full justify-center items-center flex-col gap-4">
          {/* Fixed Header */}
          <div className="grid grid-cols-2 w-full">
            <h2 className="w-full h-full text-center text-xl font-semibold border-b-2 pb-2">
              {" "}
              Question{" "}
            </h2>
            <p className="w-full h-full text-center text-xl font-semibold border-b-2 pb-2">
              Response
            </p>
          </div>
          <div className="grid grid-cols-2 w-full">
            <p className="py-4 bg-blue-100 w-full h-full text-center font-medium">Status</p>
            <p className="py-4 bg-blue-100 w-full h-full flex justify-center font-medium">{selectedResponse.contacted ? <p className="bg-green-200 p-2 rounded-md w-fit">Completed</p> : <p>Pending</p>}</p>
          </div>
          <div className="grid grid-cols-2 w-full">
            <p className="py-4 bg-blue-100 w-full h-full text-center font-medium">Remark</p>
            <p className="py-4 bg-blue-100 w-full h-full flex justify-center font-medium">{selectedResponse.remark ? selectedResponse.remark : "---"}</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex h-full w-full flex-col overflow-y-auto">
            <div className="grid grid-cols-2 w-full">
              <h2 className="py-4 bg-blue-100 w-full h-full text-center font-medium">
                Response by
              </h2>
              <p className="py-4 bg-blue-100 w-full h-full text-center font-medium">
                {users.find((u) => u._id === selectedResponse.user_id)
                  ?.name || "-"}
              </p>
            </div>
            {selectedResponse.responses.map(
              (response: any, index: number) => (
                <div key={index} className="grid grid-cols-2 w-full">
                  <h2
                    className={`w-full py-4 h-full text-center ${
                      index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                    }`}
                  >
                    {response.question}
                  </h2>
                  <p
                    className={`w-full py-4 h-full text-center ${
                      index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                    }`}
                  >
                    {response.question_type === "Radio Grid"
                      ? response.response
                          .split("\n")
                          .map((line: string, index: number) => (
                            <p key={index}>{line}</p>
                          ))
                      : response.response}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )}
  </CustomModal>
  )
}

export default ResponseModal