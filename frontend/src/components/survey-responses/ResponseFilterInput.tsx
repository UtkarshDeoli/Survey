"use client";

import React, { useState } from "react";
interface props {
  surveyQuestions: any;
  question: any;
  setResponse: (arg: any) => void;
  response: string;
  questionType: string;
  operator: string;
}
function ResponseFilterInput({
  question,
  surveyQuestions,
  setResponse,
  operator,
  questionType,
  response,
}: props) {
  const [extraInput, setExtraInput] = useState<string | null>(null);
  const questions = surveyQuestions?.find(
    (q: any) => Number(question) === Number(q.question_id)
  );
  let qType;
  if (questions) {
    qType = questions.type;
  }
  console.log("qtype from response input --->", qType);

  function handleExtraInput(e:any){
    setExtraInput(e.target.value);
    setResponse(`${response} :${extraInput}`);
  }

  if (qType && ["Radio Grid","Number Grid"].includes(qType)) {
    const row = questions.parameters.row_options.split("\n");
    const column = questions.parameters.column_options.split("\n");
    const result = row.flatMap((row: string) =>
      column.map((col: string) => {
        if(qType === "Radio Grid") return `${row}: ${col}`
        else if(qType === "Number Grid") return `${row} ( ${col} )`
        else return `${row}: ${col}`
      })
    );
    console.log("result from radio grid --->", result);
    return (
      <div className="flex gap-4">
        <select
          onChange={(e) => setResponse(e.target.value)}
          className="flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full disabled:cursor-not-allowed"
        >
          <option value="">select</option>
          {result.map((item: string, index: number) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {qType === "Number Grid" && (
          <input
            disabled={
              questionType.trim().length === 0 || operator.trim().length === 0 || response.trim().length === 0
            }
            onChange={handleExtraInput}
            value={extraInput || ""}
            className="flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full disabled:cursor-not-allowed"
            type={
              surveyQuestions?.find(
                (q: any) => Number(question) === Number(q.question_id)
              )?.type === "Date"
                ? "date"
                : "text"
            }
            placeholder="Enter response"
          />
        )}
      </div>
    );
  }

  return (
    <input
      disabled={
        questionType.trim().length === 0 || operator.trim().length === 0
      }
      onChange={(e) => setResponse(e.target.value)}
      value={response}
      className="flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full disabled:cursor-not-allowed"
      type={
        surveyQuestions?.find(
          (q: any) => Number(question) === Number(q.question_id)
        )?.type === "Date"
          ? "date"
          : "text"
      }
      placeholder="Enter response"
    />
  );
}

export default ResponseFilterInput;
