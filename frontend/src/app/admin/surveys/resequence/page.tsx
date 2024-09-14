"use client";

import QuestionHeader from "@/components/questions/QuestionHeader";
import { getSurvey, updateSurvey } from "@/networks/survey_networks";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { VscThreeBars } from "react-icons/vsc";

function Page() {
  const [surveyQuestions, setSurveyQuestions] = useState<any[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const params = useSearchParams();
  const id = params.get("id");
  const created_by = params.get("created_by");

  console.log(surveyQuestions)

  useEffect(() => {
    handleGetSurveyData();
  }, []);

  async function handleGetSurveyData() {
    const queryParams = { _id: id };
    const response = await getSurvey(queryParams);
    if (response.success) {
      setSurveyQuestions(response.data[0].questions);
    } else {
      toast.error("Something went wrong while fetching survey data");
    }
  }

  // Handle drag start
  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    if (draggingIndex === null) return;

    // Reorder questions
    const reorderedQuestions = [...surveyQuestions];
    const [draggedItem] = reorderedQuestions.splice(draggingIndex, 1); // Remove dragged item
    reorderedQuestions.splice(index, 0, draggedItem); // Insert at new position

    // Update question_id to reflect new index
    const updatedQuestions = reorderedQuestions.map((question, idx) => ({
      ...question,
      question_id: idx, 
    }));

    setSurveyQuestions(updatedQuestions);
    setDraggingIndex(null);
  };

  // Handle Save
  const handleSave = async () => {
    const formData = { _id: id, created_by, questions: surveyQuestions };
    const params ={_id:id,formData}
    const response = await updateSurvey(params);
    if (response.success) {
      toast.success("Questions resequenced successfully!");
    } else {
      toast.error("Failed to resequence questions.");
    }
  };

  return (
    <main className="relative h-full flex flex-col">
      {/* Display Question Header */}
      <QuestionHeader id={id || ""} created_by={created_by || ""} name="Resequence" />

      {/* Display Survey Questions with drag-and-drop reordering */}
      <div className="mt-4 flex-grow">
        {surveyQuestions && surveyQuestions.length > 0 ? (
          <ul className=" p-5">
            {surveyQuestions.map((question: any, index: number) => (
              <li
                key={question.question_id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className="border p-4 mb-2 border-secondary-200 text-secondary-300 cursor-move flex items-center gap-2"
              >
                <VscThreeBars />
                <div>Question: {question.parameters.question || "Untitled Question"}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="w-full h-[40vh] flex justify-center items-center">No questions available.</p>
        )}
      </div>

      <div className="w-full bg-white p-4 border-t border-gray-200 flex justify-end sticky bottom-0 z-10">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </main>
  );
}

const SuspendedCreateSurveyPage= () =>(
  <Suspense>
      <Page/>    
  </Suspense>
);

export default SuspendedCreateSurveyPage;
