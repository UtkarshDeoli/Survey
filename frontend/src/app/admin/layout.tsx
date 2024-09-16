import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Navbar />
        <main className="w-full">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}

export default Layout;
