"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import { createSurvey } from "@/networks/survey_networks";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function page() {
  const [loading,setLoading] = useState <boolean> (false)

  const params = useSearchParams();
  const name = params.get('name');
  

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(()=>{
    if(name){
      setValue("name",name)
    }
  },[])

  async function submitHandler(data: any) {
    console.log(data);
    const formData = new FormData();
    for (const key in data) {
      if ( key !== 'welcome_image' && key !== 'thankyou_image') {
        formData.append(key, data[key]);
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

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await createSurvey(formData);
      if (res.success) {
        toast.success('Survey created successfully!');
      } else {
        toast.error('Failed to create survey.');
      }
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full">
      <header className="w-full h-16 border-2">
        <div className="bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center">
          <h3 className="text-secondary-300">Create Surveys</h3>
        </div>
      </header>

      {/* form */}
      <form
        className="grid grid-cols-2 m-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        {/* left */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">Name</label>
            <input
              value={name||""}
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
          <ButtonFilled className="px-4 py-[10px] w-[95px]">Save</ButtonFilled>
          <button
            type="button"
            className="px-4 py-[10px] w-[95px] border border-secondary-200 rounded-md text-secondary-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default page;
