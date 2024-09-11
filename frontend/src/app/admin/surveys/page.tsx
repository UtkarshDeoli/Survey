"use client"

import { useState } from "react"
import SurveyHeader from "@/components/surveys/SurveyHeader"
import ButtonBordered from "@/components/ui/buttons/ButtonBordered"
import ButtonFilled from "@/components/ui/buttons/ButtonFilled"
import filter from "../../../../public/icons/Filter.png"
import Image from "next/image"
import CustomDatePicker from "@/components/surveys/CustomDatePicker"
import AllSurveys from "@/components/surveys/AllSurveys"

function page() {
const [selectedDate, setSelectedDate] = useState<Date | null>(null);

console.log(selectedDate);
  return (
   <section className="w-full">
     <SurveyHeader/>

     <div className="flex justify-between px-8 py-3">
        <input 
            className="w-[387px] h-[41px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
            placeholder="Search surveys here"
        />
        <div className="flex gap-2">
            <ButtonBordered className="border-secondary-200 text-secondary-300 font-semibold ">Filter by status</ButtonBordered>
            <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <ButtonFilled className="text-[14px] font-semibold flex gap-2 items-center justify-center">
                <Image src={filter.src} alt="filter icon" height={24} width={24}/>
                <p>Apply filters</p>
            </ButtonFilled>
        </div>
     </div>
    <AllSurveys/>
    
   </section>
  )
}

export default page