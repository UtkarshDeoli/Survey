"use client"
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaQuestionCircle } from 'react-icons/fa';

interface Permissions {
  autoAssignSurvey: boolean;
  viewCollectedData: boolean;
  preventDataDownload: boolean;
  preventDataAnalytics: boolean;
  preventSpatialReport: boolean;
  removeAudioAccess: boolean;
  viewPendingData: boolean;
}

interface FormData {
  userDetails: string;
  userStatus: "active" | "inactive";
  role: "surveyManager" | "boothKaryakarta" | "surveyCollector" | "supportExecutive" | "dataHandler";
  permissions: Permissions;
  selectAllUsers: boolean;
  users: any
}

function AddMultipleUsersPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-my-gray-100">
      <nav className="bg-my-gray-105 w-full py-3 px-8 shadow-md">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Add Multiple Users</h1>
        </div>
      </nav>

      <div className="p-5 text-sm">
        <div className="justify-center items-center min-h-screen bg-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex justify-between space-x-4">
              {/* Left Section */}
              <div className="w-1/2">
                {/* User Details */}
                <div className="w-full">
                  <div className="flex w-full">
                    <div className="w-1/4">
                      <label htmlFor="userDetails" className="text-gray-700 font-medium">User Details</label>
                    </div>
                    <div className="w-3/4">
                      <textarea
                        id="userDetails"
                        rows={8}
                        cols={20}
                        {...register('userDetails', { required: true })}
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                      {errors.userDetails && <p className="text-red-500">User details are required</p>}
                      <p className="text-xs text-gray-500">Enter values as Name, Username, Password.</p>
                      <p className="text-xs text-gray-500">One row will have one user detail.</p>
                    </div>
                  </div>
                </div>

                {/* User Status */}
                <div className="flex items-center mt-3 space-x-2 w-full">
                  <div className="text-gray-700 w-1/4 font-medium">User Status</div>
                  <div className="w-1/2">
                    <select {...register('userStatus', { required: true })} className="border border-gray-300 rounded-md p-2">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.userStatus && <p className="text-red-500">User status is required</p>}
                  </div>
                </div>

                {/* Roles */}
                <div className="flex space-x-3 mt-3 w-full">
                  <div className="text-gray-700 w-1/4 font-medium">Role</div>
                  <div className="space-y-2 w-3/4">
                    {[
                      { label: 'Survey Manager', value: 'surveyManager' },
                      { label: 'Booth Karyakarta', value: 'boothKaryakarta' },
                      { label: 'Survey Collector', value: 'surveyCollector' },
                      { label: 'Support Executive', value: 'supportExecutive' },
                      { label: 'Data Handler', value: 'dataHandler' },
                    ].map((role) => (
                      <div key={role.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={role.value}
                          {...register("role", { required: true })}
                          className="rounded text-blue-500"
                        />
                        <label className="text-gray-700 font-medium">{role.label}</label>
                        <FaQuestionCircle className="text-[#477BFF]" />
                      </div>
                    ))}
                    {errors.role && <p className="text-red-500">Role is required</p>}
                  </div>
                </div>

                {/* Permissions */}
                <div className="space-y-2 mt-3 w-full">
                  {[
                    { label: 'Auto Assign Survey', name: 'autoAssignSurvey' },
                    { label: 'View Own Collected Data', name: 'viewCollectedData' },
                    { label: 'Prevent Data Download', name: 'preventDataDownload' },
                    { label: 'Prevent Data Analytics', name: 'preventDataAnalytics' },
                    { label: 'Prevent Spatial Report', name: 'preventSpatialReport' },
                    { label: 'Remove Audio Recording Access', name: 'removeAudioAccess' },
                    { label: 'View Pending Data', name: 'viewPendingData' },
                  ].map((perm) => (
                    <div key={perm.name} className="flex items-center w-full">
                      <div className="flex space-x-2 items-center w-1/2">
                        <label htmlFor={perm.name} className="text-gray-700 font-medium">{perm.label}</label>
                        <FaQuestionCircle className="text-[#477BFF]" />
                      </div>
                      <input
                        type="checkbox"
                        {...register(`permissions.${perm.name as keyof Permissions}`)}
                        className="rounded text-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section -> Assign Surveys */}
              <div className="w-1/2  ">
                <div className="space-y-4 p-2 rounded-lg border border-[#939393] max-h-fit">
                  <p className="text-gray-700 font-medium">Assign Survey</p>
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
                      <label htmlFor="selectAllUsers" className="text-gray-700">
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
                        <label className="text-gray-700">{survey}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Save, Cancel buttons */}
            <div className="flex justify-center space-x-5 mt-3">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md ">
                Save
              </button>
              <button type="button" className="bg-white border-[#7C7C7C] border-2 text-gray-700 py-2 px-4 rounded-md ">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMultipleUsersPage;
