"use client"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

interface props{
  id:string;
  created_by:string;
  name:string;
  surveyName?:string
}
function QuestionHeader({id, created_by, name, surveyName}:props) {
  const path = usePathname();
  const router = useRouter();
  
  return (
    <header className=" top-0 left-0 w-full h-16 border-2 z-20">
        <div className="bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center">
           <h3 className="text-dark-gray font-semibold">{`${name}: ${surveyName}`}</h3>
           <div className=" flex gap-2">
                <button onClick={()=>router.push(`/admin/surveys/questions?id=${id}&created_by=${created_by}&name=${surveyName}`)} className={`border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ${path.includes("/admin/surveys/questions") ? "bg-primary-300" : "bg-dark-gray"}`}>Questionnaire</button>
                <button onClick={()=>router.push(`/admin/surveys/resequence?id=${id}&created_by=${created_by}&name=${surveyName}`)} className={`border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ${path.includes("/admin/surveys/resequence")  ? "bg-primary-300" : "bg-dark-gray"}`}>Resequence</button>
                <button onClick={()=>router.push(`/admin/surveys/conditional-display?id=${id}&created_by=${created_by}&name=${surveyName}`)} className={`border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ${path === "/admin/surveys/conditional-display" ? "bg-primary-300" : "bg-dark-gray"}`}>Conditional display</button>
                <button onClick={()=>router.push(`/admin/surveys/randomize?id=${id}&created_by=${created_by}&name=${surveyName}`)} className={`border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ${path === "/admin/surveys/randomize" ? "bg-primary-300" : "bg-dark-gray"}`}>Randomization</button>
           </div>

        </div>
    </header>
  )
}

export default QuestionHeader