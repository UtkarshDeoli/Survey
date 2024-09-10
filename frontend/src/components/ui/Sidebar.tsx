"use client"

import Image from "next/image"
import menu from "../../../public/icons/menu.png"
import { usePathname } from "next/navigation"
function Sidebar() {
  const path = usePathname()
  console.log(path)
  return (
    <aside className={`h-screen  border-2 sticky left-0 top-0 ${path !== "/admin/surveys/questions" ? "min-w-[243px]" : "min-w-[75px]"}`}>
        <div className={`flex flex-col items-start pt-6 ${path !== "/admin/surveys/questions" ? "pl-10" : ""}`}>
            {['Dashboard','Surveys','Data','Users','Reports','Settings'].map((el:string,ind:number)=>(
                <button onClick={()=>window.open(`/admin/${el.toLowerCase()}`,"_self")} key={ind} className="px-8 py-4 flex gap-2 items-center text-[16px] text-secondary-300 font-semibold">
                    <Image src={menu.src} alt="menu icon" height={24} width={24}/>
                     {path !== "/admin/surveys/questions" && el}
                </button>
            ))}
        </div>
    </aside>
  )
}

export default Sidebar