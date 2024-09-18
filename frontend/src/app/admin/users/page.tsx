"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Active from "@/components/ui/status/Active";
import Inactive from "@/components/ui/status/Inactive";
import { getAllUsers } from "@/networks/user_networks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IUser } from "@/types/user_interfaces";
import CustomModal from "@/components/ui/Modal";
import Switch from "react-switch";

function page() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res: any = await getAllUsers(searchBarInput);
    console.log("res::::", res);
    if (res.error) return;
    setUsers(res);
  }
  const router = useRouter();

  function handleEditUser(_id: string) {
    router.push(`/admin/users/add-user?_id=${_id}`);
  }
  //   const handleToggleClick = (survey: any) => {

  //     setPublishModal(true); // Show modal for confirmation
  //   };

  function doNothing() {}

  return (
    <div className="w-full bg-[#ECF0FA] text-sm h-full">
      <nav className="w-full py-3 px-8 flex justify-between">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Users</h1>
        </div>
        <div className="flex justify-end space-x-3 text-xs">
          <ButtonFilled className="bg-my-blue-600">Help</ButtonFilled>
          <ButtonFilled
            onClick={() => {
              router.push("./users/add-multiple-users");
            }}
          >
            Add Multiple Users
          </ButtonFilled>
          <ButtonFilled
            onClick={() => {
              router.push("./users/add-user");
            }}
          >
            Add User
          </ButtonFilled>
          <ButtonFilled>Export Users</ButtonFilled>
        </div>
      </nav>

      <div className="p-5 text-sm text-my-gray-200">
        <div className="flex justify-between  bg-white p-3 rounded-xl">
          <div className="flex me-5 gap-8">
            <input
              className="w-[387px] h-[41px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
              placeholder="Name / Username / Role"
              value={searchBarInput}
              onChange={(e) => setSearchBarInput(e.target.value)}
            />
            <div className="flex space-x-4 items-center me-20">
              <div className="bg-[#2A4999] w-8 h-8  "></div>
              <p className="text-sm font-medium">Hide Disabled Users</p>
            </div>
          </div>

          <div className="flex gap-4">
            <ButtonFilled
              onClick={() => {
                getData();
              }}
            >
              Search
            </ButtonFilled>
            <ButtonBordered>Reset</ButtonBordered>
          </div>
        </div>

        <div className="w-full mt-3 text-center text-sm">
          <div className="w-full overflow-hidden border-2 rounded-t-2xl ">
            <div className="bg-blue-500 text-white grid grid-cols-5 text-center border-b">
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
              {users &&
                users.length !== 0 &&
                users.map((user, index) => (
                  <div
                    key={index}
                    className="bg-white border grid grid-cols-5 text-center text-black"
                  >
                    <p className="p-3">{user.name}</p>
                    <p className="p-3">{user.username}</p>
                    <p className="p-3">{user.email}</p>
                    <p className="p-3">
                      {user.role.map((role: any) => (
                        <span>{role},</span>
                      ))}
                    </p>
                    <div className="flex justify-center gap-5 items-center">
                      {/* <p className="p-3 text-white">{user.status === 'active' ? <Active /> : <Inactive />}</p> */}
                      <Switch
                        onChange={() => doNothing()}
                        checked={user.status === "active" ? true : false}
                        onColor="#4CAF50"
                        offColor="#DDDDDD"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        className="transition-switch duration-300 ease-in-out"
                      />
                      <p
                        className="p-3"
                        onClick={() => {
                          handleEditUser(user._id);
                        }}
                      >
                        <FaRegEdit className="block mx-auto" />
                      </p>
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
  );
}

export default page;
