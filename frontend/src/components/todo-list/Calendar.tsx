import React, { useState } from 'react';

interface calendarProps{
  selectedDate:any,
  setSelectedDate: (date: any) => void;
}

function Calendar({selectedDate,setSelectedDate}:calendarProps){
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const today = new Date();

  // Function to get the days in the current month
  const getDaysInMonth = (year:any, month:any) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  // Function to get the first day of the month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year:any, month:any) => {
    return new Date(year, month, 1).getDay();
  };

  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Function to handle month navigation
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Function to handle date selection
  const handleDateClick = (day:any) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    if (clickedDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
      if (selectedDate && selectedDate.getTime() === clickedDate.getTime()) {
        setSelectedDate(null);
      } else {
        setSelectedDate(clickedDate);
      }
    }
  };

  return (
    <div className="w-full h-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      <header className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button onClick={handlePrevMonth} className="px-2 py-1 text-white bg-primary-300 rounded hover:bg-blue-600">
            Previous
          </button>
          <button onClick={handleNextMonth} className="px-2 py-1 text-white bg-primary-300 rounded hover:bg-blue-600">
            Next
          </button>
        </div>
        <h2 className="text-2xl font-semibold">
          {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </h2>
      </header>

      <div className="grid grid-cols-7 text-center font-medium text-gray-600">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center mt-2">
        {[...Array(firstDay).keys()].map((_, index) => (
          <div key={`empty-${index}`} className="py-2"></div>
        ))}
        {[...Array(daysInMonth).keys()].map((day) => {
          const dayNumber = day + 1;
          const date = new Date(currentYear, currentMonth, dayNumber);
          const isBeforeToday = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          // const isBeforeToday = date < today;
          const isSelected = selectedDate &&
            selectedDate.getDate() === dayNumber &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear;

          return (
            <div
              key={day}
              className={`border p-8 ${isBeforeToday ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'cursor-pointer hover:bg-primary-50'} ${isSelected ? 'bg-primary-300 text-white' : ''}`}
              onClick={() => !isBeforeToday && handleDateClick(dayNumber)}
            >
              {dayNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
