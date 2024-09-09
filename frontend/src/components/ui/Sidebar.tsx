"use client"

import Image from "next/image"
import menu from "../../../public/icons/menu.png"
function Sidebar() {
  return (
    <aside className="h-screen min-w-[243px] border-2 sticky left-0 top-0">
        <div className="flex flex-col items-start pl-10 pt-6">
            {['Dashboard','Surveys','Data','Users','Reports','Settings'].map((el:string,ind:number)=>(
                <button onClick={()=>window.open(`/admin/${el.toLowerCase()}`,"_self")} key={ind} className="px-8 py-4 flex gap-2 items-center text-[16px] text-secondary-100 font-semibold">
                    <Image src={menu.src} alt="menu icon" height={24} width={24}/>
                     {el}
                </button>
            ))}
        </div>
    </aside>
  )
}

export default Sidebar