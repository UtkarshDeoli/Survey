"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Loader from "@/components/ui/Loader";
import { createSurvey } from "@/networks/survey_networks";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [acList, setAcList] = useState<any[]>([]); // Array of AC List entries
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // Fetch 'name' and 'ac_list' from the search parameters
    const nameParam = searchParams.get("name");
    const acListParam = searchParams.get("ac_list");

    if (nameParam) {
      setName(nameParam);
      setValue("name", nameParam);
    }

    if (acListParam) {
      try {
        const parsedAcList = JSON.parse(decodeURIComponent(acListParam));
        console.log("parsedAC_LIST",parsedAcList)
        setAcList(parsedAcList);
      } catch (error) {
        console.error("Failed to parse AC List:", error);
      }
    }
  }, [setValue]);


  async function submitHandler(data: any) {
    if(acList){
      data.ac_list = acList;
    }
    console.log("submitted data is ----->",data);
    setLoading(true);

    try {
      const response = await createSurvey(data)
      if(response.success){
        toast.success("Survey created successfully!");
        router.replace(`/admin/surveys/questions?name=${name}&id=${response.survey._id}`);
      }
    } catch (error) {
      console.log("error in creating survey ---=-=-=->",error)
      toast.error("Something went wrong while creating the survey.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="fixed h-screen w-screen flex justify-center items-center bg-black bg-opacity-35 z-50">
        <Loader />
      </div>
    );
  }

  return (
    <section className="w-full">
      <header className="w-full h-16 border-2">
        <div className="bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center">
          <h3 className="text-secondary-300">Create Surveys</h3>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid grid-cols-2 m-10 border-2 bg-lighter-gray p-4 rounded-[20px]"
      >
        {/* Left section */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium my-auto">Name</label>
            <div className="col-span-2 w-[352px] h-[41px] px-4 py-[10px]">
              {name}
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <label className="text-secondary-300 font-medium my-auto">AC List</label>
            <div className="col-span-2 w-[352px] h-[100px] px-4 py-[10px] ">
              <ul className="space-y-2">
                {acList && acList.length > 0 ? (
                  acList.map((item, index) => (
                    <div className="flex flex-col">
                      <span className="text-primary-300 font-bold">
                        AC_NO: {item.ac_no}
                      </span>
                      <div className="flex gap-2">
                        {
                          item.booth_numbers.map((booth:string)=>booth.trim().length > 0 ? <span>{booth},</span>:null)
                        }
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-secondary-300">No items available.</p>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3 ">
            <label className="text-secondary-300 font-medium">Access Pin</label>
            <input
              type="number"
              {...register("access_pin")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="grid grid-cols-3 ">
            <label className="text-secondary-300 font-medium">
              Background Location Capture
            </label>
            <input
              type="checkbox"
              {...register("background_location_capture")}
              className="border-secondary-200 focus:outline-none border h-3/4 rounded-md"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex gap-4 justify-end mt-10">
          <ButtonFilled
            type="submit"
            className="px-4 py-[10px] w-[95px]"
            disabled={isSubmitting}
          >
            Save
          </ButtonFilled>
          <button
            onClick={() => router.back()}
            type="button"
            className="px-4 py-[10px] w-[95px] border border-secondary-200 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
