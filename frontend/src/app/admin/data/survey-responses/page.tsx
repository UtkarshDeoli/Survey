"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import TwoDatePicker from "@/components/ui/date/TwoDatePicker";
import { Suspense, useCallback, useEffect, useState } from "react";
import { getSurveyResponses } from "@/networks/response_networks";
import { useSearchParams } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { getAllKaryakarta, getAllUsers, getPannaPramukh, updateKaryakartas } from "@/networks/user_networks";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import { useRouter } from "next/navigation"; // For routing
import CustomModal from "@/components/ui/Modal";
import toast from "react-hot-toast";
import { formatDate, truncateText } from "@/utils/common_functions";
import Loader from "@/components/ui/Loader";
import { FaLocationDot } from "react-icons/fa6";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { RxCross2 } from "react-icons/rx";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [responseModalIsOpen, setResponseModalIsOpen] = useState(false);
  const [questionType, setQuestionType] = useState<string>("");
  const [filters, setFilters] = useState<
    { question: string; operator: string; response: string }[]
  >([]);
  const [userId, setUserId] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [appliedFilters, setAppliedFilters] = useState<
    { question: string; operator: string; response: string }[]
  >([]);
  const [responses, setResponses] = useState<any[]>([]);
  const [reset, setReset] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [more, setMore] = useState<string | null>(null);
  const [selectedResponse, setSelectedResponse] = useState<any>(null);
  const [mapModalIsOpen, setMapModalIsOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<any[] | null>(null);
  const [gmap, setGmap] = useState(null);
  const [assignMode,setAssignMode] = useState<boolean>(false);
  const [userModal,setUserModal] = useState<boolean>(false);
  const [userSearch,setUserSearch] = useState<string|null>(null);
  const [pannaPramukh,setPannaPramukh] = useState<any>(null);
  const [selectedPanna,setSelectedPanna] = useState<string[]|null>(null);
   //response selection states
   const [startIndex,setStartIndex] = useState<number|null>(null)
   const [endIndex,setEndIndex] = useState<number|null>(null)
   const [selectedResponses,setSelectedResponses] = useState<string[]>([])

  //  infinite scroll
   const [responsePage, setResponsePage] = useState<number>(1);
   const [totalResponsePages,setTotalResponsePages] = useState<number>(1)

  console.log("selected Responses ------>",selectedResponses)
  console.log("applied filters------>",appliedFilters)

  const searchParams = useSearchParams();
  const surveyId = searchParams.get("survey_id");
  const ac_no = searchParams.get("ac_no");
  const booth_no = searchParams.get("booth_no");
  const router = useRouter();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAAOwDBvpg5ZDv5JFG-CoDW23GsKkOPeuA",
  });

  useEffect(() => {
    getUserResponses();
    getUsers();
  }, [reset]);

  useEffect(()=>{
    handleGetPannaPramukh();
  },[userSearch])

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
      filters: appliedFilters,
      page: responsePage,
      limit: 5
    };
    setLoading(true);
    const response = await getSurveyResponses(params);
    setResponses(response.data);
    setTotalResponsePages(response.totalPages);
    console.log("responses ------>",response.data)
    if (response.data && response.data.length > 0) {
      setQuestions(
        response.data[0].responses.map((res: any) => ({
          question: res.question,
          question_id: res.question_id,
        }))
      );
    }
    setLoading(false);
  }
  async function getMoreUserResponses() {
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
      filters: appliedFilters,
      page: responsePage+1,
      limit: 5
    };
    setLoading(true);
    const response = await getSurveyResponses(params);
    setResponses((prev)=>[...prev,response.data]);
    console.log("responses ------>",response.data)
    setResponsePage(prev=>prev+1)
    if (response.data && response.data.length > 0) {
      const questions = response.data[0].responses.map((res: any) => ({
        question: res.question,
        question_id: res.question_id,
      }))
      setQuestions((prev)=>prev ? [...prev, ...questions] : [])
    }
    setLoading(false);
  }

  // selection logic

  function handleMemberClick(responseId: string, index: number) {
    // If no start index is set, set the current index as the start index
    if (startIndex === null) {
      setStartIndex(index);
      setSelectedResponses([responseId]);
    } else {
      // If the clicked index is the same as the start index, reset all states
      if (index === startIndex) {
        setStartIndex(null);
        setEndIndex(null);
        setSelectedResponses([]);
        return; // Early return since we've reset everything
      }
  
      // If clicking before the start index, update the start index to the current index
      if (index < startIndex) {
        setStartIndex(index);
        setEndIndex(null)
        setSelectedResponses([responseId]);
        return; // Early return after resetting states
      }
  
      // Handle the case where the index is greater than the start index
      if (index > startIndex) {
        // Set the end index
        setEndIndex(index);
  
        // Calculate the range of selections
        const range = Math.abs(index - startIndex) + 1;
  
        // Check if the selected range exceeds the maximum allowed
        if (range > 60) {
          toast.error("Maximum of 60 responses are allowed");
          return;
        }
  
        // Create an array to hold selected responses
        const selected: string[] = [];
        for (let i = startIndex; i <= index; i++) {
          selected.push(responses[i]._id); // Use `_id` from the `responses` array
        }
  
        // Update selected responses state
        setSelectedResponses(selected);
      }
  
      // Handle case where a user clicks on an index lower than the current end index
      if (endIndex !== null && index < endIndex) {
        setEndIndex(index);
  
        // Create a new selected array up to the new end index
        const selected: string[] = [];
        for (let i = startIndex; i <= index; i++) {
          selected.push(responses[i]._id);
        }
  
        // Update selected responses state
        setSelectedResponses(selected);
      }
    }
  }

  async function updatePannaPramukhs(){
    const response = await updateKaryakartas({ids:selectedPanna,responses:selectedResponses,surveyId})
    if(response.success){
      toast.success("Data assigned successfully")
      setAssignMode(false);
      setSelectedResponses([])
      setSelectedPanna(null);
    }else{
      toast.error("Error assigning data")
    }
  }

  async function getUsers() {
    setLoading(true);
    const response = await getAllUsers({});
    console.log("users-------->",response.data);
    setUsers(response.data);
    setLoading(false);
  }
  async function handleGetPannaPramukh() {
    setLoading(true);
    const response = await getPannaPramukh({ac_no,booth_no,filter:userSearch});
    console.log("panna below-------->",response);
    setPannaPramukh(response);
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
      ["Radio Button", "DropDown", "DropDown With Other"].includes(questionType)
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
          <p className="text-sm">Survey Response</p>
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
          <FilledGreyButton
            onClick={() => router.back()}
            className="rounded-lg px-4 py-2"
          >
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
                onChange={(e) => {
                  const filt = JSON.parse(e.target.value);
                  const obj = appliedFilters.find(
                    (el) =>
                      el.question === filt.question &&
                      el.operator === filt.operator &&
                      el.response === filt.response
                  );
                  if (obj) return;
                  else
                    setAppliedFilters((prev) => [
                      ...prev,
                      JSON.parse(e.target.value),
                    ]);
                }}
                value={selectedFilter}
                name="filters"
                id="filters"
                className="border w-full shadow-lg rounded-lg px-4 py-2"
              >
                <option value="" disabled selected>
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
            <div className="flex flex-col gap-2">
              {appliedFilters.map((el) => {
                const questionResponse = responses[0]?.responses.find(
                  (res: any) =>
                    Number(res.question_id) === Number(el.question)
                );
                let questionText
                if (questionResponse) {
                  questionText = questionResponse.question;
                }
                return (
                  <div className="flex justify-between w-full border border-secondary-200 rounded-sm px-4 py-2">
                    <h2>{`${questionText} ${el.operator} ${el.response}`}</h2>
                    <button
                      onClick={() =>
                        setAppliedFilters((prev) =>
                          prev.filter(
                            (fil) =>
                              !(fil.question === el.question && fil.operator === el.operator && fil.response === el.response)
                          )
                        )
                      }
                    >
                     <RxCross2 />

                    </button>
                  </div>
                );
              })}
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
                  {users &&
                    users.length > 0 &&
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
                  setAppliedFilters([]);
                  setReset(!reset);
                }}
                className="rounded-lg border-my-gray-200 bg-white px-4 py-2"
              >
                Reset
              </FilledGreyButton>
              <ButtonFilled
                disabled={
                  appliedFilters.length === 0 &&
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

            <div>
              <ButtonFilled onClick={()=>setUserModal(true)}>Assign Data</ButtonFilled>
            </div>

          </div>
        </div>
      </div>
      {loading && (
        <Loader className="h-[30vh] w-full flex justify-center items-center" />
      )}
      {!loading && responses && responses.length > 0 ? (
        <div id="scrollableDiv" className="w-[1250px] overflow-scroll rounded-t-2xl border border-secondary-200 mx-4">
          
          <table className="w-full table-auto">
            <thead className="">
              <tr className="bg-secondary-100">
                <td className="min-w-24 px-4 py-2 border-b text-center"></td>
                <td className="min-w-24 px-4 py-2 border-b text-center"></td>
                <td className="text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center">
                  Response date
                </td>
                <td className="text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center">
                  User
                </td>
                {responses &&
                  responses.length > 0 &&
                  responses[0].responses.map((response: any, index: number) => (
                    <td
                      key={index}
                      className="gap-2 text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center"
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
            {/* <InfiniteScroll
              dataLength={responses.length}
              next={getMoreUserResponses}
              hasMore={responsePage <= totalResponsePages}
              loader={
                <Loader className="flex justify-center items-center w-full h-[20vh]" />
              }
              scrollableTarget="scrollableDiv"
              endMessage={
                <p className="flex justify-center items-center h-[10vh] ">
                  <b>Yay! You have seen it all</b>
                </p>
              }
            > */}
              {responses &&
                responses.map((response, rowIndex) => (
                  <tr
                    onClick={() => {
                      setSelectedResponse(response);
                      setResponseModalIsOpen(true);
                    }}
                    className="cursor-pointer"
                    key={rowIndex}
                  >
                    {assignMode && 
                      <td onClick ={(e)=>e.stopPropagation()} className="min-w-24 px-4 py-2 border-b text-center">
                        <input onChange={()=>handleMemberClick(response._id,rowIndex)} checked={selectedResponses.includes(response._id)} className="h-5 w-5" type="checkbox"/>
                      </td>

                    }
                    <td className="min-w-24 px-4 py-2 border-b text-center">
                      <ButtonFilled
                        onClick={(e) => {
                          e.stopPropagation();
                          setMapModalIsOpen(true);
                        }}
                      >
                        <FaLocationDot />
                      </ButtonFilled>
                    </td>
                    <td className="min-w-24 px-4 py-2 border-b text-center">
                      <FaEye />
                    </td>
                    <td className="min-w-24 px-4 py-2 border-b text-center">
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
                        {res.question_type === "Radio Grid" ? (
                          res.response.split('\n').slice(0, 2).map((line: string, index: number) => (
                            <p key={index}>{line}</p>
                          )).concat(res.response.split('\n').length > 2 ? <p key="ellipsis">...</p> : null)
                        ) : (
                          truncateText(res.response, 20) || "-"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              {/* </InfiniteScroll> */}
            </tbody>
          </table>
          {assignMode && <ButtonFilled className="mt-5" onClick={updatePannaPramukhs}>Assign</ButtonFilled>}
        </div>
      ) : (
        !loading && (
          <div className="flex w-full justify-center items-center h-[30vh]">
            <p>No responses found</p>
          </div>
        )
      )}

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

      {/* modal for response */}
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
                        {response.question_type==="Radio Grid" ?
                          response.response.split('\n').map((line: string, index: number) => (
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
      <CustomModal
        open={mapModalIsOpen}
        closeModal={() => setMapModalIsOpen(false)}
      >
        <div className="p-4 h-[60vh] flex justify-center items-center w-[50vw]">
          <div className="flex h-full w-full justify-center items-center flex-col gap-4">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{
                  width: "400px",
                  height: "400px",
                }}
                center={{
                  lat: -3.745,
                  lng: -38.523,
                }}
                zoom={10}
                onLoad={(map) => {
                  console.log("gmap--->", map);
                  const bounds = new window.google.maps.LatLngBounds();
                  map.fitBounds(bounds);
                }}
                onUnmount={(map) => {
                  // do your stuff before map is unmounted
                }}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </CustomModal>

      <CustomModal open={userModal} closeModal={()=>{
          setUserModal(false)
          setSelectedPanna(null)
        }}>
            <div className="relative flex flex-col h-[60vh] w-[30vw] p-4">
              <h1 className="self-center text-lg font-semibold mb-5">Assign to Panna Pramukh</h1>
                <input placeholder="Search by name" className="sticky top-5 left-0 px-4 py-2 border-2 outline-none rounded-md" value={userSearch||""} onChange={(e)=>setUserSearch(e.target.value)} type="text"/>
                <div className="grid mt-5 grid-cols-2 gap-3">
                  {
                    pannaPramukh && pannaPramukh.map((us:any)=>(
                      <label className="flex gap-5">
                        <input onChange={() =>
                            setSelectedPanna((prev) => {
                              const currentSelection = prev || []; // Fallback to empty array if prev is null
                              if (currentSelection.includes(us._id)) {
                                return currentSelection.filter((id) => id !== us._id);
                              } else {
                                return [...currentSelection, us._id];
                              }
                            })
                          } type="checkbox" className="h-5 w-5"/>
                        <p>{us.name}</p>
                      </label>
                    ))
                  }
                </div>
                <ButtonFilled onClick={()=>{
                  setAssignMode(true)
                  setUserModal(false)
                  }} className="mt-auto disabled:bg-blue-100 disabled:cursor-not-allowed" disabled={!selectedPanna || (selectedPanna && selectedPanna.length === 0)}>Proceed</ButtonFilled>
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
