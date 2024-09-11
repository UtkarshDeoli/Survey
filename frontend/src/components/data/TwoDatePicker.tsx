import { format } from "date-fns";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import survey_analytics_calender from "../../../public/icons/survey_data/survey_analytics_calender.png";
import { BiRightArrowAlt } from "react-icons/bi";

interface props{
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

function TwoDatePicker({startDate,setStartDate,endDate,setEndDate} :props) {

    const formatDate = (date: Date | null) => {
        return date ? format(date, "dd-MMM-yyyy") : "";
      };

  return (
    <div className="w-fit flex items-center space-x-2 rounded-lg focus:outline-none cursor-pointer">
      <div className="">
        <Image src={survey_analytics_calender.src} alt="calender" height={24} width={24}/>
      </div>

      <DatePicker 
        selected={startDate}
        onChange={(date)=>setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        scrollableYearDropdown
        scrollableMonthYearDropdown
        customInput={
            <div className="relative">
              <input
                type="text"
                value={startDate ? formatDate(startDate) : ""}
                onChange={(e) => {
                  console.log("inside input")
                }}
                placeholder={`Select start`}
                className=" my-2 w-[90px] text-center"
              />
            </div>
          }
      />
      <BiRightArrowAlt className="inline-block pt-1 text-xl"/>
      <DatePicker 
        selected={endDate}
        onChange={(date)=>setEndDate(date)}
        dateFormat="dd.MM.yyyy"
        scrollableYearDropdown
        scrollableMonthYearDropdown
        customInput={
            <div className="relative">
              <input
                type="text"
                value={endDate ? formatDate(endDate) : ""}
                onChange={(e) => {
                  console.log("inside input")
                }}
                placeholder={`Select end`}
                className=" my-2 w-[90px] text-center"
              />
            </div>
          }
      />
    </div>
  )
}

export default TwoDatePicker