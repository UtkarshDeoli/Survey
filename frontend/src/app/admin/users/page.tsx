"use client";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import { getAllUsers } from "@/networks/user_networks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IUser } from "@/types/user_interfaces";
import Switch from "react-switch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Loader from "@/components/ui/Loader";

function page() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [limit,setLimit] = useState <number> (10);
  const [page,setPage] = useState <number> (1);
  const [totalPages,setTotalPages] = useState <number>(0);
  const [loading,setLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, [limit,page]);

  async function getData() {
    const params = {searchBarInput,page,limit}
    setLoading(true);
    const res: any = await getAllUsers(params);
    setLoading(false);
    console.log("res::::", res);
    if (res.error) return;
    setUsers(res.data);
    setTotalPages(res.totalPages)
  }
  const router = useRouter();

  function handleEditUser(_id: string) {
    router.push(`/admin/users/add-user?_id=${_id}`);
  }
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    setLimit(newLimit)
    setPage(1)
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page-1)
    }
  };
  const doNothing = () => {}
  return (
    <div className="w-full bg-[#ECF0FA] text-sm h-full">
      <nav className="h-16 w-full py-3 px-8 flex justify-between">
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

      <div className="p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2">
        <div className="flex justify-between">
          <input
            className="w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300"
            placeholder="Name / Username / Role"
            value={searchBarInput}
            onChange={(e) => setSearchBarInput(e.target.value)}
          />
          {/*
            <div className="flex space-x-4 items-center me-20">
              <div className="bg-[#2A4999] w-8 h-8  "></div>
              <p className="text-sm font-medium">Hide Disabled Users</p>
            </div>
            */}
          <div className="flex space-x-3">
            <ButtonFilled
              onClick={() => {
                getData();
              }}
              className="text-[14px] font-semibold flex gap-2 items-center justify-center"
            >
              Search
            </ButtonFilled>
            <div className="flex space-x-3">
              <ButtonBordered>Reset</ButtonBordered>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 py-5 text-sm">
        <div className="grid grid-cols-5 text-white bg-blue-500 font-semibold py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
          <p className="col-span-1 flex justify-center items-center">Name</p>
          <p className="col-span-1 flex justify-center items-center">
            Username
          </p>
          <p className="col-span-1 flex justify-center items-center">Email</p>
          <p className="col-span-1 flex justify-center items-center">Role</p>
          <div className="flex col-span-1 gap-12 justify-center">
            <p className="flex justify-center items-center">Status</p>
            <p className="flex justify-center items-center">Action</p>
          </div>
        </div>
        {loading && <Loader className="h-[50vh] flex justify-center items-center w-full"/>}
        {!loading && users &&
          users.length !== 0 &&
          users.map((user, index) => (
            <div
              key={index}
              className="bg-white border grid px-8 py-[16px] grid-cols-5 text-center text-black"
            >
              <p className="col-span-1 flex justify-center items-center">
                {user.name}
              </p>
              <p className="col-span-1 flex justify-center items-center">
                {user.username}
              </p>
              <p className="col-span-1 flex justify-center items-center">
                {user.email}
              </p>
              <div className="col-span-1 flex justify-center items-center">
                <div className="flex flex-wrap gap-1 justify-center">
                  {user.role.map((role, roleIndex) => (
                    <span key={roleIndex} className="whitespace-nowrap">
                      {role}
                      {roleIndex < user.role.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-12 items-center">
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
        {
          !loading && (
            <div className="flex gap-3 items-center mt-4">
                  {/* Limit Select */}
                  <div>
                    <label htmlFor="limit-select" className="mr-2">
                      Show:
                    </label>
                    <select
                      id="limit-select"
                      value={limit}
                      onChange={handleLimitChange}
                      className="p-2 border rounded-md"
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePreviousPage}
                      disabled={page === 1}
                      className="p-2 border rounded-md disabled:opacity-50"
                    >
                      <IoIosArrowBack />
                    </button>
                    <span>
                      Page {page} of {totalPages}
                    </span>
                    <button
                      onClick={handleNextPage}
                      disabled={page === totalPages}
                      className="p-2 border rounded-md disabled:opacity-50"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
            </div>
          )
        }
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
