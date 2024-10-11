import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
);

interface ResponseChartProps {
  responses: {
    response_value: string;
    count: number;
  }[];
  chartType: "column" | "bar" | "pie" | "line";
}

function ResponseChart({ responses, chartType }: ResponseChartProps) {
  console.log(chartType);
  const labels = responses.map((item) => item.response_value);
  const dataValues = responses.map((item) => item.count);
  const backgroundColors = [
    "#EF9595",
    "#EFB495",
    "#EFD595",
    "#EBEF95",
    "#A5DD9B",
    "#BB9AB1",
    "#EECEB9",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: chartType === "line" ? "#EF9595" : "",
        borderWidth: chartType === "line" ? 2 : 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: chartType === "pie",
      },
    },
    scales: {
      x: {
        display: chartType !== "pie",
        ticks: {
          autoSkip: false,
          maxRotation: 0, // This makes the labels horizontal
          minRotation: 0, // This makes the labels horizontal
        },
      },
      y: {
        display: chartType !== "pie",
        beginAtZero: true,
      },
    },
    barThickness: 40,
  };

  function renderChart() {
    if (chartType === "bar") {
      return <Bar data={data} options={{ ...options, indexAxis: "x" }} />;
    } else if (chartType === "column") {
      return <Bar data={data} options={{ ...options, indexAxis: "y" }} />;
    } else if (chartType === "pie") {
      return <Pie data={data} options={options} />;
    } else if (chartType === "line") {
      return <Line data={data} options={options} />;
    }
  }

  return <div className="h-[30vh] w-[70vw]">{renderChart()}</div>;
}

export default ResponseChart;
