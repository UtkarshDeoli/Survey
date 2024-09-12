import AllQuestions from "@/components/questions/AllQuestions"
import QuestionHeader from "@/components/questions/QuestionHeader"
import SurveyForm from "@/components/questions/SurveyForm"

function page() {
  return (
    <main className="w-full">
      <QuestionHeader/>
      <div className="flex bg-secondary-600">
        <AllQuestions/>
        <SurveyForm/>
      </div>
    </main>
  )
}

export default page