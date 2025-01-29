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
    <div className="bg-[#ECF0FA]">
      <div className="p-5 font-bold text-[24px]">Activity</div>

      {loading && <Loader />}
      {dashboardData && (
        <div className="flex flex-col gap-10 p-5">
          <div className="flex justify-around">
            <div className="flex flex-col min-h-200px justify-between py-2">
              <div
                onClick={() => router.push("/admin/surveys")}
                className="cursor-pointer flex justify-between items-center shadow-md rounded-[25px] px-10 py-10 bg-white min-w-[300px]"
              >
                <h2 className="text-[20px] font-bold">Total survey</h2>
                <img src="/images/right.png" className="h-3" />
                <h2 className="text-[20px] font-bold">
                  {dashboardData.surveysCount}
                </h2>
              </div>
              <div
                onClick={() => router.push("/admin/data")}
                className="cursor-pointer flex justify-between items-center shadow-md rounded-[25px] px-10 py-10 bg-white min-w-[300px]"
              >
                <h2 className="text-[20px] font-bold">Total responses</h2>
                <img src="/images/right.png" className="h-3" />
                <h2 className="text-[20px] font-bold">
                  {dashboardData.responseCount}
                </h2>
              </div>
            </div>
            <div onClick= {()=>router.push('/admin/karyakarta')} className="cursor-pointer flex flex-col p-5 gap-4 shadow-md rounded-[25px] px-5 py-8 bg-white ">
              <h2 className="text-[20px] font-bold ">Number of karyakarta</h2>
              {karyakartaData && (
                <Pie data={karyakartaData} options={options} />
              )}
            </div>
            <div onClick={()=>router.push('/admin/users')} className="cursor-pointer flex flex-col p-5 gap-4 shadow-md rounded-[25px] px-10 py-8 bg-white ">
              <h2 className="text-[20px] font-bold ">Number of Users</h2>
              {userData && <Pie data={userData} options={options} />}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[49%] rounded-[25px] flex flex-col gap-4 bg-white shadow-md p-5">
              <h3 className="text-[20px] font-bold">Recent tasks</h3>
              <div className="rounded-[25px] flex flex-col gap-4 bg-lighter-gray h-[40vh] p-4 w-full border-2 vertical-scrollbar-orange overflow-y-scroll">
                <div className="grid grid-cols-4 w-full text-[13px] font-semibold place-items-center">
                  <p>Id</p>
                  <p></p>
                  <p>Created at</p>
                  <p>Status</p>
                </div>
                {dashboardData.todos.length > 0 ? (
                  dashboardData.todos.map((todo: any) => (
                    <div
                      key={todo._id}
                      onClick={() => router.push("/admin/todos")}
                      className="cursor-pointer grid grid-cols-4 w-full place-items-center text-[13px]"
                    >
                      <p>{truncateText(todo._id, 10)}</p>
                      <img src="/images/right.png" className="h-2" />
                      <p className="text-dark-gray">
                        {formatDate(todo.createdAt)}
                      </p>
                      <p className={`${colors[todo.status]} font-semibold`}>
                        {todo.status}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No recent todos</p>
                )}
              </div>
            </div>
            <div className="w-[49%] rounded-[25px] flex flex-col gap-4 bg-white shadow-md p-5">
              <h3 className="text-[20px] font-bold">Recent Surveys</h3>
              <div className="rounded-[25px] flex flex-col gap-4 bg-lighter-gray h-[40vh] p-4 w-full border-2 vertical-scrollbar-orange overflow-y-scroll">
                <div className="grid grid-cols-3 w-full text-[13px] font-semibold place-items-center">
                  <p>Name</p>
                  <p></p>
                  <p>Created at</p>
                </div>
                {dashboardData.todos.length > 0 ? (
                  dashboardData.surveys.map((survey: any) => (
                    <div
                      onClick={() =>
                        router.push(
                          `/admin/surveys/edit?survey_id=${survey._id}`
                        )
                      }
                      key={survey._id}
                      className="cursor-pointer grid grid-cols-3 w-full place-items-center text-[13px]"
                    >
                      <p>{truncateText(survey.name, 20)}</p>
                      <img src="/images/long-arrow.png" className="h-2" />
                      <p className="text-dark-gray">
                        {formatDate(survey.createdAt)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No recent todos</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
