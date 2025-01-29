import Dashboard from "@/components/vrm-dashboard/Dashboard";
import React from "react";

function page() {
  return (
    <main className="bg-[#ECF0FA] min-h-screen">
      <div className="p-5 font-bold text-[24px]">Activity</div>
      <Dashboard />
    </main>
  );
}

export default page;
