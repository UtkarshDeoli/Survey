"use client";

import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface VRMChartProps {
  title: string;
  barChartData: {
    daily: ChartData<any> | null | undefined;
    weekly: ChartData<any> | null | undefined;
    monthly: ChartData<any> | null | undefined;
  };
}

const VRMChart: React.FC<VRMChartProps> = ({ barChartData, title }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"daily" | "weekly" | "monthly">("daily");
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  // Define the primary color for the bars
  const primaryColor = "#f7a572";

  // Chart.js options
  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false, // Ensures chart fills the parent container
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: `${title} (${selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)})`,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Ensure the data exists before processing
  const selectedData = barChartData[selectedTimeframe];
  const updatedBarChartData = selectedData
    ? {
        ...selectedData,
        datasets: selectedData.datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: primaryColor, // Apply primary color to bar background
          borderColor: primaryColor, // Apply primary color to bar border
          borderWidth: 1, // Optional: set border width
        })),
      }
    : null;

  return (
    <div className="w-full h-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex gap-5 mb-4">
        {/* Chart Type Selector */}
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value as "bar" | "line")}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
        </select>

        {/* Timeframe Selector */}
        <select
          value={selectedTimeframe}
          onChange={(e) =>
            setSelectedTimeframe(e.target.value as "daily" | "weekly" | "monthly")
          }
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Chart Display */}
      <div className="relative w-full h-[400px]"> {/* Ensures height is fixed */}
        {updatedBarChartData ? (
          chartType === "bar" ? (
            <Bar data={updatedBarChartData} options={options} />
          ) : selectedData &&  (
            <Line data={selectedData} options={options} />
          )
        ) : (
          <p>No data available for the selected timeframe.</p> // Fallback message if data is null/undefined
        )}
      </div>
    </div>
  );
};

export default VRMChart;
