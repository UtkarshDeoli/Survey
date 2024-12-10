"use client";

import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs, { Dayjs } from 'dayjs';
function page() {
    const [time, setTime] = React.useState<Dayjs | null>(dayjs());
  console.log("selectedTime is ---->", time?.toString());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
      <TimePicker />
      <MobileTimePicker
        label="Controlled picker"
        value={time}
        onChange={(selectedTime) => setTime(selectedTime)}
        className="mt-10"
      />
    </LocalizationProvider>
  );
}

export default page;
