"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`flex flex-col ${sidebarOpen ? "flex-1": "w-[calc(100vw-75px)]"}`}>
        <Navbar onSidebarToggle={handleToggle} />
        <main className="flex-1 h-full overflow-auto">{children}</main>
      </div>
      {/* "w-[calc(100vw-250px)]"  */}
      <Toaster />
    </div>
  );
}

export default Layout;
