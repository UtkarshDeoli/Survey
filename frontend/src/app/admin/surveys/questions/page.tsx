"use client"

import AllQuestions from "@/components/questions/AllQuestions";
import QuestionHeader from "@/components/questions/QuestionHeader";
import SurveyForm from "@/components/questions/SurveyForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

function Page() {
  const params = useSearchParams()
  const id = params.get("id");
  const created_by = params.get("created_by");

  return (
    <main className="w-full">
      <QuestionHeader id={id || ""} created_by={created_by || ""} name="Questionnaire" />
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


