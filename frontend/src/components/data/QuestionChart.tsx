import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import QuestionChartHeader from "./QuestionChartHeader";

function QuestionDataCard({ question }: any) {
  const data = [
    { name: "Male", value: 20 },
    { name: "Female", value: 15 },
  ];
  return (
    <div className="bg-white p-5 items-center mb-5 rounded-lg h-80">
      <QuestionChartHeader question={question} />
      <ResponsiveContainer width="80%" height="70%" style={{ margin: "auto" }}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid />
          <Tooltip />
          <Bar dataKey="value" fill="#477bff" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default QuestionDataCard;
