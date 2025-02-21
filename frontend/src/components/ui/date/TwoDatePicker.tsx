import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { BiRightArrowAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import doubleArrow from "/public/images/doubleArrow.png";
import "react-datepicker/dist/react-datepicker.css";
import { MdCompareArrows } from "react-icons/md";

interface props {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  className?: string;
}

function TwoDatePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  className,
}: props) {
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
    <div
      className={twMerge(
        "w-fit flex font-medium text-lg py-2 items-center space-x-2 rounded-md focus:outline-none cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-3">
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
                className="w-[150px] h-[40px] rounded-md bg-white pl-2 text-[13px] border border-[rgba(0,0,0,0.1)] outline-none"
              />
            </div>
          }
        />
        <MdCompareArrows size={27} />

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
                 className="w-[150px] h-[40px] rounded-md bg-white pl-2 text-[13px] border border-[rgba(0,0,0,0.1)] outline-none"
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default TwoDatePicker;
