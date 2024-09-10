import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

function layout({children} : LayoutProps) {
  return (
    <div>
        <Navbar/>
        <div className="flex h-full w-full">
            <Sidebar/>
            {children}
        </div>
        <Footer/>
    </div>
    
  )
}

export default layout