import { useState } from "react";
import QuestionChartHeader from "./QuestionChartHeader";
import ResponseChart from "./ResponseChart";

interface Props {
  questionTitle: string;
  responses: {
    response_value: string;
    count: number;
  }[];
  totalResponses: number;
}

function QuestionDataCard({ questionTitle, responses, totalResponses }: Props) {
  const [chartType, setChartType] = useState<"column" | "line" | "bar" | "pie">(
    "column",
  );
  return (
    <div className="flex flex-col w-full h-full bg-white p-5 mb-5 rounded-lg gap-4">
      <QuestionChartHeader
        question={questionTitle}
        onChartTypeChange={setChartType}
      />
      <div className="flex justify-center ">
        <ResponseChart responses={responses} chartType={chartType} />
      </div>

      <table className="bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b text-center">Responses</th>
            <th className="py-2 px-4 border-b text-center">Percent</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((row, index) => {
            const percentage = ((row.count * 100) / totalResponses).toFixed(2);
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b">{row.response_value}</td>
                <td className="py-2 px-4 border-b text-center">{row.count}</td>
                <td className="py-2 px-4 border-b text-center">
                  {percentage}%
                </td>
              </tr>
            );
          })}
          <tr className="font-bold">
            <td className="py-2 px-4 border-b">Total</td>
            <td className="py-2 px-4 border-b text-center">{totalResponses}</td>
            <td className="py-2 px-4 border-b text-center">100.00%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default QuestionDataCard;
