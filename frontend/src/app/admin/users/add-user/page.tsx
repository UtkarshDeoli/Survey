"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaQuestionCircle } from 'react-icons/fa';
import { IUser } from '@/types/user_interfaces';
import { addUsers } from '@/networks/user_networks';
import { useRouter } from 'next/navigation';

function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
  const router = useRouter()
  const onSubmit: SubmitHandler<IUser> = async (data:IUser) => {
    delete data.confirm_password;
    const params=data
    console.log("datatata::::",params)
    const res=await addUsers(params);
    // if(res){
    //   router.replace('/admin/users')
    // }
  };

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
                  {
                    [
                      { label: "User Name", name: "username", type: "text", placeholder: "User Name" },
                      { label: "Name", name: "name", type: "text", placeholder: "Name" },
                      { label: "Email", name: "email", type: "email", placeholder: "Email" },
                      { label: "Password", name: "password", type: "password", placeholder: "Password" },
                      { label: "Confirm Password", name: "confirm_password", type: "password", placeholder: "Confirm password" },
                    ].map((field, index) => (
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
                            {...register(field.name as keyof IUser, { required: true })}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                          {errors[field.name as keyof IUser] && <p className="text-red-500">This field is required</p>}
                        </div>
                      </div>
                    ))
                  }
                </div>

                {/* user status active/ inactive */}
                <div className="flex items-center mt-3 space-x-2 w-full">
                  <div className=" w-1/2 font-medium">User Status</div>
                  <div className="w-1/2">
                    <select
                      {...register('status', { required: true })}
                      className="border border-gray-300 w-full text-center rounded-md p-2"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && <p className="text-red-500">User status is required</p>}
                  </div>
                </div>

                {/* Roles */}
                <div className="flex space-x-3 mt-3 w-full">
                  <div className=" w-1/2 font-medium">Role</div>
                  <div className="space-y-2 w-1/2">
                    {[
                      { label: 'Admin', name: 'admin' },
                      { label: 'Survey Manager', name: 'survey_manager' },
                      { label: 'Booth Karyakarta', name: 'booth_karyakarta' },
                      { label: 'Survey Collector', name: 'survey_collector' },
                      { label: 'Support Executive', name: 'support_executive' },
                    ].map((role) => (
                      <div key={role.name} className="flex items-center space-x-2">
                        <input
                          type="Checkbox"
                          value={role.name}
                          {...register("role", { required: true })}
                          className=" text-blue-500"
                        />
                        <label
                          htmlFor={role.name}
                          className=" font-medium"
                        >
                          {role.label}
                        </label>
                        <FaQuestionCircle className="text-[#477BFF]" />
                      </div>
                    ))}
                    {errors.role && <p className="text-red-500">At least one role must be selected</p>}
                  </div>
                </div>

                {/* Permissions */}
                <div className="space-y-2 mt-3 w-full">
                  {[
                    { label: 'Auto Assign Survey', name: 'auto_assign_survey' },
                    { label: 'View Own Collected Data', name: 'view_own_collected_data' },
                    { label: 'Prevent Data Download', name: 'prevent_data_download' },
                    { label: 'Prevent Data Analytics', name: 'prevent_data_analytics' },
                    { label: 'Prevent Spatial Report', name: 'prevent_spatial_report' },
                    { label: 'Remove Audio Recording Access', name: 'remove_audio_recording_access' },
                    { label: 'View Pending Data', name: 'view_pending_data' },
                  ].map((permission) => (
                    <div key={permission.name} className="flex items-center w-full">
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
                        {...register(`${permission.name as keyof IUser}`, { required: false })}
                        className="rounded text-blue-500 float-end"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section -> Assign Surveys */}
              {/* <div className="w-1/2  ">
                <div className="space-y-4 p-2 rounded-lg border-2 border-[#939393] max-h-fit">
                  <p className=" font-medium">Assign Survey</p>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Search survey"
                      className="border border-gray-300 rounded-md px-2 py-1 w-4/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register('selectAllUsers')}
                        className="rounded text-blue-500"
                      />
                      <label htmlFor="selectAllUsers" className="">
                        Select All
                      </label>
                    </div>
                    {['Test 1', 'Test 2'].map((survey) => (
                      <div key={survey} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register('users')}
                          value={survey}
                          className="rounded text-blue-500"
                        />
                        <label className="">{survey}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>

            {/* save, cancel button */}
            <div className="flex justify-center space-x-5 mt-3">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md "
              >
                Save
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

export default Page;
