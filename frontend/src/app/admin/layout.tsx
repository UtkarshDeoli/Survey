"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CreateSurveyContextProvider } from "@/store/createSurveyContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import withAuth from "@/components/protect/withAuth";

interface LayoutProps {
  children: React.ReactNode;
}

const SMALL_PATHS = ["/admin/data/analytics", "/admin/surveys/questions"];

function Layout({ children }: LayoutProps) {
  const path = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(!SMALL_PATHS.includes(path));

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar onSidebarToggle={handleToggle} sidebarOpen={sidebarOpen} />
      <div className={`flex flex-col flex-1`}>
        <Navbar />
        <main
          className={`flex-1 h-full overflow-auto ${
            sidebarOpen ? "w-[calc(100vw-300px)]" : "w-[calc(100vw-75px)]"
          }`}
        >
          <CreateSurveyContextProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
            </LocalizationProvider>
          </CreateSurveyContextProvider>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default withAuth(Layout)
