"use client";

import React, { useEffect, useState } from "react";
import { IoAlarmOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import ButtonBordered from "../ui/buttons/ButtonBordered";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import CustomModal from "../ui/Modal";
import Calendar from "./Calendar";
import { createTodo, getTodo, updateTodo } from "@/networks/todo_networks";
import toast from "react-hot-toast";
import Flatpickr from "react-flatpickr";
import { CiClock2 } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { format } from "date-fns";
import { toZonedTime } from 'date-fns-tz';


interface props {
  editing: string | null;
  scheduleModal: boolean;
  setScheduleModal: (value: boolean) => void;
  setEditing: (value: string | null) => void;
  assignedBy: string | null;
  setAssignedBy: (value: string) => void;
  handleGetAllTodos: () => {};
  users: any;
  getUsers: () => {};
}

const formatTime = (date: any) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`; // Ensure minutes are two digits
};

const activities = [
  {
    title: "Call",
    icon: <IoIosCall />,
  },
  {
    title: "Task",
    icon: <CiClock2 />,
  },
];

function AddTodo({
  editing,
  scheduleModal,
  setScheduleModal,
  setEditing,
  assignedBy,
  setAssignedBy,
  handleGetAllTodos,
  getUsers,
  users,
}: props) {
  const [activity, setActivity] = useState<string | null>("");
  const [title, setTitle] = useState<string | null>("");
  const [status, setStatus] = useState<string | null>("");
  const [priority, setPriority] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");
  const [reminder, setReminder] = useState<string | null>("30");
  const [assignedUsers, setAssignedUsers] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<any | null>(null);

  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  console.log("reminder is ---->", reminder);

  useEffect(() => {
    if (editing) {
      handlegetTodo();
      getUsers();
    } else {
      empty();
    }
  }, [editing]);

  function empty() {
    setActivity("");
    setTitle("");
    setStatus("");
    setDescription("");
    setPriority("");
    setReminder("30");
    setEndTime("");
    setAssignedUsers([]);
    setSelectedDate(null);
    setStartTime("");
    console.log("states cleared");
  }

  function handleAssignTo(selectedOptions: any) {
    setAssignedUsers(() => {
      if (!selectedOptions) return []; // If no selection, return an empty array
      return selectedOptions; // Extract IDs from selected options
    });
  }

  async function handlegetTodo() {
    const params: any = {};
    if (editing) params.id = editing;
    const response = await getTodo(params);
    console.log("res of editing ----->", response);
    // console.log("time is --->",format(response.data.due_date, 'HH:mm'))
     // Convert UTC time to 'Asia/Kolkata' time zone
      // Convert UTC time to 'Asia/Kolkata' time zone using toZonedTime
    const timeZone = 'Asia/Kolkata';
    const dueDateInIST = toZonedTime(response.data.due_date, timeZone);
    console.log("due date--->",dueDateInIST)
    // const reminderInIST = toZonedTime(response.data.reminder, timeZone);
     
     console.log("time is --->", format(dueDateInIST, 'HH:mm'));

    if (response.success) {
      setActivity(response.data.activity);
      setTitle(response.data.title);
      setStatus(response.data.status);
      setDescription(response.data.description);
      setPriority(response.data.priority);
      setReminder(response.data.reminder);
      setAssignedUsers(
        response.data.assigned_to.map((el: any) => ({
          label: el.name,
          value: el._id,
        }))
      );
      setSelectedDate(new Date(response.data.due_date));
      // setStartTime(dueDateInIST);
      setStartTime(format(dueDateInIST, "HH:mm"));
      setEndTime(format(response.data.end_date, "HH:mm"));
      setAssignedBy(response.data.assigned_by._id);
      // setEditing(response.data._id);
    } else {
      toast.error("Error fetching users!");
    }
  }
  async function handleUpdateTodo() {
    const params: any = { id: editing };
    const updates = {
      activity,
      title,
      status,
      description,
      priority,
      // reminder,
      assigned_to: assignedUsers.map((obj) => obj.value),
      due_date: selectedDate,
      // start_time: startTime,
      // end_time: endTime,
      assigned_by: assignedBy,
    };
    params.updates = updates;
    const response = await updateTodo(params);
    console.log("res----->", response);
    if (response.success) {
      setScheduleModal(false);
      toast.success("Updated successfully!");
      setEditing(null);
      handleGetAllTodos();
    } else {
      toast.error("Error updating todos");
    }
  }

  // async function handleSubmit() {
  //   if (!selectedDate || !startTime || !endTime) {
  //     toast.error("Please select a due date and time.");
  //     return;
  //   }

  //   // Create the due date and end date objects using the selected date
  //   const dueDateTime = new Date(selectedDate); // start time
  //   const endDateTime = new Date(selectedDate); // end time

  //   // Parse the start and end times
  //   const [startHours, startMinutes] = startTime.split(":");
  //   const [endHours, endMinutes] = endTime.split(":");

  //   // Set hours and minutes for dueDateTime and endDateTime
  //   dueDateTime.setHours(Number(startHours), Number(startMinutes));
  //   endDateTime.setHours(Number(endHours), Number(endMinutes));

  //   // Convert to IST (UTC +5:30)
  //   const istOffset = 5.5 * 60; // IST offset in minutes
  //   dueDateTime.setMinutes(dueDateTime.getMinutes() + istOffset);
  //   endDateTime.setMinutes(endDateTime.getMinutes() + istOffset);

  //   // Create the reminder date
  //   const reminderDate = new Date(dueDateTime); // reminder time
  //   if (reminder) {
  //     const reminderMinutes = parseInt(reminder, 10);
  //     reminderDate.setMinutes(dueDateTime.getMinutes() - reminderMinutes);
  //   }

  //   // Prepare the parameters for submission
  //   const assigned_to = assignedUsers.map((obj) => obj.value);
  //   const params = {
  //     title,
  //     description,
  //     due_date: dueDateTime.toISOString(),
  //     end_date: endDateTime.toISOString(),
  //     activity,
  //     assigned_to,
  //     assigned_by: assignedBy,
  //     status,
  //     priority,
  //     reminder: reminder ? reminderDate.toISOString() : null,
  //   };

  //   console.log(params);
  //   const response = await createTodo(params);
  //   if (response.success) {
  //     setScheduleModal(false);
  //     empty();
  //     handleGetAllTodos();
  //   } else {
  //     toast.error("Failed to create todo!");
  //   }
  // }

  async function handleSubmit() {
    if (!selectedDate || !startTime || !endTime) {
      toast.error("Please select a due date and time.");
      return;
    }
  
    // Create the due date and end date objects using the selected date
    const dueDateTime = new Date(selectedDate); // start time
    const endDateTime = new Date(selectedDate); // end time
  
    // Parse the start and end times
    const [startHours, startMinutes] = startTime.split(":");
    const [endHours, endMinutes] = endTime.split(":");
  
    // Set hours and minutes for dueDateTime and endDateTime
    dueDateTime.setHours(Number(startHours), Number(startMinutes));
    endDateTime.setHours(Number(endHours), Number(endMinutes));
  
    // Create the reminder date
    const reminderDate = new Date(dueDateTime); // reminder time
    if (reminder) {
      const reminderMinutes = parseInt(reminder, 10);
      reminderDate.setMinutes(dueDateTime.getMinutes() - reminderMinutes);
    }
  
    // Prepare the parameters for submission
    const assigned_to = assignedUsers.map((obj) => obj.value);
    const params = {
      title,
      description,
      due_date: dueDateTime.toISOString(), // Send as UTC
      end_date: endDateTime.toISOString(), // Send as UTC
      activity,
      assigned_to,
      assigned_by: assignedBy,
      status,
      priority,
      reminder: reminder ? reminderDate.toISOString() : null, // Send as UTC
    };
  
    console.log("todos data is --->",params);
    const response = await createTodo(params);
    if (response.success) {
      setScheduleModal(false);
      empty();
      handleGetAllTodos();
    } else {
      toast.error("Failed to create todo!");
    }
  }
  

  return (
    <CustomModal
      open={scheduleModal}
      closeModal={() => {
        setScheduleModal(false);
        setEditing(null);
      }}
    >
      <div className="relative flex flex-col h-[95vh] w-[95vw] vertical-scrollbar">
        <header className="sticky top-0 left-0 flex justify-between w-full p-4 items-center bg-primary-300">
          <h3 className="font-bold text-white">Schedule</h3>
          <button
            onClick={() => {
              setScheduleModal(false);
              setEditing(null);
              empty();
            }}
          >
            <RxCross1 className="text-white" />
          </button>
        </header>
        <div className="grid grid-cols-2 h-full w-full text-sm">
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <div className="flex flex-col h-full w-full px-8 py-5 gap-5 ">
            {/* activities */}
            <div className="flex gap-8">
              {activities.map((act) => (
                <div className="flex items-center flex-col">
                  <button
                    onClick={() => setActivity(act.title)}
                    className={`h-10 w-10 border-2 rounded-full flex justify-center items-center hover:bg-blue-200 hover:text-white text-xl ${
                      activity === act.title ? "bg-primary-300 text-white" : ""
                    }`}
                  >
                    {act.icon}
                  </button>
                  <p className="text-sm">{act.title}</p>
                </div>
              ))}
            </div>
            {/* input */}
            <input
              placeholder="Task title..."
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              className="border-2 rounded-[20px] px-4 py-2 outline-none focus:ring-2 focus:ring-primary-100"
            />

            {/* status */}
            <div className="flex gap-3 items-center">
              <p>Status: </p>
              {["Open", "Rescheduled", "Cancelled", "Completed"].map((st) => (
                <ButtonBordered
                  onClick={() => setStatus(st)}
                  className={` px-4 py-2  ${
                    status === st
                      ? " bg-primary-300 text-white "
                      : "text-black border border-black"
                  }`}
                >
                  {st}
                </ButtonBordered>
              ))}
            </div>
            {/* priority */}
            <div className="flex gap-3 items-center">
              <p>Priority: </p>
              {["High", "Low"].map((pr) => (
                <ButtonBordered
                  onClick={() => setPriority(pr)}
                  className={` px-4 py-2  ${
                    priority === pr
                      ? "bg-primary-300 text-white"
                      : "text-black border border-black"
                  }`}
                >
                  {pr}
                </ButtonBordered>
              ))}
            </div>

            {/* text area */}
            <textarea
              value={description || ""}
              placeholder="Description..."
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 rounded-[20px] px-4 py-2 outline-none focus:ring-2 focus:ring-primary-100"
            />

            {/* assign to */}
            <div className="grid grid-cols-2 gap-2">
              <p>Assign to: </p>
              {users && (
                <Select
                  options={users.map((user: any) => ({
                    label: user.name,
                    value: user._id, // Map `option` to `user._id`
                  }))}
                  value={assignedUsers} // Correct structure for `value`
                  onChange={handleAssignTo} // Update selected users on change
                  isMulti={true}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Select users..."
                />
              )}
            </div>
            {/* Time selection for the todo */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <label className="flex items-center">Start Time:</label>
              <Flatpickr
                value={startTime}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  time_24hr: false,
                }}
                onChange={(selectedDates: any) => {
                  if (selectedDates.length > 0) {
                    setStartTime(formatTime(selectedDates[0])); // Format time before saving it
                  }
                }}
                className="border rounded-md px-2 py-2"
              />
              <label className="flex items-center">End Time:</label>
              <Flatpickr
                value={endTime}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  time_24hr: false,
                }}
                onChange={(selectedDates: any) => {
                  if (selectedDates.length > 0) {
                    setEndTime(formatTime(selectedDates[0])); // Format time before saving it
                  }
                }}
                className="border rounded-md px-2 py-2"
              />
            </div>

            {/* reminder */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex gap-2 items-center">
                <IoAlarmOutline className="text-2xl" />
                <p>Reminder: </p>
              </div>
              <select
                value={reminder || "30"}
                onChange={(e) => setReminder(e.target.value)}
                className="border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="30"> 30 mins before</option>
                <option value="60">1 hour before</option>
                <option value="120">2 hour before</option>
                <option value="180">3 hour before</option>
              </select>
            </div>

            {/* save */}
            <div className="flex justify-end w-full gap-3">
              <ButtonFilled>Cancel</ButtonFilled>
              <ButtonFilled onClick={editing ? handleUpdateTodo : handleSubmit}>
                Save
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}

export default AddTodo;
