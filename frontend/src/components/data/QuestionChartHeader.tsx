import { FaRegEdit } from "react-icons/fa";
import ButtonFilled from "../ui/buttons/ButtonFilled";

function QuestionChartHeader({ question, onChartTypeChange }: any) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center gap-2">
        <FaRegEdit className="cursor-pointer" />
        {question}
      </div>
      <div className="flex space-x-5">
        <div className="space-x-1">
          <label className="text-secondary-300">Chart Type:</label>
          <select
            className="border border-secondary-200 rounded-md p-2 col-span-8 bg-white"
            id="chartType"
            onChange={(e) => onChartTypeChange(e.target.value)}
          >
            <option value="column">Column</option>
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
            <option value="line">Line</option>
          </select>
        </div>
        <ButtonFilled className="px-4 py-2">Pin to Dashboard</ButtonFilled>
        <div className="space-x-1">
          <label className="text-secondary-300">Exclude in PDF:</label>
          <select
            className="border border-secondary-200 rounded-md p-2 col-span-8 bg-white"
            id="excludeInPDF"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <ButtonFilled className="px-4 py-2">Export</ButtonFilled>
          <ButtonFilled className="px-2 py-2">⌄</ButtonFilled>
        </div>
      </div>
    </div>
  );
}

export default QuestionChartHeader;
