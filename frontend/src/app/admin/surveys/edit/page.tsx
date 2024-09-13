"use client"

import EditSurveysHeader from "@/components/surveys/EditSurveysHeader"
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import { createSurvey, getSurvey, updateSurvey } from "@/networks/survey_networks";
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function page() {
    const [surveyData,setSurveyData] = useState <any> ([]);
    const [loading,setLoading] = useState <boolean>(false)
    const params = useSearchParams()
    const surveyId = params.get('survey_id')

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
      } = useForm({
        defaultValues:surveyData
      });

    useEffect(()=>{
        getSurveyData()
    },[])

    useEffect(() => {
        if (surveyData) {
          Object.keys(surveyData).forEach((key) => {
            setValue(key, surveyData[key]);
          });
        }
    }, [surveyData, setValue]);

    console.log("survey data--->",surveyData)
    

    async function getSurveyData(){
        const params ={_id:surveyId}
        const response = await getSurvey(params)
        console.log(response)
        if(response.success){
            setSurveyData(response.data[0])
        }else{
            toast.error("something went wrong")
        }
    }

    async function submitHandler(data: any) {
        const formData = new FormData();
        for (const key in data) {
          if ( key !== 'welcome_image' && key !== 'thankyou_image') {
            formData.append(key, data[key] == null ? '' : data[key]);
          }
        }
        if (data.welcome_image && data.welcome_image[0]) {
          formData.append('welcome_image', data.welcome_image[0]);
        }
        if (data.thankyou_image && data.thankyou_image[0]) {
          formData.append('thankyou_image', data.thankyou_image[0]);
        }
    
        formData.append('created_by', 'rohitchand490@gmail.com');
      
        setLoading(true);
        const params = {
            _id: surveyId,
            formData
        }
        try {
          const res = await updateSurvey(params);
          console.log(res);
          if (res.success) {
            toast.success('Survey updated successfully!');
    
          } else {
            toast.error('Failed to update survey.');
          }
        } catch (error) {
          toast.error('Something went wrong.');
        } finally {
          setLoading(false);
        }
      }
    
  return (
    <main className="w-full">
        <div className="w-full flex flex-col gap-5">
            <EditSurveysHeader id={surveyId||""} created_by={surveyData.created_by} name={surveyData.name}/>

            <form
        className="grid grid-cols-2 m-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        {/* left */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">Name</label>
            <input
              value={surveyData.name||""}
              disabled
              {...register("name")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
            />
          </div>
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Header text
            </label>
            <input
              {...register("header_text")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
            />
          </div>

          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Welcome image
            </label>
            <div className="col-span-2">
              <label className="flex items-center justify-center w-[352px] h-[41px] rounded-md cursor-pointer hover:bg-secondary-50">
                <div className="flex gap-2 bg-white h-full w-full">
                  <div className="h-full w-full bg-secondary-200 rounded-md"></div>
                  <p className="border border-secondary-200 text-secondary-300 h-full w-[35%] rounded-md flex items-center justify-center text-[14px]">
                    Choose file
                  </p>
                </div>
                <input
                  {...register("welcome_image")}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Thank you image
            </label>
            <div className="col-span-2">
              <label className="flex items-center justify-center w-[352px] h-[41px] rounded-md cursor-pointer hover:bg-secondary-50">
                <div className="flex gap-2 bg-white h-full w-full">
                  <div className="h-full w-full bg-secondary-200 rounded-md"></div>
                  <p className="border border-secondary-200 text-secondary-300 h-full w-[35%] rounded-md flex items-center justify-center text-[14px]">
                    Choose file
                  </p>
                </div>
                <input
                  {...register("thankyou_image")}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Time duration
            </label>
            <input
              {...register("thank_time_duration")}
              type="number"
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">Access pin</label>
            <input
              {...register("access_pin")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
            />
          </div>
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Background location capture
            </label>
            <input
            type="number"
              {...register("background_location_capture")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
            />
          </div>
        </div>

        <div className="col-span-2 flex gap-4 justify-center mt-[10%]">
          <ButtonFilled className="px-4 py-[10px] w-[95px]">Update</ButtonFilled>
          <button
            type="button"
            className="px-4 py-[10px] w-[95px] border border-secondary-200 rounded-md text-secondary-300"
          >
            Cancel
          </button>
        </div>
      </form>
        </div>
    </main>
  )
}

export default page