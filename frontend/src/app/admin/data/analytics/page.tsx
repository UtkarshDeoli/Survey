"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import FilledGreyButton from "@/components/ui/buttons/FilledGreyButton";
import TwoDatePicker from "@/components/ui/date/TwoDatePicker";
import { getSurvey } from "@/networks/survey_networks";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import QuestionChart from "@/components/data/QuestionChart";

function Page() {
  const searchParams = useSearchParams();
  const surveyID = searchParams.get("survey_id");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [surveyQuestionsData, setSurveyQuestionsData] = useState<any>([]);

  useEffect(() => {
    fetchSurveyData();
  }, []);

  async function fetchSurveyData() {
    console.log("fetching survey data for id", surveyID);
    const response = await getSurvey({ _id: surveyID });
    setSurveyQuestionsData(response.data.questions);
    console.log("Surveydata:", response.data.questions);
  }

  return (
    <div className="w-full bg-my-gray-100 font-medium ">
      <nav className="h-16 bg-white w-full py-3 px-8 flex justify-between font-semibold ">
        <div className="text-my-gray-200 items-center my-auto">
          <p className="text-sm ">Analytics: Test 3</p>
        </div>
        <div className="flex space-x-2 text-black text-base font-semibold ">
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
        {surveyQuestionsData.map((questionData: any, index: number) => {
          return (
            <QuestionChart
              key={index}
              question={questionData.parameters.question}
            />
          );
        })}
      </div>
    </div>
  );
}



const SuspendedCreateSurveyPage= () =>(
  <Suspense>
      <Page/>    
  </Suspense>
);

export default SuspendedCreateSurveyPage;
