"use client";

import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Loader from "@/components/ui/Loader";
import { createSurvey } from "@/networks/survey_networks";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [welcomeImagePreview, setWelcomeImagePreview] = useState<string | null>(
    null
  );
  const [thankyouImagePreview, setThankyouImagePreview] = useState<
    string | null
  >(null);

  const params = useSearchParams();
  const name = params.get("name");
  const AC_NO = params.get("ac_no")
  const BOOTH_NO = params.get("booth_no")

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (name) {
      setValue("name", name);
      setValue("ac_no", AC_NO);
      setValue("booth_no", BOOTH_NO);
    }
  }, []);

  function handleImageChange(e: any, type: string) {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);

      // Update preview
      if (type === "welcome_image") {
        setWelcomeImagePreview(previewUrl);
      } else if (type === "thankyou_image") {
        setThankyouImagePreview(previewUrl);
      }
      console.log("setting type - ", type, " to ", e.target.files[0]);
      setValue(type, [file]);
    }
  }

  async function submitHandler(data: any) {
    console.log("Submitting form", data);
    const formData = new FormData();
    for (const key in data) {
      if (key !== "welcome_image" && key !== "thankyou_image") {
        const value = data[key] ?? "";
        formData.append(key, value);
      }
    }
    if (data.welcome_image && data.welcome_image[0]) {
      formData.append("welcome_image", data.welcome_image[0]);
    }
    if (data.thankyou_image && data.thankyou_image[0]) {
      formData.append("thankyou_image", data.thankyou_image[0]);
    }

    formData.append("created_by", "rohitchand490@gmail.com");

    setLoading(true);

    try {
      const res = await createSurvey(formData);
      console.log(res);
      if (res.success) {
        toast.success("Survey created successfully!");
        router.replace(
          `/admin/surveys/questions?id=${
            res.survey._id
          }&created_by=${encodeURIComponent(res.survey.created_by)}`
        );
      } else {
        toast.error("Failed to create survey.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleImageDelete(type: string) {
    console.log("deleted", type);
    if (type === "welcome_image") {
      setWelcomeImagePreview(null);
    } else if (type === "thankyou_image") {
      setThankyouImagePreview(null);
    }
    setValue(type, []);
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

      {/* form */}
      <form
        className="grid grid-cols-2 m-10"
      >
        {/* left */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">Name</label>
            <input
              value={name || ""}
              disabled
              {...register("name")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
            />
          </div>
          {/* <div className="grid grid-cols-3">
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
              <label className="flex items-center justify-between max-w-[352px] min-h-[41px] rounded-md cursor-pointer hover:bg-secondary-50">
                <div className="flex justify-between gap-2 bg-white h-full w-full">
                  {welcomeImagePreview ? (
                    <img
                      src={welcomeImagePreview}
                      alt="Welcome Preview"
                      className="max-w-[60%] max-h-64 object-contain rounded-md"
                    />
                  ) : (
                    <div className="h-[41px] w-[60%] bg-secondary-200 rounded-md"></div>
                  )}
                  <p className="border border-secondary-200 text-secondary-300 w-fit px-4 py-2 h-fit rounded-md flex items-center justify-center text-[14px]">
                    Choose file
                  </p>
                </div>
                <input
                  {...register("welcome_image")}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "welcome_image")}
                />
              </label>
              {welcomeImagePreview && (
                <ButtonBordered
                  type="button"
                  onClick={() => handleImageDelete("welcome_image")}
                  className="text-red-500 border-red-500 hover:bg-red-500 mt-5 rounded-md flex justify-center items-center"
                >
                  Delete
                </ButtonBordered>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Thank you image
            </label>
            <div className="col-span-2">
              <label className="flex items-center justify-between w-[352px] min-h-[41px] rounded-md cursor-pointer hover:bg-secondary-50">
                <div className="flex justify-between gap-2 bg-white h-full w-full">
                  {thankyouImagePreview ? (
                    <img
                      src={thankyouImagePreview}
                      alt="Thank You Preview"
                      className="max-w-[60%] max-h-64 object-contain rounded-md"
                    />
                  ) : (
                    <div className="h-[41px] w-[60%] bg-secondary-200 rounded-md"></div>
                  )}
                  <div className="flex flex-col gap-2">
                    <p className="border border-secondary-200 text-secondary-300 w-fit px-4 py-2 h-fit rounded-md flex items-center justify-center text-[14px]">
                      Choose file
                    </p>
                  </div>
                </div>
                <input
                  {...register("thankyou_image")}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "thankyou_image")}
                />
              </label>
              {thankyouImagePreview && (
                <ButtonBordered
                  type="button"
                  onClick={() => handleImageDelete("thankyou_image")}
                  className="text-red-500 border-red-500 hover:bg-red-500 mt-5 rounded-md flex justify-center items-center"
                >
                  Delete
                </ButtonBordered>
              )}
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
          </div> */}
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              AC_NO
            </label>
            <input
              disabled={true}
              {...register("ac_no")}
              type="number"
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              BOOTH_NO
            </label>
            <input
              disabled={true}
              {...register("booth_no")}
              type="number"
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">Access pin</label>
            <input
              type="number"
              {...register("access_pin")}
              className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="grid grid-cols-3">
            <label className="text-secondary-300 font-medium">
              Background location capture
            </label>
            <input
              type="checkbox"
              {...register("background_location_capture")}
              className="border-secondary-200 focus:outline-none border rounded-md"
            />
          </div>
        </div>
      </form>
      <div className="sticky bottom-0 left-0 py-2 px-5 bg-white col-span-2 flex gap-4 justify-end mt-[10%] border-t border-gray-200">
        <ButtonFilled onClick={handleSubmit(submitHandler)} className="px-4 py-[10px] w-[95px]">Save</ButtonFilled>
        <button
          onClick={()=>router.back()}
          type="button"
          className="px-4 py-[10px] w-[95px] border border-secondary-200 rounded-md"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
