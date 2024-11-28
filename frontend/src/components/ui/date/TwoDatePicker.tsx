import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { BiRightArrowAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import doubleArrow from "/public/images/doubleArrow.png"
import "react-datepicker/dist/react-datepicker.css";


interface props{
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  className?: string;
}

function TwoDatePicker({ startDate, setStartDate, endDate, setEndDate, className }: props) {

  const formatDate = (date: Date | null) => {
    return date ? format(date, "dd-MMM-yyyy") : "";
  };

  // Helper function to normalize the time part to 00:00:00 (start of the day)
  const normalizeDate = (date: Date | null): Date | null => {
    if (!date) return null;
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0); // Reset the time part to midnight
    return normalized;
  };

  return (
    <div className={twMerge("w-fit flex font-medium text-lg py-2 items-center space-x-2 rounded-md focus:outline-none cursor-pointer", className)}>

      <div className="flex items-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(normalizeDate(date))}
          dateFormat="dd.MM.yyyy"
          scrollableYearDropdown
          scrollableMonthYearDropdown
          customInput={
            <div className="relative">
              <input
                type="text"
                value={startDate ? formatDate(startDate) : ""}
                onChange={(e) => {
                  console.log("inside input");
                }}
                placeholder={`Select start`}
                className="my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating  text-center outline-none font-normal text-sm"
              />
            </div>
          }
        />
       <img src={doubleArrow.src} className="object-contain w-[30px] mx-4"/>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(normalizeDate(date))}
          dateFormat="dd.MM.yyyy"
          scrollableYearDropdown
          scrollableMonthYearDropdown
          customInput={
            <div className="relative">
              <input
                type="text"
                value={endDate ? formatDate(endDate) : ""}
                onChange={(e) => {
                  console.log("inside input");
                }}
                placeholder={`Select end`}
                className="my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating text-center outline-none font-normal text-sm"
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default TwoDatePicker;
