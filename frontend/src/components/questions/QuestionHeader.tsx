"use client"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

function QuestionHeader() {
  const path = usePathname();
  const router = useRouter();
  return (
    <header className="w-full h-16 border-2">
        <div className="bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center">
           <h3 className="text-secondary-300 text-[14px] font-semibold">Questionnaire</h3>
           <div className=" flex gap-2">
                <button onClick={()=>router.push("/admin/surveys/questions")} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === "/admin/surveys/questions" ? "text-white" : "bg-secondary-200"}`}>Questionnaire</button>
                <button onClick={()=>router.push("/admin/surveys/resequence")} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === "/admin/surveys/resequence" ? "text-white" : "bg-secondary-200"}`}>Resequence</button>
                <button onClick={()=>router.push("/admin/surveys/conditional-display")} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === "/admin/surveys/conditional-display" ? "text-white" : "bg-secondary-200"}`}>Conditional display</button>
                <button onClick={()=>router.push("/admin/surveys/randomize")} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === "/admin/surveys/randomize" ? "text-white" : "bg-secondary-200"}`}>Randomization</button>
                <button onClick={()=>router.push("/admin/surveys/preview")} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === "/admin/surveys/preview" ? "text-white" : "bg-secondary-200"}`}>Preview</button>
           </div>
        </div>
    </header>
  )
}

export default QuestionHeader