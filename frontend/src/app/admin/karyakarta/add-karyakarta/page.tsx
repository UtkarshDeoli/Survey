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
  const [pageNo, setPageNo] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [dataModal,setDataModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  const [filter, setFilter] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [user,setUser] = useState<any>(null);
  const [step,setStep] = useState<number>(1);
  
  
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUser>({ defaultValues: userData });
  const searchParams = useSearchParams();

  const ac_no = watch("ac_no")
  const booth_no = watch("booth_no")

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
    const res = await getSurveyByAcAndBooth({
      page: page,
      filter: filter,
      ac_no,
      booth_no
    });
    console.log("response ------>",res);
    setTotalPages(res.totalPages);
    setSurveys(res.surveys);
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
    setStep(2);
    const response = await getSurveyResponsesByFamily({survey_id})
  }
  function showModalData(){
    if(step === 1){
      return (
        <div className="flex flex-col p-5 items-center gap-10 h-[60vh] w-[70vw]">
        <h1 className="text-xl font-bold ">Surveys with AC no. {ac_no} and Booth no. {booth_no}</h1>
          {surveys && surveys.map((survey:any,index)=>(
            <div onClick={()=>getResponses(survey._id)} className={`flex gap-2 w-full cursor-pointer ${index%2 === 0 ? "bg-blue-50" : "bg-blue-100"} py-4`}>
              <p className="w-1/3">{survey._id}</p>
              <p className="w-1/3">{survey.name}</p>
              <p className="w-1/3">{survey.created_by}</p>
            </div>
          ))}
      </div>
      ) 
    }else if(step === 2){
      return (
        <div className="relative flex flex-col p-5 items-center gap-10 h-[60vh] w-[70vw]">
          <ButtonFilled className="absolute top-2 right-2 " onClick={()=>{
            setStep(1)
          }}>Back</ButtonFilled>
        <h1 className="text-xl font-bold ">Responses show up here</h1>
          
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
                          {...register(field.name as keyof IUser, {
                            required: userId ? false : true,
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
                <div className="flex w-full space-y-2">
                      <div className="w-1/2 py-2">
                        <label className="block  font-medium">
                          Add data                         
                        </label>
                      </div>
                      <ButtonFilled onClick={handleAddData}>Add data</ButtonFilled>
                    </div>
                

                {/* Roles */}
                <div className="flex space-x-3 mt-5 w-full">
                <div className="w-1/2 font-medium">Role</div>
                <div className="flex flex-col gap-5 space-y-2 w-1/2">
                    {[
                    { label: "Panna Pramukh", name: "Panna Pramukh" },
                    { label: "Booth Adhyaksh", name: "Booth Adhyaksh" },
                    { label: "Mandal Adhyaksh", name: "Mandal Adhyaksh" },
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
