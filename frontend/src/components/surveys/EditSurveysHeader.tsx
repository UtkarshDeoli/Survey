"use client"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

interface editSurveyProps{
    id:string;
    created_by:string;
    name:string
}
function EditSurveysHeader({id, created_by,name}:editSurveyProps) {
  const path = usePathname();
  const router = useRouter();
  return (
    <header className="w-full h-16 border-2">
        <div className="bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center">
           <h3 className="text-secondary-300 text-[14px] font-semibold">Edit survey : {name} </h3>
           <div className=" flex gap-2">
                <button onClick={()=>router.push(`/admin/surveys/questions?_id=${id}&created_by=${created_by}`)} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === `/admin/surveys/questions` ? "text-white" : "bg-secondary-200"}`}>Questionnaire</button>
                <button onClick={()=>router.push("/admin/surveys/resequence")} className={`border text-black bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold ${path === "/admin/surveys/resequence" ? "text-white" : "bg-secondary-200"}`}>users</button>
           </div>
        </div>
    </header>
  )
}

export default EditSurveysHeader