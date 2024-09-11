"use client"
import ButtonBordered from "@/components/ui/buttons/ButtonBordered"
import Active from "@/components/ui/status/Active";
import Inactive from "@/components/ui/status/Inactive";
import { FaRegEdit } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { useRouter } from 'next/navigation'
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";


function page() {
  const users = [
    {
      name: 'Rohit Sharma',
      username: 'Rohitsharma',
      email: 'rohitsharma@gmail.com',
      role: 'Manager',
      status: true,
      action: true,
    },
    {
      name: 'Rohit Sharma',
      username: 'Rohitsharma',
      email: 'rohitsharma@gmail.com',
      role: 'Manager',
      status: false,
      action: false,
    },
  ];

  const router = useRouter();
  
  return (
    <div className="w-full bg-my-gray-100">

      <nav className="bg-my-gray-105 w-full py-3 px-8 flex justify-between shadow-md  ">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Users</h1>
        </div>
        <div className="flex justify-end space-x-3">
          <ButtonBordered className="bg-my-blue-600 border-0 text-white">Help</ButtonBordered>
          <ButtonFilled onClick={()=>{router.push('./users/add-multiple-users')}} className="bg-my-blue-400 text-white">Add Multiple Users</ButtonFilled>
          <ButtonFilled onClick={()=>{router.push('./users/add-user')}} className="bg-my-blue-400 text-white">Add Users</ButtonFilled>
          <ButtonFilled className="bg-my-blue-400 text-white">Export Users</ButtonFilled>
        </div>
      </nav>

      <div className="pt-10 px-5">
        <div className="flex">
          <div className="me-5">
            <input className="px-2 py-2 rounded w-[320px] placeholder:text-black placeholder:font-medium" placeholder="Name / Username / Role" type="text" />
          </div>
          <div className="flex space-x-4 items-center me-20">
            <div className="bg-[#2A4999] w-8 h-8  "></div>
            <p className="text-sm font-medium">Hide Disabled Users</p>
          </div>
          <div className="">
            <ButtonBordered className="bg-my-blue-300 text-white me-3 px-8">Search</ButtonBordered>
            <ButtonBordered className="bg-white text-my-blue-3 px-8">Reset</ButtonBordered>
          </div>
        </div>

        <div className="w-full mt-3 text-center text-sm">
          <table className="w-full rounded-t-2xl overflow-hidden ">
            <thead className="bg-my-gray-105 ">
              <tr className="w-full font-medium border-2 text-my-gray-200">
                <td className="rounded-tl-2xl px-4 py-2 w-1/5">Name</td>
                <td className="px-4 py-2 w-1/5">Username</td>
                <td className="px-4 py-2 w-1/4">Email</td>
                <td className="px-4 py-2 w-1/6">Role</td>
                <td className="px-4 py-2 w-1/6">Status</td>
                <td className="px-4 py-2 rounded-tr-2xl w-1/12">Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="bg-white border">
                  <td className="px-4 py-2 w-1/5">{user.name}</td>
                  <td className="px-4 py-2 w-1/5">{user.username}</td>
                  <td className="px-4 py-2 w-1/4">{user.email}</td>
                  <td className="px-4 py-2 w-1/6">{user.role}</td>
                  <td className="px-4 py-2 w-1/6 text-white">{user.status ? <Active /> : <Inactive />}</td>
                  <td className="px-4 py-2 w-1/12 ">{user.action ? <FaRegEdit className="block mx-auto" /> : <MdBlock className="block mx-auto" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default page