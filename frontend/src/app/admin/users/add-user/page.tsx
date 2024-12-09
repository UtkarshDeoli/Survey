"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaQuestionCircle } from "react-icons/fa";
import { IUser } from "@/types/user_interfaces";
import { addUsers, updateUsers } from "@/networks/user_networks";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllSurveys } from "@/networks/survey_networks";
import { getUser } from "@/networks/user_networks";
import { getRoles } from "@/networks/role_networks";
import toast from "react-hot-toast";
import Loader from "@/components/ui/Loader";

function Page() {
  const [surveys, setSurveys] = useState<{ name: string }[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [userData, setUserData] = useState<any>();
  const [filter, setFilter] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [rolesData, setRolesData] = useState<any>([]);
  const [rolesLoading,setRolesLoading] = useState<boolean>(false);
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUser>({ defaultValues: userData });
  const searchParams = useSearchParams();
  const assignedSurveys = watch("assigned_survey") || [];

  const isAllSelected = assignedSurveys.length === surveys?.length;

  useEffect(() => {
    setValue("selectAll", isAllSelected);
  }, [assignedSurveys, setValue, isAllSelected]);

  useEffect(() => {
    const user_Id = searchParams.get("_id");
    setUserId(user_Id);

    const fetchRoles = async () => {
      try {
        setRolesLoading(true);
        const response = await getRoles({ category: "user" });
        if (response.success) {
          setRolesData(response.roles);
        } else {
          toast.error("something went wrong while fetching users");
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }finally{
        setRolesLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const router = useRouter();
  const onSubmit: SubmitHandler<IUser> = async (data: any) => {
    delete data.confirm_password;
    if (userId) delete data._id;
    const params: any = data;
    console.log("datatata::::", params);
    let res;
    if (userId) {
      params.user_id = userId;
      res = await updateUsers(params);
    } else {
      console.log("add user calling");

      res = await addUsers(params);
    }
    console.log("response of adding user --->",res)
    if (res.success) {
      toast.success("Success");
      router.replace("/admin/users");
    } else {
      if(res.error) toast.error(res.error.response.data.message);
      else toast.error("Failed");
    }
  };

  async function getSurveys(page: number = 1) {
    const res = await getAllSurveys({
      page: page,
      filter: filter,
      created_by: "rohitchand490@gmail.com",
    });
    // console.log(res.survey);
    setTotalPages(res.totalPages);
    console.log("res::", res);
    setSurveys(res.survey);
  }

  useEffect(() => {
    getSurveys(pageNo);
  }, [pageNo]);

  useEffect(() => {
    if (userId) {
      console.log("user_id::");
      getUserData();
    }
  }, [userId]);

  useEffect(() => {
    if (userData) {
      console.log("userData::", userData);
      Object.keys(userData).forEach((key: any) => {
        setValue(key, userData[key]);
      });
    }
  }, [userData]);

  async function getUserData() {
    const response = await getUser(userId);
    console.log("ressese:://", response);
    if (response) {
      setUserData(response);
    } else {
      // toast.error("something went wrong")
    }
  }
  if(rolesLoading) return <Loader/>
  return (
    <div className="w-full bg-my-gray-100 h-[calc(100vh-80px)]">
      <nav className="bg-mid-gray w-full flex items-center h-20 px-4 shadow-md ">
        <div>
          <h1 className="text-2xl font-bold">Add User</h1>
        </div>
      </nav>

      <div className="p-5 text-sm text-[#797979] bg-light-gray">
        <div className="justify-center items-center bg-lighter-gray">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2  shadow-lg p-6 rounded-[20px] h-full"
          >
            <div className="flex gap-10 space-x-4">
              {/* Left Section */}
              <div className="w-[60%]">
                {/* user details */}
                <div className="w-full">
                  {[
                    {
                      label: "User Name",
                      name: "username",
                      type: "text",
                      placeholder: "User Name",
                    },
                    {
                      label: "Name",
                      name: "name",
                      type: "text",
                      placeholder: "Name",
                    },
                    {
                      label: "Email",
                      name: "email",
                      type: "email",
                      placeholder: "Email",
                    },
                    {
                      label: "Password",
                      name: "password",
                      type: "password",
                      placeholder: "Password",
                    },
                    {
                      label: "Confirm Password",
                      name: "confirm_password",
                      type: "password",
                      placeholder: "Confirm password",
                    },
                  ].map((field, index) => (
                    <div className="flex w-full space-y-2" key={index}>
                      <div className="w-[20%] py-2">
                        <label className="block  font-medium">
                          {field.label}
                        </label>
                      </div>
                      <div className="w-[80%]">
                        <input
                          disabled={
                            userId
                              ? field.name === "confirm_password" ||
                                field.name === "password"
                              : false
                          }
                          type={field.type}
                          placeholder={field.placeholder}
                          {...register(field.name as keyof IUser, {
                            required: userId
                              ? field.name !== "confirm_password"
                              : true,
                          })}
                          className="border border-gray-300 rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-primary-50"
                        />
                        {errors[field.name as keyof IUser] && (
                          <p className="text-red-500">This field is required</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* user status active/ inactive */}
                {/* <div className="flex space-y-2 items-center mt-3 space-x-2 w-full">
                  <div className="w-[20%] font-medium">User Status</div>
                  <div className="w-[80%]">
                    <select
                      {...register("status", { required: true })}
                      className="border border-gray-300 w-full text-center rounded-md p-3 outline-none focus:ring-2 focus:ring-primary-50"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && (
                      <p className="text-red-500">User status is required</p>
                    )}
                  </div>
                </div> */}
                <div className="flex space-y-2 items-center mt-3 space-x-2 w-full">
                  <div className="w-[20%] font-medium">User Status</div>
                  <div className="w-[80%]">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setValue("status", "active")}
                        className={`px-4 py-2 rounded-md ${
                          watch("status") === "active"
                            ? "bg-primary-300 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        Active
                      </button>
                      <button
                        type="button"
                        onClick={() => setValue("status", "inactive")}
                        className={`px-4 py-2 rounded-md ${
                          watch("status") === "inactive"
                            ? "bg-primary-300 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        Inactive
                      </button>
                    </div>
                    {errors.status && (
                      <p className="text-red-500 mt-2">
                        User status is required
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="w-[40%]">
                {/* Roles */}
                {rolesData.length > 0 && (
                  <div className="flex flex-col gap-3 w-full border-2 p-3 rounded-[20px]">
                    <div className="font-semibold text-xl">Role</div>
                    <div className="gap-3 flex flex-col w-1/2">
                      {rolesData.map((role: any) => {
                        return (
                          <div
                            key={role._id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              id={role.name} // Match the label's htmlFor attribute
                              type="checkbox"
                              value={role._id}
                              {...register("role", { required: true })}
                              className="appearance-none w-4 h-4 border-2 border-primary-300 checked:bg-primary-100 checked:text-white rounded-full mt-1"
                            />
                            <label
                              htmlFor={role.name}
                              className="font-medium cursor-pointer"
                            >
                              {role.name}
                            </label>
                          </div>
                        );
                      })}
                      {errors.role && (
                        <p className="text-red-500">
                          At least one role must be selected
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* Permissions */}

                {/* <div className="space-y-2 mt-3 w-full rounded-[20px] border-2 p-4">
                  {[
                    { label: "Auto Assign Survey", name: "auto_assign_survey" },
                    {
                      label: "View Own Collected Data",
                      name: "view_own_collected_data",
                    },
                    {
                      label: "Prevent Data Download",
                      name: "prevent_data_download",
                    },
                    {
                      label: "Prevent Data Analytics",
                      name: "prevent_data_analytics",
                    },
                    {
                      label: "Prevent Spatial Report",
                      name: "prevent_spatial_report",
                    },
                    {
                      label: "Remove Audio Recording Access",
                      name: "remove_audio_recording_access",
                    },
                    { label: "View Pending Data", name: "view_pending_data" },
                  ].map((permission) => (
                    <div
                      key={permission.name}
                      className="flex items-center w-full"
                    >
                      <div className="flex space-x-2 items-center w-1/2">
                        <input
                          id={permission.name} // Match the label's htmlFor attribute
                          type="checkbox"
                          {...register(`${permission.name as keyof IUser}`, {
                            required: false,
                          })}
                          className="appearance-none cursor-pointer w-4 h-4 border-2 border-primary-300 checked:bg-primary-100 checked:text-white rounded-full mt-1"
                        />
                        <label
                          htmlFor={permission.name}
                          className=" font-medium cursor-pointer"
                        >
                          {permission.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* save, cancel button */}
            <div className="flex justify-center space-x-5 mt-3">
              <button
                type="submit"
                className="bg-primary-300 text-white py-2 px-4 rounded-md "
              >
                {userId ? "Update" : "Save"}
              </button>
              <button
                onClick={()=>router.back()}
                type="button"
                className="bg-white border-[#7C7C7C] border-2  py-2 px-4 rounded-md "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
