import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
    children: React.ReactNode;
}

function layout({children} : LayoutProps) {
  return (
    <div>
        <Navbar/>
        <div className="flex h-auto w-full overflow-y-auto">
            <Sidebar/>
            {children}
        </div>
        <Footer/>
        <Toaster/>
    </div>
    
  )
}

export default layout