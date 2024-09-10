"use client"

import { useState } from "react"

function SurveyForm() {
    const [forms,setForms] = useState <string[]> ([]);
  return (
    <main className='w-full flex justify-center items-center'>
        <div onDrop={(e)=>{
            const data = e.dataTransfer.getData('text/plain') as string
            console.log(data)
            setForms([...forms,data]);
        }} onDragOver={(e)=>e.preventDefault()} className='w-[1062px] h-[682px] bg-white flex flex-col gap-2'>
            {
                forms.map(form=><p>{form}</p>)
            }
        </div>
    </main>
  )
}

export default SurveyForm