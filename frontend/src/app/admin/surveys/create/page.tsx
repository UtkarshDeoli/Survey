"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function page() {
  const params = useSearchParams();
  const name = params.get('name');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();


  function submitHandler(data: any) {
    console.log(data);
    window.open("/admin/surveys/questions","_self")
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
                  className="hidden" // Hide the actual file input
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
                  className="hidden" // Hide the actual file input
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Time duration
            </label>
            <input
              {...register("duration")}
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
