"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  FaQuestionCircle } from "react-icons/fa";
import {
  createKaryakarta,
  getKaryakarta,
  updateKaryakarta,
} from "@/networks/user_networks";
import { useRouter, useSearchParams } from "next/navigation";
import {

  getSurveyByAcAndBooth,
} from "@/networks/survey_networks";

import { checkToken } from "@/utils/common_functions";
import toast from "react-hot-toast";
import { districts } from "@/utils/devData";
import { getRoles } from "@/networks/role_networks";

const inputs = [
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
  {
    label: "AC_NO",
    name: "ac_no",
    type: "text",
    placeholder: "AC number",
  },
  {
    label: "BOOTH_NO",
    name: "booth_no",
    type: "text",
    placeholder: "Booth number",
  },
];
function Page() {
  const [userData, setUserData] = useState<any>();
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  //response selection states
  const [selectedResponses, setSelectedResponses] = useState<string[]>([]);
  const [selectedSurvey, setSelectdSurvey] = useState<string | null>(null);


  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: userData });
  const searchParams = useSearchParams();

  const ac_no = watch("ac_no");
  const booth_no = watch("booth_no");
  const role = watch("role");
  const [rolesData, setRolesData] = useState<any>([]);

  console.log("role is -->", role === "Panna Pramukh");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles({ category: "karyakarta" });
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
  }, [searchParams]);

  useEffect(() => {
    const user_Id = searchParams.get("_id");
    setUserId(user_Id);
  }, []);
  useEffect(() => {
    const token = checkToken();
    if (token) {
      setUser(token);
    }
  }, []);

  const router = useRouter();
  const onSubmit = async (data: any) => {
    if (selectedSurvey) data.survey_id = selectedSurvey;
    if (selectedResponses) data.responses = selectedResponses;
    if (data.password.trim().length > 0) {
      if (data.password !== data.confirm_password) {
        toast.error("Passwords donot match!");
        return;
      }
    }
    delete data.confirm_password;
    if (user) {
      data.created_by = user.email;
    }
    const params = data;
    let res;
    if (userId) {
      params.id = userId;
      if (params.password.trim().length === 0) delete params.password;
      res = await updateKaryakarta(params);
    } else {
      res = await createKaryakarta(params);
    }
    console.log("response after creating karyakarta --->",res);
    if (res.success) {
      toast.success("Karyakarta created successfully!");
      router.replace("/admin/karyakarta");
    }else{
      if(res.error){
        toast.error(res.error.response.data.message)
      }else{
        toast.error("Failed to create karyakarta!")
      }
    }
    console.log("data----->", data);
  };

  


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
      setValue("role", userData.role[0]);
      setValue("password", "");
      setValue("confirm_password", "");
    }
  }, [userData]);

  async function getUserData() {
    const response = await getKaryakarta(userId);
    console.log("ressese:://", response);
    if (response) {
      setUserData(response);
    } else {
      // toast.error("something went wrong")
    }
  }


  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col bg-my-gray-100 ">
      <nav className="bg-my-gray-105 w-full py-3 px-8 ">
        <div className="text-my-gray-200">
          <h1 className="text-xl font-semibold">Add Karyakarta</h1>
        </div>
      </nav>

      <div className="p-5 flex-1 text-sm text-[#797979]">
        <div className="justify-center items-center">
          <form className="bg-lighter-gray border-2 p-6 rounded-[20px] h-full">
            <div className="flex gap-8 space-x-4">
              {/* Left Section */}
              <div className="w-1/2 ">
                {/* user details */}
                <div className="w-full">
                  {inputs.map((field, index) => (
                    <div className="flex w-full space-y-2" key={index}>
                      <div className="w-1/2 py-2">
                        <label className="block  font-medium">
                          {field.label}
                        </label>
                      </div>
                      <div className="w-1/2">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          {...register(field.name, {
                            required: userId ? false : true,
                          })}
                          className="border border-gray-300 rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-primary-50"
                        />
                        {errors[field.name] && (
                          <p className="text-red-500">This field is required</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center mt-3 space-x-2 w-full">
                  <div className=" w-1/2 font-medium">District</div>
                  <div className="w-1/2">
                    <select
                      {...register("district", {
                        required: userId ? false : true,
                      })}
                      className="border border-gray-300 w-full text-center rounded-md p-2 outline-none focus:ring-2 focus:ring-primary-50"
                    >
                      <option
                        value=""
                        selected
                        disabled={true}
                        className="disabled:bg-gray-200"
                      >
                        Select Value
                      </option>
                      {districts.map((district) => (
                        <option value={district}>{district}</option>
                      ))}
                    </select>
                    {errors.status && (
                      <p className="text-red-500">User status is required</p>
                    )}
                  </div>
                </div>

                {/* user status active/ inactive */}
                <div className="flex items-center mt-3 space-x-2 w-full">
                  <div className=" w-1/2 font-medium">User Status</div>
                  <div className="w-1/2">
                    <select
                      {...register("status", {
                        required: userId ? false : true,
                      })}
                      className="border border-gray-300 w-full text-center rounded-md p-2 outline-none focus:ring-2 focus:ring-primary-50"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && (
                      <p className="text-red-500">User status is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                {/* Roles */}
                <div className="flex flex-col gap-4">
                  <div className="text-lg font-medium">Role</div>
                  <div className="flex flex-col gap-5 space-y-2 w-1/2">
                    {rolesData.map((role: any) => (
                      <div
                        key={role._id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          id={role._id} // Set the id to match the label's htmlFor
                          value={role._id}
                          {...register("role", {
                            required: userId ? false : true,
                          })}
                          className="text-blue-500 h-5 w-5"
                        />
                        <label
                          htmlFor={role._id} // Ensure htmlFor matches the input's id
                          className="font-medium flex items-center gap-3 cursor-pointer"
                        >
                          {role.name}
                        </label>
                        {/* <FaQuestionCircle className="text-[#477BFF]" /> */}
                      </div>
                    ))}
                    {errors.role && (
                      <p className="text-red-500">
                        At least one role must be selected
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* save, cancel button */}
          </form>
        </div>
        <div className="sticky bottom-0 left-0  p-2 flex justify-center space-x-5 mt-3">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-primary-300 text-white py-2 px-4 rounded-md "
          >
            {userId ? "Update" : "Save"}
          </button>
          <button
            onClick={() => router.back()}
            type="button"
            className="bg-white border-[#7C7C7C] border-2  py-2 px-4 rounded-md "
          >
            Cancel
          </button>
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
