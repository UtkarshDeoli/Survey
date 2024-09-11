"use client"

import { useState } from "react"
import ButtonFilled from "../ui/buttons/ButtonFilled"
import { questions } from "@/utils/devData"

function AllQuestions() {
    const [level,setLevel] = useState("Standard")
  return (
    <aside className="min-w-[283px] min-h-screen pt-4 pl-2 overflow-hidden">
        <div className="flex flex-col gap-2 w-full">
            <button className="bg-my-blue-700 w-full text-[14px] font-semibold border text-white px-4 py-[10px] rounded-md text-left ">Questionnaire</button>
            <div className="flex gap-1">
                {level ==="Standard" ? <ButtonFilled onClick={()=>setLevel("Standard")} className="w-full py-[10px] text-[14px] font-semibold">Standard</ButtonFilled> : <button onClick={()=>setLevel("Standard")} className="py-[10px] px-4 border rounded-md  w-full border-secondary-200 text-my-blue-700 text-[14px] font-semibold">Standard</button>}
                {level ==="Advance" ? <ButtonFilled onClick={()=>setLevel("Advance")} className="w-full py-[10px] text-[14px] font-semibold">Advance</ButtonFilled> : <button onClick={()=>setLevel("Advance")} className="py-[10px] px-4 border rounded-md  w-full border-secondary-200 text-my-blue-700 text-[14px] font-semibold">Advance</button>}
            </div>
            <div className="flex flex-col gap-2 h-[600px] overflow-y-auto">
                {questions.map((question,ind)=>(
                    <div key={ind} draggable onDragStart={(e)=>{
                        e.dataTransfer.setData("text/plain", question);
                    }} className="p-2 flex gap-3 rounded-md bg-white cursor-grab">
                        <div className="h-6 w-6 bg-secondary-400"></div>
                        <div className="text-[14px] text-secondary-500">{question}</div>
                    </div>
                ))}
            </div>
        </div>
    </aside>
  )
}

export default AllQuestions