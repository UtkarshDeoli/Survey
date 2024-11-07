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

function Page() {
  const [surveys, setSurveys] = useState<{ name: string }[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [userData, setUserData] = useState<any>();
  const [filter, setFilter] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [rolesData, setRolesData] = useState<any>([]);
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
        const response = await getRoles({ category: "user" });
        if (response.success) {
          setRolesData(response.roles);
        } else {
          toast.error("something went wrong while fetching users");
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const router = useRouter();
  const onSubmit: SubmitHandler<IUser> = async (data: any) => {
    delete data.confirm_password;
    delete data.password
    if(userId) delete data._id;
    const params:any = data;
    console.log("datatata::::", params)
    let res;
    if(userId){
      params.user_id = userId
      res= await updateUsers(params)
    }else{
       res = await addUsers(params);
    }
    if (res) {
      toast.success("Success")
      router.replace("/admin/users");
    }else{
      toast.error("Failed")
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

  return (
    <div className="w-full bg-my-gray-100">
      <nav className="bg-my-gray-105 w-full py-3 px-8 shadow-md ">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Add User</h1>
        </div>
      </nav>

      <div className="p-5 text-sm text-[#797979]">
        <div className="justify-center items-center min-h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg p-6 rounded-lg"
          >
            <div className="flex justify-between space-x-4">
              {/* Left Section */}
              <div className="w-1/2 ">
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
                      <div className="w-1/2 py-2">
                        <label className="block  font-medium">
                          {field.label}
                        </label>
                      </div>
                      <div className="w-1/2">
                        <input
                          disabled={userId ? field.name === "confirm_password" || field.name === "password" :false}
                          type={field.type}
                          placeholder={field.placeholder}
                          {...register(field.name as keyof IUser, {
                            required: userId ? field.name !== "confirm_password" :true,
                          })}
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        {errors[field.name as keyof IUser] && (
                          <p className="text-red-500">This field is required</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* user status active/ inactive */}
                <div className="flex items-center mt-3 space-x-2 w-full">
                  <div className=" w-1/2 font-medium">User Status</div>
                  <div className="w-1/2">
                    <select
                      {...register("status", { required: true })}
                      className="border border-gray-300 w-full text-center rounded-md p-2"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && (
                      <p className="text-red-500">User status is required</p>
                    )}
                  </div>
                </div>

                {/* Roles */}
                {rolesData.length > 0 && (
                  <div className="flex space-x-3 mt-3 w-full">
                    <div className=" w-1/2 font-medium">Role</div>
                    <div className="space-y-2 w-1/2">
                      {rolesData.map((role: any) => {
                        return (
                          <div
                            key={role._id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="Checkbox"
                              value={role._id}
                              {...register("role", { required: true })}
                              className=" text-blue-500"
                            />
                            <label htmlFor={role.name} className=" font-medium">
                              {role.name}
                            </label>
                            <FaQuestionCircle className="text-[#477BFF]" />
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
                <div className="space-y-2 mt-3 w-full">
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
                        <label
                          htmlFor={permission.name}
                          className=" font-medium"
                        >
                          {permission.label}
                        </label>
                        <FaQuestionCircle className="text-[#477BFF]" />
                      </div>
                      <input
                        type="checkbox"
                        {...register(`${permission.name as keyof IUser}`, {
                          required: false,
                        })}
                        className="rounded text-blue-500 float-end"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section -> Assign Surveys */}
              <div className="w-1/2">
                <div className="space-y-4 p-2 rounded-lg border border-[#939393] max-h-fit">
                  <p className="text-gray-700 font-medium">Assign Survey</p>

                  <div className="flex justify-between">
                    <input
                      type="text"
                      onChange={(e) => setFilter(e.target.value)}
                      placeholder="Search survey"
                      className="border border-gray-300 rounded-md px-2 py-1 w-4/5"
                    />
                    <button
                      type="button"
                      className="text-white bg-blue-500 p-1 px-4 rounded-md"
                      onClick={() => {
                        setPageNo(1);
                        getSurveys();
                      }}
                    >
                      Search
                    </button>
                  </div>

                  <div className="space-y-2">
                    {/* Select All functionality */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="selectAllUsers"
                        checked={isAllSelected}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setValue(
                            "assigned_survey",
                            isChecked ? surveys.map((s: any) => s._id) : [],
                          );
                        }}
                        className="rounded text-blue-500"
                      />
                      <label
                        htmlFor="selectAllUsers"
                        className="text-gray-700 font-semibold"
                      >
                        Select All
                      </label>
                    </div>

                    {/* Loop through surveys */}
                    {surveys?.map((survey: any) => (
                      <div
                        key={survey._id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          {...register("assigned_survey")}
                          value={survey._id}
                          checked={assignedSurveys.includes(survey._id)} // Manage checked state
                          onChange={(e) => {
                            const selected = e.target.checked;
                            if (selected) {
                              setValue("assigned_survey", [
                                ...assignedSurveys,
                                survey._id,
                              ]);
                            } else {
                              setValue(
                                "assigned_survey",
                                assignedSurveys.filter((s) => s !== survey._id),
                              );
                            }
                          }}
                          className="rounded text-blue-500"
                        />
                        <label className="text-gray-700">{survey.name}</label>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => {
                        if (pageNo > 1) setPageNo(pageNo - 1);
                      }}
                      className="text-white bg-blue-500 p-1 px-4 rounded-md"
                    >
                      Previous
                    </button>
                    <p className="text-xs">
                      {pageNo} of {totalPages} Pages
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        if (pageNo < totalPages) setPageNo(pageNo + 1);
                      }}
                      className="text-white bg-blue-500 p-1 px-4 rounded-md"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* save, cancel button */}
            <div className="flex justify-center space-x-5 mt-3">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md "
              >
                {userId ? "Update" : "Save"}
              </button>
              <button
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
