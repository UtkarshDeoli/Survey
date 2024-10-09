"use client"

import AllQuestions from "@/components/questions/AllQuestions";
import QuestionHeader from "@/components/questions/QuestionHeader";
import SurveyForm from "@/components/questions/SurveyForm";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";

function Page() {
  const params = useSearchParams()
  const id = params.get("id");
  const surveyName = params.get("name");
  const created_by = params.get("created_by");
  const [excelData, setExcelData] = useState<any[]>([]);
  console.log(excelData)

  return (
    <main className="w-full">
      <QuestionHeader id={id || ""} created_by={created_by || ""} name="Questionnaire" surveyName={surveyName || ""}/>
      <div className="flex bg-secondary-600">
        <AllQuestions />
        <SurveyForm />
        <Toaster />
      </div>
    </main>
  );
}

const SuspendedQuestionPage = () =>(
  <Suspense>
      <Page/>    
  </Suspense>
);

export default SuspendedQuestionPage;


