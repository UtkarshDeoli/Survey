"use client"
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Active from "@/components/ui/status/Active";
import Inactive from "@/components/ui/status/Inactive";
import { getAllUsers } from "@/networks/user_networks";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IUser } from "@/types/user_interfaces";
import CustomModal from "@/components/ui/Modal";
import Switch  from "react-switch";


function page() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res: any = await getAllUsers(search);
    console.log("res::::", res);
    if (res.error) return
    setUsers(res);
  }
  const router = useRouter();

  function handleEditUser(_id: string) {
    router.push(`/admin/users/add-user?_id=${_id}`);
  }
//   const handleToggleClick = (survey: any) => {

//     setPublishModal(true); // Show modal for confirmation
//   };

  return (
    <div className="w-full ">

      <nav className="bg-my-gray-105 w-full py-3 px-8 flex justify-between shadow-md  ">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Users</h1>
        </div>
        <div className="flex justify-end space-x-3">
          <ButtonBordered className="bg-my-blue-600 border-0 text-white">Help</ButtonBordered>
          <ButtonFilled onClick={() => { router.push('./users/add-multiple-users') }} className="bg-my-blue-400 text-white">Add Multiple Users</ButtonFilled>
          <ButtonFilled onClick={() => { router.push('./users/add-user') }} className="bg-my-blue-400 text-white">Add User</ButtonFilled>
          <ButtonFilled className="bg-my-blue-400 text-white">Export Users</ButtonFilled>
        </div>
      </nav>

      <div className="pt-10 px-5">
        <div className="flex">
          <div className="me-5">
            <input className="px-2 py-2 rounded w-[320px] placeholder:text-black placeholder:font-medium" onChange={(e) => { setSearch(e.target.value) }} placeholder="Name / Username / Role" type="text" />
          </div>
          <div className="flex space-x-4 items-center me-20">
            <div className="bg-[#2A4999] w-8 h-8  "></div>
            <p className="text-sm font-medium">Hide Disabled Users</p>
          </div>
          <div className="">
            <ButtonBordered onClick={() => { getData() }} className="bg-my-blue-300 text-white me-3 px-8">Search</ButtonBordered>
            <ButtonBordered className="bg-white text-my-blue-3 px-8">Reset</ButtonBordered>
          </div>
        </div>

        <div className="w-full mt-3 text-center text-sm">
          <div className="w-full rounded-t-2xl border-t border-l border-r border-secondary-200 overflow-hidden ">
            <div className="bg-my-gray-105 grid grid-cols-5 text-left">
              <p className="rounded-tl-2xl p-3">Name</p>
              <p className="p-3">Username</p>
              <p className="p-3">Email</p>
              <p className="p-3">Role</p>
              <div className="flex justify-center gap-5">
                <p className="p-3">Status</p>
                <p className="p-3">Action</p>
              </div>
            </div>
            <div>
              {users && users.length !== 0 && users.map((user, index) => (
                <div key={index} className="bg-white border grid grid-cols-5 text-left">
                  <p className="p-3">{user.name}</p>
                  <p className="p-3">{user.username}</p>
                  <p className="p-3">{user.email}</p>
                  <p className="p-3">{user.role.map((role: any) => (
                    <span>{role},</span>
                  ))
                  }</p>
                  <div className="flex justify-center gap-5 items-center">
                    {/* <p className="p-3 text-white">{user.status === 'active' ? <Active /> : <Inactive />}</p> */}
                    <Switch
                      onChange={() => handleToggleClick(user)}
                      checked={user.status === 'active' ? true : false}
                      onColor="#4CAF50"
                      offColor="#DDDDDD"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      className="transition-switch duration-300 ease-in-out"
                    />
                    <p className="p-3" onClick={() => { handleEditUser(user._id) }}><FaRegEdit className="block mx-auto" /></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* <CustomModal
        open={publishModal}
        closeModal={() => {
          setPublishModal(false);
          setSurveyToPublish(null);
          setisSurveyPublished(null);
        }}
      >
        <div className="flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ">
          <h1 className="text-xl">
            Do you want to {isSurveyPublished ? "Unpublish" : "Publish"} this
            survey?
          </h1>
          <div className="flex gap-2">
            <ButtonFilled onClick={handlePublishSurvey} className="w-40">
              {isSurveyPublished ? "Unpublish" : "Publish"}
            </ButtonFilled>
            <ButtonFilled
              onClick={() => {
                setPublishModal(false);
                setSurveyToPublish(null);
                setisSurveyPublished(null);
              }}
              className="w-40"
            >
              No
            </ButtonFilled>
          </div>
        </div>
      </CustomModal> */}
    </div>
  )
}

export default page