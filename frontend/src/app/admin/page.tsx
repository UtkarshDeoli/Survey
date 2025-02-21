"use client";

import React, { useEffect, useState } from "react";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Colors,
} from "chart.js";
import { getDashboard } from "@/networks/dashboard_networks";
import Loader from "@/components/ui/Loader";
import { formatDate, truncateText } from "@/utils/common_functions";
import { useRouter } from "next/navigation";
import { TbChecklist } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";

ChartJS.register(Title, Tooltip, Legend, Colors, ArcElement);

const options: any = {
  maintainAspectRatio: false,
  responsive: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

const colors: any = {
  Open: "text-green-400",
  Rescheduled: "text-amber-500",
  Cancelled: "text-red-500",
  Completed: "text-blue-500",
};
function Page() {
  const [isClient, setIsClient] = useState(false);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [userData, setUserData] = useState<any>(null);
  const [karyakartaData, setKaryakartaData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    setLoading(true);
    const response = await getDashboard();
    console.log("response --->", response);
    if (response.success) {
      setDashboardData(response.data);
      if (response.data.userStats.length > 0) {
        const userStats = response.data.userStats.find(
          (user: any) => user._id === "user"
        );
        if (userStats) {
          const userRoles = userStats.roles.map((role: any) => role.role.name);
          const userRoleCounts = userStats.roles.map((role: any) => role.count);
          setUserData({
            labels: userRoles,
            datasets: [
              {
                label: "Users",
                data: userRoleCounts,
                borderColor: "",
                borderWidth: 0,
              },
            ],
          });
        }
        const karyakartaStats = response.data.userStats.find(
          (user: any) => user._id === "karyakarta"
        );
        if (karyakartaStats) {
          const karyakartaRoleCounts = karyakartaStats.roles.map(
            (role: any) => role.count
          );
          const karyakartaRoles = karyakartaStats.roles.map(
            (role: any) => role.role.name
          );

          setKaryakartaData({
            labels: karyakartaRoles,
            datasets: [
              {
                label: "Karyakartas",
                data: karyakartaRoleCounts,
                borderColor: "",
                borderWidth: 0,
              },
            ],
          });
        }
      }
    }

    setLoading(false);
  }

  if (!isClient) {
    return null; // Prevent SSR issues
  }

  return (
    <div className="rightContent p-5">
      {loading && <Loader />}
      {dashboardData && (
        <div className="flex flex-col gap-5">
          <div className="flex justify-around gap-5">
            <div className="flex flex-col justify-between py-2 gap-2 w-[30%]">
              <div
                onClick={() => router.push("/admin/surveys")}
                className="cursor-pointer flex justify-between items-center shadow-md rounded-[10px] px-5 py-7 w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(44, 120, 229), rgb(96, 175, 245))",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="icon h-[50px] w-[50px] rounded-md flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, #0000, #0000004d)",
                    }}
                  >
                    <TbChecklist size={40} className="text-white opacity-40" />
                  </div>
                  <div className="info">
                    <h2 className="text-[16px] font-bold text-white">
                      Total survey
                    </h2>

                    <h2 className="text-[25px] font-bold text-white">
                      {dashboardData.surveysCount}
                    </h2>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/admin/data")}
                className="cursor-pointer flex justify-between items-center shadow-md rounded-[10px] px-5 py-7 w-full "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(225, 149, 14), rgb(243, 205, 41))",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="icon h-[50px] w-[50px] rounded-md flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, #0000, #0000004d)",
                    }}
                  >
                    <GoChecklist size={40} className="text-white opacity-40" />
                  </div>
                  <div className="info">
                    <h2 className="text-[16px] font-bold text-white">
                      Total responses
                    </h2>

                    <h2 className="text-[25px] font-bold text-white">
                      {dashboardData.responseCount}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 w-[70%]">
              <div
                onClick={() => router.push("/admin/karyakarta")}
                className="cursor-pointer flex flex-col p-3 gap-4 shadow-md rounded-[10px] px-5 py-5 bg-white w-[50%]"
              >
                <h2 className="text-[16px] font-[600] ">
                  Number of karyakarta
                </h2>
                {karyakartaData && (
                  <Pie data={karyakartaData} options={options} />
                )}
              </div>
              <div
                onClick={() => router.push("/admin/users")}
                className="cursor-pointer flex flex-col p-3 gap-4 shadow-md rounded-[10px] px-5 py-5 bg-white  w-[50%]"
              >
                <h2 className="text-[16px] font-[600]">Number of Users</h2>
                {userData && <Pie data={userData} options={options} />}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[49%] rounded-[10px] flex flex-col gap-4 bg-white shadow-md p-5">
              <h3 className="text-[18px] font-[600]">Recent Tasks</h3>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Id
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Created at
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      {dashboardData.todos.length > 0 ? (
                        dashboardData.todos.map((todo: any) => (
                          <>
                            <td
                              className="px-6 py-4 font-[500]"
                              key={todo._id}
                              onClick={() => router.push("/admin/todos")}
                            >
                              <span className="cursor-pointer text-blue-600">
                                {truncateText(todo._id, 10)}
                              </span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              {formatDate(todo.createdAt)}
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <p
                                className={`${
                                  colors[todo.status]
                                } font-semibold`}
                              >
                                {todo.status}
                              </p>
                            </td>
                          </>
                        ))
                      ) : (
                        <td className="px-6 py-4 font-[500]" colSpan={3}>
                          <p className="text-center w-full">
                            No recent todos
                          </p>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[49%] rounded-[10px] flex flex-col gap-4 bg-white shadow-md p-5">
              <h3 className="text-[18px] font-[600]">Recent Surveys</h3>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Created at
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {dashboardData.todos.length > 0 ? (
                      dashboardData.surveys.map((survey: any) => (
                        <tr
                          className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                          onClick={() =>
                            router.push(
                              `/admin/surveys/edit?survey_id=${survey._id}`
                            )
                          }
                          key={survey._id}
                        >
                          <td className="px-6 py-4 font-[500]">
                            <span className="text-blue-600">
                              {truncateText(survey.name, 20)}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-[500]">
                            {formatDate(survey.createdAt)}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <td className="px-6 py-4 font-[500]" colSpan={3}>
                      <p className="text-center w-full">
                        No record found
                      </p>
                    </td>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
