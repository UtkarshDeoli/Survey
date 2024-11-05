"use client"

import Calendar from '@/components/todo-list/Calendar'
import ButtonFilled from '@/components/ui/buttons/ButtonFilled'
import CustomModal from '@/components/ui/Modal'
import { getAllUsers } from '@/networks/user_networks'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CiMail, CiClock2 } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'
import { IoIosCall } from 'react-icons/io'
import { IoAlarmOutline } from 'react-icons/io5'
import { MdRestartAlt } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

const tasks = [
    {
      due: "Overdue 08/08/2024",
      status: "Open",
      activity: "Call",
      title: "Rahul",
      related: "Assignment",
      members: "P",
      action: "..."
    },
    {
      due: "Overdue 08/31/2024",
      status: "Open",
      activity: "Call",
      title: "Rahul",
      related: "Assignment",
      members: "P",
      action: "..."
    },
    {
      due: "Overdue 09/01/2024",
      status: "Open",
      activity: "Call",
      title: "Rahul",
      related: "Assignment",
      members: "P",
      action: "..."
    }
  ];
  
const activities = [
    {
        title:"Call",
        icon:<IoIosCall />
    },
    {
        title:"Mail",
        icon:<CiMail />
    },
    {
        title:"Meeting",
        icon:<GoPeople />
    },
    {
        title:"Task",
        icon:<CiClock2 />
    },
]

