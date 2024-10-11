"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import TwoDatePicker from "@/components/ui/date/TwoDatePicker";
import { Suspense, useEffect, useState } from "react";
import { getSurveyResponses } from "@/networks/response_networks";
import { useSearchParams } from "next/navigation";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { getAllUsers } from "@/networks/user_networks";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import { useRouter } from "next/navigation"; // For routing
import CustomModal from "@/components/ui/Modal";
import toast from "react-hot-toast";
import { formatDate, truncateText } from "@/utils/common_functions";
import Loader from "@/components/ui/Loader";

const operatorOptions = {
  text: ["contains", "equals", "starts with", "ends with"],
  number: ["=", "!=", "<", "<=", ">", ">="],
  choice: ["equals", "not equals"],
};

function Page() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [questionType, setQuestionType] = useState<string>("");
  const [filters, setFilters] = useState<
    { question: string; operator: string; response: string }[]
  >([]);
  const [userId, setUserId] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const searchParams = useSearchParams();
  const surveyId = searchParams.get("survey_id");
  const [responses, setResponses] = useState<any[]>([]);
  const [reset,setReset] = useState <boolean>(true);
  const [loading,setLoading] = useState <boolean>(false)
  const router = useRouter(); // For routing
  const [more,setMore] = useState <string | null> (null)

  useEffect(() => {
    getUserResponses();
    getUsers();
  }, [reset]);
