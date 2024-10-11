"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import TwoDatePicker from "@/components/ui/date/TwoDatePicker";
import { getSurvey, getSurveyResponseStats } from "@/networks/survey_networks";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import QuestionChart from "@/components/data/QuestionChart";

interface QuestionResponseData {
  questionTitle: string;
  responses: {
    responseTitle: string;
    count: number;
  }[];
  totalResponses: number;
}

function Page() {
  const [responseStats,setResponseStats] = useState <any[]>([]);
  const searchParams = useSearchParams();
  const surveyID = searchParams.get("survey_id");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const surveyResponseData = {
    survey_id: surveyID,
    survey_name: "My Survey",
    questions: [
      {
        questionTitle: "This is Question 1",
        responses: [
          {
            responseTitle: "Response 1",
            count: 10,
          },
          {
            responseTitle: "Response 2",
            count: 15,
          },
          {
            responseTitle: "Response 3",
            count: 17,
          },
        ],
        totalResponses: 42,
      },
      {
        questionTitle: "This is Question 2",
        responses: [
          {
            responseTitle: "RQ 12",
            count: 200,
          },
          {
            responseTitle: "RQ 22",
            count: 75,
          },
          {
            responseTitle: "RQ 32",
            count: 55,
          },
          {
            responseTitle: "RQ 42",
            count: 180,
          },
        ],
        totalResponses: 510,
      },

      {
        questionTitle: "This is Question 3",
        responses: [
          {
            responseTitle: "RQ 13",
            count: 200,
          },
          {
            responseTitle: "RQ 23",
            count: 100,
          },
        ],
        totalResponses: 300,
      },
    ],
  };

  //const [surveyResponseData, setSurveyResponseData] = useState<any>([]);

  useEffect(() => {
    fetchSurveyData();
  }, []);

  async function fetchSurveyData() {
    const response = await getSurveyResponseStats({ survey_id: surveyID });
    console.log("response is---->",response.data);
    if(response.success){
      setResponseStats(response.data)
    }
    
  }

  return (
    <div className="w-full bg-[#ECF0FA]  font-medium ">
      <nav className="h-16 w-full py-3 px-8 flex justify-between font-semibold ">
        <div className="text-my-gray-200 items-center my-auto">
          <p className="text-sm ">
            Analytics: {surveyResponseData.survey_name}
          </p>
        </div>
        <div className="flex space-x-2 text-black text-base">
          <FilledGreyButton className="px-4 py-2">Response</FilledGreyButton>
          <ButtonFilled className="px-4 py-2">Analytics</ButtonFilled>
          <FilledGreyButton className="px-4 py-2">
            Daily Report
          </FilledGreyButton>
          <FilledGreyButton className="px-4 py-2">
            Summary Report
          </FilledGreyButton>
          <FilledGreyButton className="px-4 py-2">
            Spatial Report
          </FilledGreyButton>
          <FilledGreyButton className="px-4 py-2">
            Scoring Report
          </FilledGreyButton>
        </div>
      </nav>

      <div className="p-5 font-semibold text-sm text-my-gray-200">
        <div className="bg-white rounded-lg flex justify-between items-center px-4">
          <div className="p-2 h-16 flex items-center rounded-lg">
            <TwoDatePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="flex space-x-2 items-center text-xs">
            <ButtonBordered className="p-2 h-[50px] py-1 ">
              Filters
            </ButtonBordered>
            <ButtonBordered className="p-2 h-[50px] py-1 ">
              Chat Visibility
            </ButtonBordered>
            <ButtonFilled className="p-2 h-[50px] py-1 ">
              Export All
            </ButtonFilled>
            <ButtonFilled className="p-2 h-[50px]  pt-1 ">⌄</ButtonFilled>
          </div>
        </div>
      </div>

      <div className="p-5 text-sm text-my-gray-200">
        {responseStats && responseStats.length > 0 && responseStats.map(
          (responseData:any, index: number) => {
            return (
              <QuestionChart
                key={index}
                questionTitle={responseData.question}
                responses={responseData.responses}
                totalResponses={responseData.total_responses}
              />
            );
          },
        )}
      </div>
    </div>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
