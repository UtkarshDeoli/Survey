"use client"
import React, { Suspense, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaQuestionCircle } from 'react-icons/fa';
import { IUser } from '@/types/user_interfaces';
import { addMultipleUsers } from '@/networks/user_networks';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAllSurveys } from '@/networks/survey_networks';
import { getUser } from '@/networks/user_networks';


function Page() {
  const [surveys, setSurveys] = useState<{ name: string }[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [userData, setUserData] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();
  const [userArray, setUserArray] = useState<any>([]);
  const [filter, setFilter] = useState<string>('');
  const [userId, setUserId] = useState<string | null>(null);
  const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm<IUser>({ defaultValues: userData});
  const searchParams = useSearchParams();
  const assignedSurveys = watch('assigned_survey') || [];

  const isAllSelected = assignedSurveys.length === surveys?.length;

  useEffect(() => {
    setValue('selectAll', isAllSelected);
  }, [assignedSurveys, setValue, isAllSelected]);


  useEffect(() => {
    const user_Id = searchParams.get('_id');
    setUserId(user_Id);
    
  }, [])

  const router = useRouter()


  const parseUserDetails = (input: string) => {
    // Split the input by new lines to get each row
    const rows = input.trim().split('\n');

    // Map over each row, split by commas and trim any extra spaces
    return rows.map((row) => row.split(',').map((item) => item.trim()));
  };

  const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
    delete data.confirm_password;
    const params = data
    const parsedArray = parseUserDetails(userDetails);
    setUserArray(parsedArray);
    // console.log("datatata::::", params)
    params.userDetails = parsedArray;
    for (let i = 0; i < parsedArray.length; i++) {
      if(parsedArray[i].length !== 4){
        alert("Please enter user details in correct format");
        return;
      }
      if(parsedArray[i][0] === "" || parsedArray[i][1] === "" || parsedArray[i][2] === "" || parsedArray[i][3] === ""){
        alert("Some Fields are empty");
        return;
      }
    }
    const res = await addMultipleUsers(params);
    if (res) {
      router.replace('/admin/users')
    }
  };

  async function getSurveys(page: number = 1) {
    const res = await getAllSurveys({page: page, filter: filter, created_by: "rohitchand490@gmail.com" });
    // console.log(res.survey);
    setTotalPages(res.totalPages);
    console.log("res::----", res)
    setSurveys(res.survey);
  }

  useEffect(() => {
    getSurveys(pageNo);
  }, [pageNo])

  
  useEffect(() => {
  if (userId) {
    console.log("user_id::", )
    getUserData();
  }} , [userId])

  useEffect(() => {
    if (userData) {
      console.log("userData::", userData);
      Object.keys(userData).forEach((key: any) => {
        setValue(key, userData[key]);
      });

    }
  }, [userData]);


  async function getUserData() {
    const response = await getUser(userId)
    console.log("ressese:://",response)
    if (response) {
      setUserData(response)
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
              <div className="w-[60%] ">
                {/* user details */}
                <div className="w-full">
                      <div className="flex w-full space-y-2">
                        <div className="w-[40%] py-2">
                          <label className="block  font-medium">
                            User Details
                          </label>
                        </div>
                        <div className="w-[60%]">
                          <textarea
                            onChange={(e) => {setUserDetails(e.target.value)}}
                            placeholder='John Doe, johndoe, john@example.com, password123'
                            rows={5}
                            className="border border-gray-300 rounded-md p-2 w-full"
                            required={true}
                          />
                          <p className='text-xs'>Enter Values As Name, Username, Email, Password. One Row will have one User Detail.</p>
                        </div>
                      </div>
                </div>

                {/* user status active/ inactive */}
                <div className="flex items-center mt-3  w-full">
                  <div className=" w-[40%] font-medium">User Status</div>
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
                <div className="flex mt-3 w-full">
                  <div className=" w-[40%] font-medium">Role</div>
                  <div className="space-y-2 w-1/2">
                    {[
                      { label: 'Survey Manager', name: 'Survey Manager' },
                      { label: 'Booth Karyakarta', name: 'Booth Karyakarta' },
                      { label: 'Survey Collector', name: 'Survey Collector' },
                      { label: 'Support Executive', name: 'Support Executive' },
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
                      <div className="flex space-x-2 items-center w-[40%]">
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
              <div className="w-[40%]">
                <div className="space-y-4 p-2 rounded-lg border border-[#939393] max-h-fit">
                  <p className="text-gray-700 font-medium">Assign Survey</p>

                  <div className='flex justify-between'>
                    <input
                      type="text"
                      onChange={(e) => setFilter(e.target.value)}
                      placeholder="Search survey"
                      className="border border-gray-300 rounded-md px-2 py-1 w-4/5"
                    />
                    <button type='button' className='text-white bg-primary-300 p-1 px-4 rounded-md' onClick={() => {setPageNo(1); getSurveys()}}>Search</button>
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
                          setValue('assigned_survey', isChecked ? surveys.map((s: any) => s._id) : []);
                        }}
                        className="rounded text-blue-500"
                      />
                      <label htmlFor="selectAllUsers" className="text-gray-700 font-semibold">
                        Select All
                      </label>
                    </div>

                    {/* Loop through surveys */}
                    {surveys?.map((survey: any) => (
                      <div key={survey._id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register('assigned_survey')}
                          value={survey._id}
                          checked={assignedSurveys.includes(survey._id)} // Manage checked state
                          onChange={(e) => {
                            const selected = e.target.checked;
                            if (selected) {
                              setValue('assigned_survey', [...assignedSurveys, survey._id]);
                            } else {
                              setValue(
                                'assigned_survey',
                                assignedSurveys.filter(s => s !== survey._id)
                              );
                            }
                          }}
                          className="rounded text-blue-500"
                        />
                        <label className="text-gray-700">{survey.name}</label>
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-between items-center'>
                    <button type='button' onClick={()=>{ if(pageNo > 1) setPageNo(pageNo-1)}}  className='text-white bg-primary-300 p-1 px-4 rounded-md'>Previous</button>
                    <p className='text-xs'>{pageNo} of {totalPages} Pages</p>
                    <button type='button' onClick={()=>{ if(pageNo < totalPages) setPageNo(pageNo+1)}} className='text-white bg-primary-300 p-1 px-4 rounded-md'>Next</button>
                  </div>
                </div>
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

const SuspendedCreateSurveyPage= () =>(
  <Suspense>
      <Page/>    
  </Suspense>
);

export default SuspendedCreateSurveyPage;
