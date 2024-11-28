"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import TwoDatePicker from "@/components/ui/date/TwoDatePicker";
import { Suspense, useEffect, useState } from "react";
import { getSurveyResponses } from "@/networks/response_networks";
import { useSearchParams } from "next/navigation";
import {
  getAllUsers,
  getPannaPramukh,
  updateKaryakartas,
} from "@/networks/user_networks";

import { useRouter } from "next/navigation"; // For routing
import toast from "react-hot-toast";
import Loader from "@/components/ui/Loader";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Select from "react-select";
import { getSurvey } from "@/networks/survey_networks";
import * as XLSX from "xlsx";
import Filters from "@/components/survey-responses/Filters";
import DataFilterModal from "@/components/survey-responses/DataFilterModal";
import ResponseModal from "@/components/survey-responses/ResponseModal";
import AssignPannaPramukhModal from "@/components/survey-responses/AssignPannaPramukhModal";
import MapModal from "@/components/survey-responses/MapModal";
import ResponseTable from "@/components/survey-responses/ResponseTable";
import Image from "next/image";
import survey_analytics_calender from "/public/images/calendar_new.png";

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
  const [assignMode, setAssignMode] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [userSearch, setUserSearch] = useState<string | null>(null);
  const [pannaPramukh, setPannaPramukh] = useState<any>(null);
  const [selectedPanna, setSelectedPanna] = useState<string | null>(null);
  const [surveyQuestions, setSurveyQuestions] = useState<any>(null);
  //response selection states
  const [startIndex, setStartIndex] = useState<number | null>(null);
  const [endIndex, setEndIndex] = useState<number | null>(null);
  const [selectedResponses, setSelectedResponses] = useState<string[]>([]);
  const [dataToExport, setDataToExport] = useState<any>(null);

  //  infinite scroll
  const [totalResponsePages, setTotalResponsePages] = useState<number>(1);

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
    getQuestions();
    getUserResponses();
    getUsers();
  }, [reset]);

  useEffect(() => {
    handleGetPannaPramukh();
  }, [userSearch]);

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
    };
    setLoading(true);
    const response = await getSurveyResponses(params);
    setResponses(response.data);
    setTotalResponsePages(response.totalPages);
    console.log("responses of responses ------>", response.data);
    if (response.data && response.data.length > 0) {
      setQuestions(
        response.data[0].responses.map((res: any) => ({
          question: res.question,
          question_id: res.question_id,
        }))
      );
      const d = response.data.map((res: any) => {
        const a = res.responses.map((r: any) => {
          return { [r.question]: r.response };
        });
        return a;
      });
      setDataToExport(d.flat());
    }
    setLoading(false);
  }

  async function getQuestions() {
    const response = await getSurvey({ _id: surveyId });
    const questions = response.data.questions.map((el: any) => el);
    setSurveyQuestions(questions);
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
        setEndIndex(null);
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

  async function updatePannaPramukhs() {
    const response = await updateKaryakartas({
      id: selectedPanna,
      responses: selectedResponses,
      surveyId,
    });
    if (response.success) {
      toast.success("Data assigned successfully");
      setAssignMode(false);
      setSelectedResponses([]);
      setSelectedPanna(null);
      getUserResponses();
    } else {
      toast.error("Error assigning data");
    }
  }

  async function getUsers() {
    setLoading(true);
    const response = await getAllUsers({});
    console.log("users-------->", response.data);
    setUsers(response.data);
    setLoading(false);
  }
  async function handleGetPannaPramukh() {
    setLoading(true);
    const response = await getPannaPramukh({
      ac_no,
      booth_no,
      filter: userSearch,
    });
    console.log("panna below-------->", response);
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

  // Function to handle export
  const exportToExcel = () => {
    // Convert the data to a worksheet
    if (dataToExport) {
      const ws = XLSX.utils.json_to_sheet(dataToExport);
      console.log("sheet-------------------------------", ws);
      // Create a new workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      // Write the workbook to a binary string and trigger a download
      XLSX.writeFile(wb, "user_data.xlsx");
    } else {
      toast.error("no data to export");
    }
  };

  const options = users?.map((user) => ({
    value: user._id,
    label: user.name,
  }));

  return (
    <div className="w-full font-medium bg-light-gray">
      <nav className="w-full py-3 px-8 flex flex-col gap-10 font-semibold">
        <h3 className="text-[24px] font-semibold">Survey Response</h3>

        <div className="flex w-full gap-12">
          <Filters
            appliedFilters={appliedFilters}
            filters={filters}
            responses={responses}
            selectedFilter={selectedFilter}
            setAppliedFilters={setAppliedFilters}
            setSelectedFilter={setSelectedFilter}
            surveyQuestions={surveyQuestions}
          />
          <div className="flex space-x-2 text-black text-base font-semibold">
            <ButtonFilled
              onClick={exportToExcel}
              className="rounded-[20px] h-fit px-4 py-2"
            >
              Export to Excel
            </ButtonFilled>
            <ButtonFilled className="rounded-[20px] px-4 h-fit py-2">
              Export to CSV
            </ButtonFilled>
            <ButtonFilled className="rounded-[20px] px-4 h-fit py-2">
              Configure Fields
            </ButtonFilled>
            <FilledGreyButton
              onClick={() => router.back()}
              className="rounded-[20px] h-fit px-4 py-2"
            >
              Back
            </FilledGreyButton>
          </div>
        </div>
      </nav>

      <div className="p-5 font-semibold text-sm ">
        <div className="bg-light-gray space-y-4 rounded-lg px-4 py-6">
          <div className="w-[780px] space-y-8 pb-6 ">
            <div className="flex gap-10">
              {/* Date Range */}
              <div>
                <div className="flex gap-3 items-center mb-5">
                  <h1 className="">Date Range</h1>
                  <Image
                    src={survey_analytics_calender.src}
                    alt="calender"
                    height={18}
                    width={18}
                  />
                </div>
                <div className="w-fit">
                  <TwoDatePicker
                    className="w-[352px] h-10"
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                </div>
              </div>

              <ButtonFilled
                className=" flex justify-center items-center h-fit self-end"
                onClick={openModal}
              >
                Data filter +
              </ButtonFilled>
            </div>

            <div className="flex gap-5 items-center">
              {/* Selected User */}
              <div className="flex flex-col space-y-2 w-[352px]">
                <Select
                  value={options.find((option) => option.value === userId)}
                  onChange={(selectedOption) =>
                    setUserId(selectedOption?.value || "")
                  }
                  options={options}
                  placeholder="Select user"
                  classNamePrefix="react-select"
                  isSearchable={true} // Enables search
                />
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
                  className="bg-dark-gray text-white"
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
                  className="disabled:cursor-not-allowed disabled:bg-primary-100 disabled:text-secondary-100"
                >
                  Apply
                </ButtonFilled>
              </div>
            </div>

            <div>
              <ButtonFilled onClick={() => setUserModal(true)}>
                Assign Data
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <Loader className="h-[30vh] w-full flex justify-center items-center" />
      )}
      {!loading && responses && responses.length > 0 ? (
        <ResponseTable
          handleMemberClick={handleMemberClick}
          more={more}
          responses={responses}
          selectedResponses={selectedResponses}
          setMapModalIsOpen={setMapModalIsOpen}
          setMore={setMore}
          setResponseModalIsOpen={setResponseModalIsOpen}
          setSelectedResponse={setSelectedResponse}
          updatePannaPramukhs={updatePannaPramukhs}
          users={users}
          assignMode={assignMode}
        />
      ) : (
        !loading && (
          <div className="flex w-full justify-center items-center h-[30vh]">
            <p>No responses found</p>
          </div>
        )
      )}

      {/* Custom Modal for Data Filter */}
      <DataFilterModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        surveyQuestions={surveyQuestions}
        question={question}
        questionType={questionType}
        operator={operator}
        response={response}
        setQuestionType={setQuestionType}
        setQuestion={setQuestion}
        setOperator={setOperator}
        setResponse={setResponse}
        saveFilter={saveFilter}
      />

      {/* modal for response */}
      <ResponseModal
        responseModalIsOpen={responseModalIsOpen}
        selectedResponse={selectedResponse}
        setResponseModalIsOpen={setResponseModalIsOpen}
        users={users}
      />

      {/* map modal */}
      <MapModal
        isLoaded={isLoaded}
        mapModalIsOpen={mapModalIsOpen}
        setMapModalIsOpen={setMapModalIsOpen}
      />

      {/* Modal for assigning panna pramukh */}
      <AssignPannaPramukhModal
        assignMode={assignMode}
        pannaPramukh={pannaPramukh}
        selectedPanna={selectedPanna}
        setAssignMode={setAssignMode}
        setSelectedPanna={setSelectedPanna}
        setUserModal={setUserModal}
        setUserSearch={setUserSearch}
        userModal={userModal}
        userSearch={userSearch || ""}
      />
    </div>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
