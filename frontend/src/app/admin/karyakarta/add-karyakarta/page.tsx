"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaQuestionCircle } from "react-icons/fa";
import { IUser } from "@/types/user_interfaces";
import { addUsers, createKaryakarta, getKaryakarta, updateKaryakarta } from "@/networks/user_networks";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllSurveys, getSurveyByAcAndBooth } from "@/networks/survey_networks";
import { getUser } from "@/networks/user_networks";
import { checkToken } from "@/utils/common_functions";
import toast from "react-hot-toast";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import CustomModal from "@/components/ui/Modal";
import { getSurveyResponsesByFamily } from "@/networks/response_networks";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import Loader from "@/components/ui/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const inputs =[
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
  ]
function Page() {
  const [surveys, setSurveys] = useState<{ name: string }[]>([]);
  const [surveysLoading, setSurveysLoading] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1);
  const [totalResponsePages, setTotalResponsePages] = useState<number>(1);
  const [dataModal,setDataModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  const [filter, setFilter] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [user,setUser] = useState<any>(null);
  const [step,setStep] = useState<number>(1);
  const [responses,setResponses] = useState<any[]>([])
  const [responsesLoading,setResponsesLoading] = useState<boolean>(false);

  //response selection states
  const [startIndex,setStartIndex] = useState<number|null>(null)
  const [endIndex,setEndIndex] = useState<number|null>(null)
  const [selectedResponses,setSelectedResponses] = useState<string[]>([])
  const [selectedSurvey,setSelectdSurvey] = useState<string|null>(null)

  //infinite scroll responses
  const [responsePage, setResponsePage] = useState<number>(1)
  const [responseLimit, setResponseLimit] = useState<number>(10)

  let prevLastName = ""; // Tracks the last name of the previous member
  let currentColor = "bg-blue-50"; // Initial color
  
  
  
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: userData });
  const searchParams = useSearchParams();

  const ac_no = watch("ac_no")
  const booth_no = watch("booth_no")
  const role = watch("role");

  console.log("role is -->",role === "Panna Pramukh")

  useEffect(() => {
    const user_Id = searchParams.get("_id");
    setUserId(user_Id);
  }, []);
  useEffect(()=>{
    const token = checkToken();
    if(token){
        setUser(token)
    }
  },[])

  const router = useRouter();
  const onSubmit = async (data: any) => {
    if(selectedSurvey) data.survey_id = selectedSurvey;
    if(selectedResponses) data.responses = selectedResponses;
    if(data.password.trim().length > 0){
      if(data.password !== data.confirm_password){
        toast.error("Passwords donot match!")
        return
      }
    }
    delete data.confirm_password;
    if(user){
        data.created_by = user.email
    }
    const params = data;
    let res;
    if(userId){
      params.id = userId
      if(params.password.trim().length  === 0) delete params.password;
      res = await updateKaryakarta(params)
    }
    else{
      res = await createKaryakarta(params);
    }
    if (res) {
      router.replace("/admin/karyakarta");
    }
    console.log("data----->",data)
  };

  async function getSurveys(page: number = 1) {
    setSurveysLoading(true);
    const res = await getSurveyByAcAndBooth({
      page: page,
      filter: filter,
      ac_no,
      booth_no
    });
    console.log("response ------>",res);
    setSurveys(res.surveys);
    setSurveysLoading(false);
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
      setValue("role",userData.role[0])
      setValue("password","")
      setValue("confirm_password","")
      
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

  function handleAddData(e:any){
    e.preventDefault()
    setDataModal(true);
    getSurveys()
  }
  async function getResponses(survey_id:string){
    console.log("selected survey id is --- >",survey_id)
    setResponsesLoading(true)
    setStep(2);
    const response = await getSurveyResponsesByFamily({surveyId:survey_id})
    if(response.success){
      setResponses(response.data)
      setTotalResponsePages(response.pagination.totalPages)
    }
    setResponsesLoading(false);

  }
  async function getMoreResponses(){
    setStep(2);
    const params = {surveyId:selectedSurvey,page:responsePage+1, limit:responseLimit}
    setResponsePage((prev=>prev+1));
    const response = await getSurveyResponsesByFamily(params)
    if(response.success){
      setResponses((prev)=>[...prev,...response.data])
    }

  }

  function handleMemberClick(responseId: string, index: number) {
    // If no start index is set, set the current index as the start index
    if (startIndex === null) {
      setStartIndex(index);
      setSelectedResponses([responseId]);
    } else {
      // If the clicked index is the same as the start index, reset all states
      if (index === startIndex) {
        setStartIndex(null);
        setEndIndex(null);
        setSelectedResponses([]);
        return; // Early return since we've reset everything
      }
  
      // If clicking before the start index, update the start index to the current index
      if (index < startIndex) {
        setStartIndex(index);
        setEndIndex(null)
        setSelectedResponses([responseId]);
        return; // Early return after resetting states
      }
  
      // Handle the case where the index is greater than the start index
      if (index > startIndex) {
        // Set the end index
        setEndIndex(index);
  
        // Calculate the range of selections
        const range = Math.abs(index - startIndex) + 1;
  
        // Check if the selected range exceeds the maximum allowed
        if (range > 60) {
          toast.error("Maximum of 60 responses are allowed");
          return;
        }
  
        // Create an array to hold selected responses
        const selected: string[] = [];
        for (let i = startIndex; i <= index; i++) {
          selected.push(responses[i].responses._id); // Use `_id` from the `responses` array
        }
  
        // Update selected responses state
        setSelectedResponses(selected);
      }
  
      // Handle case where a user clicks on an index lower than the current end index
      if (endIndex !== null && index < endIndex) {
        setEndIndex(index);
  
        // Create a new selected array up to the new end index
        const selected: string[] = [];
        for (let i = startIndex; i <= index; i++) {
          selected.push(responses[i].responses._id);
        }
  
        // Update selected responses state
        setSelectedResponses(selected);
      }
    }
  }
  

  function showModalData(){
    if(step === 1){
      if(surveysLoading) return <Loader className="flex justify-center items-center w-[90vw] h-[90vh]"/>  
      return (
        <div className="flex flex-col p-5 items-center  h-[90vh] w-[90vw]">
        <h1 className="text-xl font-bold  ">Surveys with AC no. {ac_no} and Booth no. {booth_no}</h1>
        <div className="grid grid-cols-7 w-full text-xl font-semibold border-b-2 pb-2 mt-10 ">
          <p>Sr. no.</p>
          <p className="col-span-2">Survey Id</p>
          <p className="col-span-2">Survey name</p>
          <p className="col-span-2">Created by</p>
        </div>
          {surveys && surveys.map((survey:any,index)=>(
            <div onClick={()=>{
              getResponses(survey._id)
              setSelectdSurvey(survey._id);
            }} className={`grid grid-cols-7 w-full overflow-auto cursor-pointer  ${index%2 === 0 ? "bg-blue-50" : "bg-blue-100"} py-4`}>
                <p>{index+1}. </p>
                <p className="col-span-2">{survey._id}</p>
                <p className="col-span-2">{survey.name}</p>
                <p className="col-span-2">{survey.created_by}</p>
            </div>
          ))}
      </div>
      ) 
    }else if(step === 2){
      if(responsesLoading) return <Loader className="flex justify-center items-center w-[90vw] h-[90vh]"/>  
      return (
        <div className="relative flex flex-col p-5 items-center  h-[90vh] w-[90vw]">
          <ButtonFilled className="absolute top-2 right-2 " onClick={()=>{
            setStep(1)
            setResponsePage(1)
          }}>Back</ButtonFilled>
        <h1 className="text-xl font-bold mb-10 ">Responses show up here</h1>
        <div className="grid grid-cols-5 w-full  text-xl font-semibold border-b-2 pb-2">
          <p>Sr. no.</p>
          <p className="col-span-2">Family last_name</p>
          <p className="col-span-2">Member name</p>
        </div>
        <div className="h-full w-full overflow-auto" id="scrollableDiv">
          <InfiniteScroll
            dataLength={responses.length} 
            next={getMoreResponses}
            hasMore={responsePage <= totalResponsePages}
            loader={<Loader className="flex justify-center items-center w-full h-[20vh]"/>}
            scrollableTarget="scrollableDiv"
            endMessage={
              <p className="flex justify-center items-center h-[10vh] ">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {responses &&
              responses.map((group: any, index) => {
                if (group.last_name !== prevLastName) {
                  currentColor = currentColor === "bg-blue-50" ? "bg-blue-100" : "bg-blue-50";
                  prevLastName = group.last_name; 
                }
                return <div onClick={()=>handleMemberClick(group.responses._id,index)} key={group.responses._id} className={`flex flex-col gap-3 px-4 ${selectedResponses.includes(group.responses._id)? "bg-green-200": currentColor} py-5 w-full`}>
                    <div  className="cursor-pointer grid grid-cols-5">
                      <p>{index+1}. </p>
                      <p className="font-semibold col-span-2">{group.last_name}</p>
                      <p className="col-span-2">{group.responses.name}</p>
                    </div>
                  
                </div>
              })}
          </InfiniteScroll>
        </div>
        <div className="sticky bottom-0 left-0 bg-white flex w-full p-2 gap-3 items-center justify-end">
          <ButtonBordered onClick={()=>{
            setDataModal(false)
            setStep(1)
            setSelectedResponses([])
          }}>Cancel</ButtonBordered>
          <ButtonFilled onClick={()=>{
            setDataModal(false)
          }} className="disabled:bg-blue-200" disabled={selectedResponses.length === 0}>Continue</ButtonFilled>
        </div>
      </div>
      )   
    }
  }

  return (
    <div className="w-full flex flex-col bg-my-gray-100 ">
      <nav className="bg-my-gray-105 w-full py-3 px-8 shadow-md ">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Add Karyakarta</h1>
        </div>
      </nav>

      <div className="p-5 flex-1 text-sm text-[#797979]">
        <div className="justify-center items-center min-h-screen bg-gray-100">
          <form
            className="bg-white shadow-lg p-6 rounded-lg h-full"
          >
            <div className="flex justify-between space-x-4">
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
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        {errors[field.name] && (
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
                      {...register("status", { required: userId ? false : true })}
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
                <div className="flex space-x-3 mt-5 w-full">
                <div className="w-1/2 font-medium">Role</div>
                <div className="flex flex-col gap-5 space-y-2 w-1/2">
                    {[
                    { label: "Panna Pramukh", name: "Panna Pramukh" },
                    { label: "Booth Adhyaksh", name: "Booth Adhyaksh" },
                    { label: "Mandal Adhyaksh", name: "Mandal Adhyaksh" },
                    { label: "Other Influencer", name: "Other Influencer" },
                    ].map((role) => (
                    <div key={role.name} className="flex items-center space-x-2">
                        <input
                        type="radio"
                        id={role.name} // Set the id to match the label's htmlFor
                        value={role.name}
                        {...register("role", { required: userId ? false : true })}
                        className="text-blue-500 h-5 w-5"
                        />
                        <label
                        htmlFor={role.name} // Ensure htmlFor matches the input's id
                        className="font-medium flex items-center gap-3 cursor-pointer"
                        >
                        {role.label}
                        </label>
                        <FaQuestionCircle className="text-[#477BFF]" />
                    </div>
                    ))}
                    {errors.role && (
                    <p className="text-red-500">At least one role must be selected</p>
                    )}
                </div>
                </div>
               {
               ( role === "Panna Pramukh" || role === "Other Influencer") && (
                  <div className="flex w-full space-y-2 mt-4">
                        <div className="w-1/2 py-2">
                          <label className="block  font-medium">
                            Add data                         
                          </label>
                        </div>
                        <ButtonFilled className="disabled:bg-blue-200 disabled:cursor-not-allowed" disabled={!ac_no || !booth_no} onClick={handleAddData}>{selectedResponses.length === 0 ? "Add data" :"Edit data"}</ButtonFilled>
                  </div>
                )
              }
              
              </div>
            </div>
            
            {/* save, cancel button */}
          </form>
        </div>
        <div className="sticky bottom-0 left-0 bg-white border-t p-2 flex justify-center space-x-5 mt-3">
            <button
            onClick={handleSubmit(onSubmit)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md "
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
      </div>
      <CustomModal open={dataModal} closeModal={()=>{
        setDataModal(false)
        setStep(1)
        setSelectedResponses([])
      }}>
          {showModalData()}
      </CustomModal>
    </div>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
