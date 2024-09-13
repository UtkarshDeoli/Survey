import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image"
import { format } from "date-fns";
import calendar from "../../../public/icons/Calendar.png"

interface props{
    selectedDate: Date | null,
    setSelectedDate: (date: Date | null) => void,
}
function CustomDatePicker({selectedDate,setSelectedDate} :props) {
    const formatDate = (date: Date | null) => {
        return date ? format(date, "dd.MM.yyyy") : "";
      };
  return (
    <DatePicker 
    selected={selectedDate}
    onChange={(date)=>setSelectedDate(date)}
    dateFormat="dd.MM.yyyy"
    isClearable
    scrollableYearDropdown
    scrollableMonthYearDropdown
    customInput={
        <div className="relative">
          <input
            type="text"
            value={selectedDate ? formatDate(selectedDate) : ""}
            onChange={(e) => {
              console.log("inside input")
            }}
            placeholder={`Select date`}
            className="pl-10 py-2 w-[138px] border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
          />
          {/* Calendar icon */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image src={calendar.src} alt="calender" height={24} width={24}/>
          </span>
        </div>
      }
/>
  )
}

export default CustomDatePicker