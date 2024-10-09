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
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={` flex-col ${sidebarOpen ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-75px)]"}`}>
        <Navbar onSidebarToggle={handleToggle} />
        <main className="w-full h-full">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}

export default Layout;
