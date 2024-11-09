import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { BiRightArrowAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import survey_analytics_calender from "../../../../public/icons/survey_data/survey_analytics_calender.png";
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
    <div className={twMerge("w-fit flex font-medium text-lg px-4 py-2 items-center space-x-2 rounded-md focus:outline-none cursor-pointer", className)}>
      <div className="">
        <Image src={survey_analytics_calender.src} alt="calender" height={24} width={24} />
      </div>

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
                className="my-2 w-[120px] text-center outline-none font-normal text-sm"
              />
            </div>
          }
        />
        <BiRightArrowAlt className="inline-block pt-1 text-2xl" />
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
                className="my-2 w-[120px] text-center outline-none font-normal text-sm"
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default TwoDatePicker;