console.log("filters---->",filters)
  async function getUserResponses() {
    let nStartDate, nEndDate;
    if (startDate && endDate) {
      nStartDate = new Date(startDate || "");
      nEndDate = new Date(endDate || "");
      nStartDate.setDate(nStartDate.getDate() + 1);
      nEndDate.setDate(nEndDate.getDate() + 1);
    }
    const params = {
      surveyId,
      startDate: nStartDate,
      endDate: nEndDate,
      userId,
      filters:selectedFilter.trim().length > 0 ? selectedFilter : {}
    };
    setLoading(true);
    const response = await getSurveyResponses(params);
    setResponses(response.data);
    setLoading(false);
  }

  async function getUsers() {
    setLoading(true);
    const response = await getAllUsers({});
    console.log(response.data)
    setUsers(response.data);
    setLoading(false);
  }

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    clearModalInputs(); // Clear inputs when closing the modal
  };

  const clearModalInputs = () => {
    setQuestion("");
    setOperator("");
    setResponse("");
  };

  const saveFilter = () => {
    setFilters([...filters, { question, operator, response }]);
    closeModal();
  };

  const getOperatorOptions = (questionType: string) => {
    if (
      [
        "Single line Text Input",
        "Multiline Text Input",
        "Email",
        "Phone Number",
        "Checkbox List",
        "Checkbox List With Other",
      ].includes(questionType)
    ) {
      return operatorOptions.text;
    } else if (
      ["Number Input", "Number Point", "Rating", "Date"].includes(questionType)
    ) {
      return operatorOptions.number;
    } else if (
      [
        "Radio Button",
        "DropDown",
        "DropDown With Other",
        
      ].includes(questionType)
    ) {
      return operatorOptions.choice;
    }
    return [];
  };

  const getDefaultOperator = (questionType: string) => {
    const options = getOperatorOptions(questionType);
    return options.length > 0 ? options[0] : ""; // Return first operator as default
  };

  const handleQuestionChange = (value: string) => {
    const selectedResponse = responses[0]?.responses.find(
      (res: any) => res.question_id === Number(value)
    );
    if (selectedResponse) {
      setQuestion(value);
      setQuestionType(selectedResponse.question_type);
      setOperator(getDefaultOperator(selectedResponse.question_type));
    } else {
      setQuestionType("");
    }
  };

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
          <ButtonFilled className="rounded-lg px-4 py-2">
            Export to CSV
          </ButtonFilled>
          <ButtonFilled className="rounded-lg px-4 py-2">
            Configure Fields
          </ButtonFilled>
          <FilledGreyButton onClick={()=>router.back()} className="rounded-lg px-4 py-2">
            Back
          </FilledGreyButton>
        </div>
      </nav>

      <div className="p-5 font-semibold text-sm text-my-gray-200">
        <div className="bg-white space-y-4 rounded-lg px-4 py-6 shadow-md">
          <div className="w-[780px] space-y-8 pb-6 ">
            {/* Filters Dropdown */}
            <div className="space-y-2">
              <h1 className="text-my-gray-200">Filters</h1>
              <select
                onChange={(e) => setSelectedFilter(e.target.value)}
                value={selectedFilter}
                name="filters"
                id="filters"
                className="border w-full shadow-lg rounded-lg px-4 py-2"
              >
                <option value ="" disabled selected>
                  Select filter
                </option>
                {filters &&
                  filters.length > 0 &&
                  filters.map((filter) => {
                    let questionText = "";
                    if (responses && responses.length > 0) {
                      const questionResponse = responses[0].responses.find(
                        (res: any) =>
                          Number(res.question_id) === Number(filter.question)
                      );
                      if (questionResponse) {
                        questionText = questionResponse.question;
                      }
                    }
                    const value = JSON.stringify({
                      question: filter.question,
                      operator: filter.operator,
                      response: filter.response,
                    });
                    return (
                      <option value={value} key={filter.question}>
                        {`${questionText} ${filter.operator} ${filter.response}`}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="flex justify-between space-x-6">
              {/* Date Range */}
              <div>
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
                  onChange={(e) => setUserId(e.target.value)}
                  value={userId}
                  name="selected-user"
                  id="selected-user"
                  className="border h-10 w-[352px] border-my-gray-200 rounded-lg px-4 py-2"
                >
                  <option value="" disabled selected>
                    Select user
                  </option>
                  {users && users.length > 0 &&
                    users.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <h1 className="text-my-gray-200">Data Filter</h1>
              <ButtonFilled
                className="w-10 h-10 flex justify-center items-center"
                onClick={openModal}
              >
                +
              </ButtonFilled>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <FilledGreyButton
                onClick={() => {
                  setStartDate(null);
                  setEndDate(null);
                  setUserId("");
                  setSelectedFilter("");
                  setReset(!reset);
                }}
                className="rounded-lg border-my-gray-200 bg-white px-4 py-2"
              >
                Reset
              </FilledGreyButton>
              <ButtonFilled
                disabled={
                  !selectedFilter.trim() &&
                  !userId.trim() &&
                  !startDate &&
                  !endDate
                }
                onClick={() => {
                  if ((startDate && !endDate) || (endDate && !startDate)) {
                    toast.error("Please select a complete date range!");
                    return;
                  } else {
                    getUserResponses();
                  }
                }}
                className="rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:bg-blue-100 disabled:text-secondary-100"
              >
                Apply
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader className="h-[30vh] w-full flex justify-center items-center"/>}
      {
        !loading && responses && responses.length > 0 ? (
          <div className="overflow-x-auto rounded-t-2xl border border-secondary-200 mx-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-secondary-100">
              <td className="min-w-24 px-4 py-2 border-b text-center"></td>
              <td className="min-w-24 px-4 py-2 border-b text-center"></td>
              <td className="text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center">Response date</td>
              <td className="text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center">User</td>
              {responses &&
                responses.length > 0 &&
                responses[0].responses.map((response: any, index: number) => (
                  <td
                    key={index}
                    className="gap-2 text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center"
                  >
                    {more !== response.question_id ? truncateText(response.question,10) : response.question}
                    <button className="text-primary-300 text-sm ml-2" onClick={()=>setMore(response.question_id)}>{more !== response.question_id && response.question.length > 10 ?  "More" : ""}</button>
                    <button className="text-primary-300 text-sm ml-2" onClick={()=>setMore(null)}>{more === response.question_id && response.question.length > 10 ?  "Less" : ""}</button>
                  </td>
                ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {responses &&
              responses.map((response, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="min-w-24 px-4 py-2 border-b text-center">
                    <AiOutlineFileAdd />
                  </td>
                  <td className="min-w-24 px-4 py-2 border-b text-center">
                    <FaEye />
                  </td>
                  <td className="min-w-24 px-4 py-2 border-b text-center">
                    {formatDate(response.createdAt)}
                  </td>
                  <td className="min-w-24 px-4 py-2 border-b text-center">
                    {users.find(user=>user._id === response.user_id)?.name || "-"}
                  </td>

                  {response.responses.map((res: any, colIndex: any) => (
                    <td key={colIndex} className="px-4 py-2 border-b min-w-24 text-center">
                      {/* {res.response || "-"} */}
                      {more !== response.question_id ? truncateText(res.response,10) : res.response || "-"}
                    <button className="text-primary-300 text-sm ml-2" onClick={()=>setMore(response.question_id)}>{more !== response.question_id && res.response.length > 10 ?  "More" : ""}</button>
                    <button className="text-primary-300 text-sm ml-2" onClick={()=>setMore(null)}>{more === response.question_id && res.response.length > 10 ?  "Less" : ""}</button>

                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
        ): !loading && (
          <div className="flex w-full justify-center items-center h-[30vh]">
            <p>No responses found</p>
          </div>
        )
      }
      

      {/* Custom Modal for Data Filter */}
      <CustomModal open={modalIsOpen} closeModal={closeModal}>
        <div className="min-w-[500px] h-[270px] flex flex-col">
          <div className="relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md">
            Create surveys
          </div>
          <form className="w-full h-full p-4 flex gap-10 justify-center items-center">
            {/* Question Select */}
            <div className="flex flex-col items-center gap-2">
              <label className="text-my-gray-200">Question</label>
              <select
                onChange={(e) => handleQuestionChange(e.target.value)}
                value={question}
                className="flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full"
              >
                <option value="" disabled selected>
                  Select question
                </option>
                {responses &&
                  responses.length > 0 &&
                  responses[0].responses.map((response: any, index: number) => (
                    <option
                      key={index}
                      value={response.question_id}
                      className="text-secondary-300 px-4 py-2 text-left border-b min-w-24 whitespace-nowrap"
                    >
                      {response.question}
                    </option>
                  ))}
              </select>
            </div>

            {/* Operator Input */}
            <div className="flex flex-col items-center gap-2">
              <label className="text-my-gray-200">Operator</label>
              <select
                disabled={question.trim().length === 0}
                onChange={(e) => setOperator(e.target.value)}
                value={operator}
                className="flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed"
              >
                <option disabled selected>
                  Select operator
                </option>
                {getOperatorOptions(questionType).map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Response Input */}
            <div className="flex flex-col items-center gap-2">
              <label className="text-my-gray-200">Response</label>
              <input
                disabled={
                  questionType.trim().length === 0 ||
                  operator.trim().length === 0
                }
                onChange={(e) => setResponse(e.target.value)}
                value={response}
                className="flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed"
                type="text"
                placeholder="Enter response"
              />
            </div>
          </form>
          <div className="flex gap-3 items-center p-4">
            <ButtonBordered
              className="disabled:bg-blue-100 disabled:cursor-not-allowed disabled:text-secondary-100"
              disabled={
                question.trim().length === 0 ||
                operator.trim().length === 0 ||
                response.trim().length === 0
              }
              onClick={saveFilter}
            >
              Save Filter
            </ButtonBordered>
            <ButtonBordered
              className="border-red-500 hover:bg-red-500 hover:text-white text-red-500"
              onClick={closeModal}
            >
              Cancel
            </ButtonBordered>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
