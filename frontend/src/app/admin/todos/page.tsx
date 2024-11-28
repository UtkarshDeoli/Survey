"use client"

import Calendar from '@/components/todo-list/Calendar'
import ButtonFilled from '@/components/ui/buttons/ButtonFilled'
import CustomModal from '@/components/ui/Modal'
import { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from '@/networks/todo_networks'
import { getAllUsers } from '@/networks/user_networks'
import { checkToken, formatDate } from '@/utils/common_functions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { BsThreeDots } from 'react-icons/bs'
import { CiClock2 } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { IoAlarmOutline } from 'react-icons/io5'
import { MdRestartAlt } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

  
const activities = [
    {
        title:"Call",
        icon:<IoIosCall />
    },
    {
        title:"Task",
        icon:<CiClock2 />
    },
]
const borderColors:any={
    "Open":"border-blue-200",
    "Rescheduled":"border-amber-400",
    "Completed":"border-green-500",
    "Cancelled":"border-red-400",
}
const activityColors:any={
    "Call":"bg-violet-200",
    "Task":"bg-amber-400",
   
}
function page() {
    const [scheduleModal,setScheduleModal] = useState<boolean>(false)
    const [activity,setActivity] = useState<string|null>("");
    const [title,setTitle] = useState<string|null>("");
    const [status,setStatus] = useState<string|null>("");
    const [priority,setPriority] = useState<string|null>("");
    const [description,setDescription] = useState<string|null>("")
    const [reminder,setReminder] = useState<string|null>("30");
    const [assignedUsers,setAssignedUsers] = useState<string[]|null>(null);
    const [selectedDate, setSelectedDate] = useState<any|null>(null);
    const [users,setUsers] = useState<any[]>([]);
    const [tasks,setTasks] = useState<any[]|null>(null)
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [assignedBy,setAssignedBy] = useState<string|null>(null)
    const [showMenu,setShowMenu] = useState<String|null>(null);
    const [editing,setEditing] = useState<String|null>(null);
    const [filters,setFilters] = useState<any>({});
    const [reset,setReset] = useState<boolean>(false)
    const [searchTitle,setSearchTitle] = useState<string|null>(null);
    const [showData,setShowData] = useState<String|null>(null)

    console.log("filters---->",filters)
   
    const router = useRouter()
    
    const menuRef = useRef<HTMLDivElement | null>(null);

    console.log(selectedDate);

    useEffect(()=>{
        getUsers()
        handleGetAllTodos();
    },[reset])
    useEffect(()=>{
        const token = checkToken()
        if(token){
            setAssignedBy(token.id);
        }
    },[])

    useEffect(()=>{
        if(editing){
            handlegetTodo()
        }else{
            empty();
        }
    },[editing])

    useEffect(() => {
        if (showMenu !== null) {
          document.addEventListener('click', handleClickOutside);
        } else {
          document.removeEventListener('click', handleClickOutside);
        }
        return () => {
          document.removeEventListener('click', handleClickOutside); // Cleanup
        };
      }, [showMenu]);

    // event handlers
 
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setShowMenu(null);
        }
      };

    function empty(){
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
    function handleAssignTo(e:any){
        setAssignedUsers((prev)=>{
            if(!prev) return [e.target.value];
            if(prev.includes(e.target.value)){
                return prev.filter((u)=>u!==e.target.value)
            }
            return [...prev,e.target.value]
        })
    }
    function handleRemoveAssignTo(userId:string){
        setAssignedUsers((prev)=>{
            if(!prev) return [];
            return prev.filter((u)=>u!==userId)
        })
    }

    
    //api calls
    async function handleGetAllTodos(){
        const params:any = {};
        if(Object.keys(filters).length > 0) params.filters = filters
        if(searchTitle) params.title = searchTitle

        const response = await getAllTodos(params)
        console.log("res---->",response);
        if(response.success){
            setTasks(response.data);
        }else{
            toast.error("Error fetching todos!")
        }
    }
    async function getUsers(){
        const response = await getAllUsers({});
        console.log("users------>",response)
        if(response.success){
            setUsers(response.data);
        }else{
            toast.error("Error fetching users!")
        }
       
    }
    async function handlegetTodo(){
        const params:any={}
        if(editing) params.id = editing;
        const response = await getTodo(params);
        console.log("res----->",response)
        if(response.success){
            setActivity(response.data.activity);
            setTitle(response.data.title);
            setStatus(response.data.status);
            setDescription(response.data.description);
            setPriority(response.data.priority);
            setReminder(response.data.reminder);
            setAssignedUsers(response.data.assigned_to.map((el:any)=>el._id));
            setSelectedDate(new Date(response.data.due_date));
            // setStartTime(formatDate(response.data.start_time, 'HH:mm'));
            // setEndTime(formatDate(response.data.end_time, 'HH:mm'));
            setAssignedBy(response.data.assigned_by._id);
            // setEditing(response.data._id);
        }else{
            toast.error("Error fetching users!")
        }
       
    }
    async function handleUpdateTodo(){
        const params:any={id:editing}
        const updates = {
            activity,
            title,
            status,
            description,
            priority,
            // reminder,
            assigned_to: assignedUsers,
            due_date: selectedDate,
            // start_time: startTime,
            // end_time: endTime,
            assigned_by: assignedBy
        }
        params.updates = updates;
        const response = await updateTodo(params);
        console.log("res----->",response)
        if(response.success){
           setScheduleModal(false);
           toast.success("Updated successfully!");
           setEditing(null);
           handleGetAllTodos();
        }else{
            toast.error("Error updating todos")
        }
       
    }
    
    async function handleDeleteTodo(id:string){
        const response = await deleteTodo({id});
        console.log("res----->",response)
        if(response.success){
            toast.success("Deleted successfully!");
            setScheduleModal(false);
            setEditing(null);
            handleGetAllTodos();
        } else{
            toast.error("Error deleting todos")
        }
    }
    async function handleSubmit() {
        if (!selectedDate || !startTime || !endTime) {
            toast.error("Please select a due date and time.");
            return;
        }
        
        // Create the due date and end date objects using the selected date
        const dueDateTime = new Date(selectedDate); // start time
        const endDateTime = new Date(selectedDate); // end time 
    
        // Parse the start and end times
        const [startHours, startMinutes] = startTime.split(':');
        const [endHours, endMinutes] = endTime.split(':');
    
        // Set hours and minutes for dueDateTime and endDateTime
        dueDateTime.setHours(Number(startHours), Number(startMinutes));
        endDateTime.setHours(Number(endHours), Number(endMinutes));
    
        // Convert to IST (UTC +5:30)
        const istOffset = 5.5 * 60; // IST offset in minutes
        dueDateTime.setMinutes(dueDateTime.getMinutes() + istOffset);
        endDateTime.setMinutes(endDateTime.getMinutes() + istOffset);
    
        // Create the reminder date
        const reminderDate = new Date(dueDateTime); // reminder time
        if (reminder) {
            const reminderMinutes = parseInt(reminder, 10);
            reminderDate.setMinutes(dueDateTime.getMinutes() - reminderMinutes);
        }
    
        // Prepare the parameters for submission
        const params = {
            title,
            description,
            due_date: dueDateTime.toISOString(),
            end_date: endDateTime.toISOString(),
            activity,
            assigned_to:assignedUsers,
            assigned_by:assignedBy,
            status,
            priority,
            reminder: reminder ? reminderDate.toISOString() : null
        };
    
        console.log(params);
        const response = await createTodo(params);
        if(response.success){
            setScheduleModal(false);
            empty();
            handleGetAllTodos();
        }else{
            toast.error("Failed to create todo!")
        }
    }
    

  return (
    <main>
         <nav className='w-full sticky top-0 bg-white z-10 left-0 p-4 flex justify-between items-center'>
            <h1 className='text-xl text-secondary-300'>To-Do List</h1>
            <div className='flex gap-2'>
                <ButtonFilled onClick={()=>setScheduleModal(true)}>Add schedule</ButtonFilled>
                <ButtonFilled onClick={()=>router.back()}>Back</ButtonFilled>
            </div>
        </nav>
        {/* search todo section */}
        <section className='flex gap-2 px-4 py-2 w-full bg-secondary-100'>
            <input value={searchTitle || ''} onChange={(e)=>setSearchTitle(e.target.value)} className='px-4 py-3 outline-none border w-[40%] text-secondary-300 focus:ring-2 focus:ring-blue-100 rounded-md' placeholder='Search todos here'/>
            <ButtonFilled onClick={handleGetAllTodos}>Search</ButtonFilled>
            <ButtonFilled onClick={()=>{
                setSearchTitle("");
                setReset(!reset)
            }}>Reset</ButtonFilled>
        </section>

        {/* todos listing */}
        <section className='p-4'>
            <div className='w-full flex flex-col shadow-md rounded-md flex-1 min-h-[50vh] p-4 border'>
                {/* headings */}
                <div className='grid grid-cols-6 gap-2 border-b-2 pb-2'>   
                    {['Due','Status','Activity','Title','Assigned by','Action'].map(el=><h3 className='font-semibold'>{el}</h3>)}
                </div>

                {/* filters */} 
                <div className='grid grid-cols-6 gap-2 mt-4'>
                    <input type="date" className=' border px-4 py-2'/>
                    <select value={filters && filters.status ? filters.status :null} onChange={(e)=>setFilters((prev:any)=>({...prev,status:e.target.value}))} className=' border px-4 py-2' >
                        <option selected disabled value={""}>Select</option>
                        {
                            ["Open","Rescheduled","Cancelled","Completed"].map(st=>(
                                <option value={st}>{st}</option>
                            ))
                        }
                    </select>
                    <select value={filters && filters.activity ? filters.activity :null} onChange={(e)=>setFilters((prev:any)=>({...prev,activity:e.target.value}))} className=' border px-4 py-2' >
                        <option selected disabled value={""}>Select</option>
                        <option value="Call">Call</option>
                        <option value="Task">Task</option>
                    </select>
                    <div className='flex gap-2 items-center col-start-7 text-xl'>
                        <button onClick={handleGetAllTodos} className='border rounded-md h-10 w-10 flex justify-center items-center'><FaFilter /></button>
                        <button onClick={()=>{
                                setFilters({});
                                setReset(!reset)
                            }} className='border rounded-md h-10 w-10 flex justify-center items-center'><MdRestartAlt /></button>
                    </div>
                </div>

                {/* TODO list */}
                <div className='flex flex-col gap-2 mt-4'>
                    {
                        tasks && tasks.map((task)=>(
                            <div onClick={()=>setShowData(prev=>prev === task._id ? null:task._id)} className={`border-l-4 grid grid-cols-6 pl-1 rounded-tl-md rounded-bl-md border-b border-b-secondary-200 cursor-pointer py-3 gap-4 ${borderColors[task.status]}`}>
                                <p>{formatDate(task.due_date)}</p>          
                                <p >{task.status}</p>          
                                <p className={`w-fit rounded-lg flex items-center justify-center px-4 h-8 py-1 text-sm ${activityColors[task.activity]}`}>{task.activity}</p>          
                                <p>{task.title}</p>
                                <p className='h-8 w-8 rounded-full bg-primary-300 flex justify-center items-center text-white'>{task.assigned_by.name.charAt(0)}</p>       
                                <div ref={menuRef} className='relative cursor-pointer w-fit' onClick={(e)=>{
                                    e.stopPropagation()
                                    setShowMenu((prev)=>prev === null ? task._id : null)
                                    }}>
                                    <BsThreeDots />
                                     {
                                        showMenu === task._id && (
                                            <div className='flex flex-col gap-3 absolute right-[110%] top-0 px-4 w-32 bg-white shadow-md border-2 rounded-md'>
                                                <button onClick={(e)=>{
                                                    e.stopPropagation()
                                                    setEditing(task._id)
                                                    setShowMenu(null);
                                                    setScheduleModal(true);
                                                }} className='w-full text-left border-b py-2'>Edit</button>
                                                <button onClick={(e)=>{
                                                    e.stopPropagation()
                                                    handleDeleteTodo(task._id);
                                                }} className='w-full text-left py-2'>Delete</button>
                                            </div>
                                        )
                                    }
                                </div> 
                                 {/* Task details section with transition */}
                                <div
                                className={`col-span-6 flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
                                    showData === task._id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                                >
                                {showData === task._id && (
                                    <div className='grid grid-cols-12 w-1/2 gap-3'>
                                        <p className='col-span-2'>Due Date: </p>
                                        <p className='col-span-10'>{formatDate(task.due_date)}</p>
                                        <p className='col-span-2'>Title: </p>
                                        <p className='col-span-10'>{task.title}</p>
                                        <p className='col-span-2'>Description:</p>
                                        <p className='col-span-10'>{task.description}</p>
                                        <p className='col-span-2'>Activity: </p>
                                        <p className='col-span-10'>{task.activity}</p>
                                        <p className='col-span-2'>Status:</p>
                                        <p className='col-span-10'>{task.status}</p>
                                        <p className='col-span-2'>Priority:</p>
                                        <p className='col-span-10'> {task.priority}</p>
                                        <p className='col-span-2'>Assigned By:</p>
                                        <p className='col-span-10'>{task.assigned_by.name}</p>
                                    </div>
                                )}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
        <CustomModal open={scheduleModal} closeModal={()=>{
                setScheduleModal(false)
                setEditing(null)
            }}>
            <div className='flex flex-col h-[95vh] w-[95vw]'>
                <header className='flex justify-between w-full p-4 items-center bg-primary-300'>
                    <h3 className='font-bold text-white'>Schedule</h3>
                    <button onClick={()=>{
                            setScheduleModal(false)
                            setEditing(null)
                            empty();
                        }}><RxCross1 className='text-white' /></button>
                </header>
                <div className='grid grid-cols-2 h-full w-full text-sm'>
                    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                    <div className='flex flex-col h-full w-full px-8 py-5 gap-5'>
                        {/* activities */}
                        <div className='flex gap-8'>
                            {
                                activities.map(act=>(
                                    <div className='flex items-center flex-col'>
                                        <button onClick={()=>setActivity(act.title)} className={`h-10 w-10 border-2 rounded-full flex justify-center items-center hover:bg-blue-200 hover:text-white text-xl ${activity === act.title ? "bg-primary-300 text-white" :""}`}>{act.icon}</button>
                                        <p className='text-sm'>{act.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        {/* input */}
                        <input placeholder="Task title..." onChange={(e)=>setTitle(e.target.value)} value={title||""} className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'/>

                        {/* status */}
                        <div className='flex gap-3 items-center'>
                            <p>Status: </p>
                            {
                                ["Open","Rescheduled","Cancelled","Completed"].map(st=>(
                                    <button onClick={()=>setStatus(st)} className={` px-4 py-1 rounded-sm border-l-2 border-secondary-300 ${status === st ? " bg-primary-300 text-white " :"bg-secondary-200"}`}>{st}</button>
                                ))
                            }
                        </div>
                        {/* priority */}
                        <div className='flex gap-3 items-center'>
                            <p>Priority: </p>
                            {
                                ["High","Low"].map(pr=>(
                                    <button onClick={()=>setPriority(pr)} className={` px-4 py-1 rounded-sm border-l-2 border-secondary-300 ${priority === pr ? "bg-primary-300 text-white":"bg-secondary-200"}`}>{pr}</button>
                                ))
                            }
                        </div>

                        {/* text area */}
                        <textarea value={description||""} placeholder='Description...' onChange={(e)=>setDescription(e.target.value)} className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'/>

                        {/* assign to */}
                        <div className='grid grid-cols-2 gap-2'>
                            <p>Assign to: </p>
                            <select value={assignedUsers || []} onChange={handleAssignTo} multiple className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'>
                                <option selected disabled>Select user</option>
                                {
                                    users && users.map((user)=><option value={user._id}>{user.name}</option>)
                                }
                            </select>
                            <div className='col-start-2 flex gap-2 items-center flex-wrap'>
                                {assignedUsers && assignedUsers.map(user=>{
                                    const userdata = users.find(u=>u._id === user)
                                    return <div className='bg-primary-300 flex gap-2 items-center px-4 py-2 text-xs text-white rounded-md'>
                                            <p>{userdata? userdata.name : '--'}</p>
                                            <button onClick={()=>handleRemoveAssignTo(userdata._id)}><RxCross1 /></button>
                                        </div>
                                })}
                            </div>
                        </div>
                         {/* Time selection for the todo */}
                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <label className='flex items-center'>Start Time:</label>
                            <input
                            type='time'
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className='border rounded-md px-2 py-1'
                            />
                            <label className='flex items-center'>End Time:</label>
                            <input
                            type='time'
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className='border rounded-md px-2 py-1'
                            />
                        </div>

                        {/* reminder */}
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex gap-2 items-center'>
                                <IoAlarmOutline className='text-2xl' />
                                <p>Reminder: </p>
                            </div>
                            <select value={reminder||'30'} onChange={(e)=>setReminder(e.target.value)} className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'>
                                <option value="30"> 30 mins before</option>
                                <option value='60'>1 hour before</option>
                                <option value='120'>2 hour before</option>
                                <option value='180'>3 hour before</option>
                            </select>
                        </div>

                        {/* save */}
                        <div className='flex justify-end w-full gap-3'>
                          <ButtonFilled>Cancel</ButtonFilled>
                          <ButtonFilled onClick={editing ? handleUpdateTodo : handleSubmit}>Save</ButtonFilled>
                        </div>

                    </div>
                </div>
            </div>
        </CustomModal>
    </main>
  )
}

export default page