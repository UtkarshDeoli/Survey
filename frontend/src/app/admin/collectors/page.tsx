"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Loader from "@/components/ui/Loader";
import useUser from "@/hooks/useUser";
import { getSupervisorCollectors } from "@/networks/user_networks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [users, setUsers] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [reset,setReset] = useState<boolean>(true);
  const userData = useUser();
  const router = useRouter()
  useEffect(() => {
    getCollectors();
  }, [userData,reset]);
  async function getCollectors() {
    if (userData) {
      setLoading(true);
      const response = await getSupervisorCollectors({
        supervisor_id: userData.id,
        name:searchBarInput
      });
      if (response.success) {
        setUsers(response.data);
      } else {
        toast.error("Error fetching collectors");
      }
      setLoading(false);
    }
  }
  return (
    <div className="w-full bg-[#ECF0FA] text-sm min-h-[calc(100vh-80px)]">
      {/* header */}
      <nav className="h-16 w-full py-3 px-8 flex justify-between">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Collectors</h1>
        </div>
      </nav>

      {/* search bar */}
      <div className="p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2">
        <div className="flex justify-between">
          <input
            className="w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
            placeholder="Collector name"
            value={searchBarInput}
            onChange={(e) => setSearchBarInput(e.target.value)}
          />
          <div className="flex space-x-3">
            <ButtonFilled
              onClick={() => {
                getCollectors();
              }}
              className="text-[14px] font-semibold flex gap-2 items-center justify-center"
            >
              Search
            </ButtonFilled>
            <div className="flex space-x-3">
              <ButtonFilled onClick={()=>{
                setSearchBarInput("");
                setReset(!reset)
              }} className="bg-dark-gray">Reset</ButtonFilled>
            </div>
          </div>
        </div>
      </div>

      {/* colllector data */}
      <div className="relative w-[96%] mx-auto text-sm  max-h-[60vh] overflow-y-auto vertical-scrollbar">
        <div className="sticky top-0 left-0 z-10 grid grid-cols-5 text-white bg-dark-gray font-semibold py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
          <p className="col-span-1 flex justify-center items-center">Name</p>
          <p className="col-span-1 flex justify-center items-center">
            Username
          </p>
          <p className="col-span-1 flex justify-center items-center">Email</p>
          <p className="col-span-1 flex justify-center items-center">Role</p>
          <p className="col-span-1 flex justify-center items-center">Action</p>
        </div>
        {loading && (
          <Loader className="h-[50vh] flex justify-center items-center w-full" />
        )}
        {!loading && users && users.length !== 0 ? (
          users.map((user: any, index: number) => (
            <div
              key={index}
              className="bg-mid-gray border-2 grid p-2 grid-cols-5 gap-2 text-center text-black"
            >
              <p className="col-span-1 flex justify-center items-center font-semibold ">
                {user.name}
              </p>
              <p className="col-span-1 flex justify-center items-center ">
                {user.username}
              </p>
              <p className="col-span-1 flex justify-center items-center ">
                {user.email}
              </p>
              <div className="col-span-1 flex justify-center items-center ">
                <div className="flex flex-wrap gap-1 justify-center">
                  {user.role.map((role: any, roleIndex: number) => (
                    <span key={roleIndex} className="whitespace-nowrap">
                      {role.name}
                      {roleIndex < user.role.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
              <ButtonFilled onClick={()=>router.push(`/admin/collectors/collector-surveys?collector_id=${user._id}`)} className="w-fit mx-auto">View survey</ButtonFilled>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-[20vh] w-full">
            No user found
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
