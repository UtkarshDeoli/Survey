import AllQuestions from "@/components/questions/AllQuestions";
import QuestionHeader from "@/components/questions/QuestionHeader";
import SurveyForm from "@/components/questions/SurveyForm";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

function Page() {
  return (
    <main className="w-full">
      <QuestionHeader />
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