function page() {
    const [scheduleModal,setScheduleModal] = useState<boolean>(false)
    const [activity,setActivity] = useState<string|null>("");
    const [title,setTitle] = useState<string|null>("");
    const [status,setStatus] = useState<string|null>("");
    const [reminder,setReminder] = useState<string|null>("");
    const [relatedWith,setRelatedWith] = useState<string|null>("");
    const [assignedUsers,setAssignedUsers] = useState<string[]|null>(null);
    const [selectedDate, setSelectedDate] = useState<any|null>(null);
    const [users,setUsers] = useState<any[]>([]);

    console.log(selectedDate);

    useEffect(()=>{
        getUsers()
    },[])

    //api calls
    async function getUsers(){
        const response = await getAllUsers({});
        if(response.success){
            setUsers(response.data);
        }else{
            toast.error("Error fetching users!")
        }
    }

    async function handleSubmit(){

    }

  return (
    <main>
         <nav className='w-full sticky top-0 left-0 p-4 flex justify-between items-center'>
            <h1 className='text-xl text-secondary-300'>To-Do List</h1>
            <div className='flex gap-2'>
                <ButtonFilled onClick={()=>setScheduleModal(true)}>Add schedule</ButtonFilled>
                <ButtonFilled onClick={()=>router.back()}>Back</ButtonFilled>
            </div>
        </nav>
        {/* search todo section */}
        <section className='flex justify-between px-4 py-2 w-full bg-secondary-100'>
            <input className='px-4 py-3 outline-none border w-[40%] text-secondary-300 focus:ring-2 focus:ring-blue-100 rounded-md' placeholder='Search todos here'/>
        </section>

        {/* todos listing */}
        <section className='p-4'>
            <div className='w-full flex flex-col shadow-md rounded-md flex-1 min-h-[50vh] p-4 border'>
                {/* headings */}
                <div className='grid grid-cols-7 gap-2 border-b-2 pb-2'>   
                    {['Due','Status','Activity','Title','Related','Members','Action'].map(el=><h3 className='font-semibold'>{el}</h3>)}
                </div>

                {/* filters */} 
                <div className='grid grid-cols-7 gap-2 mt-4'>
                    <input type="date" className=' border px-4 py-2'/>
                    <select className=' border px-4 py-2' >
                        <option>Open</option>
                        <option>Closed</option>
                    </select>
                    <select className=' border px-4 py-2' >
                        <option>Open</option>
                        <option>Closed</option>
                    </select>
                    <select className='col-start-5 border px-4 py-2'>
                        <option>Open</option>
                        <option>Closed</option>
                    </select>
                    <div className='flex gap-2 items-center col-start-7 text-xl'>
                        <button className='border rounded-md h-10 w-10 flex justify-center items-center'><FaFilter /></button>
                        <button className='border rounded-md h-10 w-10 flex justify-center items-center'><MdRestartAlt /></button>
                    </div>
                </div>

                {/* TODO list */}
                <div className='flex flex-col mt-4'>
                    {
                        tasks.map(task=>(
                            <div className='grid grid-cols-7 py-5'>
                                <p>{task.due}</p>          
                                <p>{task.status}</p>          
                                <p>{task.activity}</p>          
                                <p>{task.title}</p>          
                                <p>{task.related}</p>          
                                <p>{task.members}</p>          
                                <p>{task.action}</p>          
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
        <CustomModal open={scheduleModal} closeModal={()=>setScheduleModal(false)}>
            <div className='flex flex-col h-[95vh] w-[95vw]'>
                <header className='flex justify-between w-full p-4 items-center bg-primary-300'>
                    <h3 className='font-bold text-white'>Schedule</h3>
                    <button onClick={()=>setScheduleModal(false)}><RxCross1 className='text-white' /></button>
                </header>
                <div className='grid grid-cols-2 h-full w-full text-sm'>
                    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                    <div className='flex flex-col h-full w-full px-8 py-5 gap-5'>
                        {/* activities */}
                        <div className='flex gap-8'>
                            {
                                activities.map(activity=>(
                                    <div className='flex items-center flex-col'>
                                        <button className='h-10 w-10 border-2 rounded-full flex justify-center items-center hover:bg-primary-300 hover:text-white text-xl'>{activity.icon}</button>
                                        <p className='text-sm'>{activity.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        {/* input */}
                        <input className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'/>

                        {/* status */}
                        <div className='flex gap-3 items-center'>
                            <p>Status: </p>
                            {
                                ["Open","Rescheduled","Cancelled","Completed"].map(status=>(
                                    <button className='bg-secondary-200 px-4 py-1 rounded-sm border-l-2 border-secondary-300'>{status}</button>
                                ))
                            }
                        </div>
                        {/* priority */}
                        <div className='flex gap-3 items-center'>
                            <p>Priority: </p>
                            {
                                ["High","Low"].map(Priority=>(
                                    <button className='bg-secondary-200 px-4 py-1 rounded-sm border-l-2 border-secondary-300'>{Priority}</button>
                                ))
                            }
                        </div>

                        {/* text area */}
                        <textarea className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'/>

                        {/* assign to */}
                        <div className='grid grid-cols-2 gap-2'>
                            <p>Assign to: </p>
                            <select className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'>
                                <option selected disabled>Select user</option>
                                {
                                    users && users.map(user=><option value={user._id}>{user.name}</option>)
                                }
                            </select>
                        </div>

                        {/* Related with */}
                        <div className='grid grid-cols-2 gap-2'>
                            <p>Related with: </p>
                            <select className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'>
                                <option selected disabled>Select</option>
                                <option>user1</option>
                                <option>user2</option>
                                <option>user3</option>
                            </select>
                            <select className='border-2 col-start-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'>
                                <option selected disabled>Search for results</option>
                                <option>user1</option>
                                <option>user2</option>
                                <option>user3</option>
                            </select>
                        </div>

                        {/* reminder */}
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex gap-2 items-center'>
                                <IoAlarmOutline />
                                <p>Reminder: </p>
                            </div>
                            <select className='border-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100'>
                                <option>1 hour before</option>
                                <option>2 hour before</option>
                                <option>3 hour before</option>
                            </select>
                        </div>

                        {/* save */}
                        <div className='flex justify-end w-full gap-3'>
                          <ButtonFilled>Cancel</ButtonFilled>
                          <ButtonFilled>Save</ButtonFilled>
                        </div>

                    </div>
                </div>
            </div>
        </CustomModal>
    </main>
  )
}

export default page