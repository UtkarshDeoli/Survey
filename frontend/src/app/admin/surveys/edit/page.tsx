"use client";

import EditSurveysHeader from "@/components/surveys/EditSurveysHeader";
import ButtonBordered from "@/components/ui/buttons/ButtonBordered";
import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Loader from "@/components/ui/Loader";
import {
  getSurvey,
  updateSurvey,
} from "@/networks/survey_networks";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


function Page() {
  const [surveyData, setSurveyData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [welcomeImagePreview, setWelcomeImagePreview] = useState<string | null>(null);
  const [thankyouImagePreview, setThankyouImagePreview] = useState<string | null>(null);

  const params = useSearchParams();
  const surveyId = params.get("survey_id");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: surveyData,
  });

  useEffect(() => {
    getSurveyData();
  }, []);

  useEffect(() => {
    if (surveyData) {
      Object.keys(surveyData).forEach((key) => {
        if (key !== "questions" && key !== "welcome_image" && key !== "thankyou_image") {
          setValue(key, surveyData[key]);
        }
      });
  
      if (surveyData?.welcome_image) {
        const welcomeImageBase64 = Buffer.from(surveyData.welcome_image.data).toString('base64');
        const welcomeImageUrl = `data:image/jpeg;base64,${welcomeImageBase64}`;
        setWelcomeImagePreview(welcomeImageUrl);
      }
  
      if (surveyData?.thankyou_image) {
        const thankyouImageBase64 = Buffer.from(surveyData.thankyou_image.data).toString('base64');
        const thankyouImageUrl = `data:image/jpeg;base64,${thankyouImageBase64}`;
        setThankyouImagePreview(thankyouImageUrl);
      }
    }
  }, [surveyData, setValue]);
  

  async function getSurveyData() {
    const params = { _id: surveyId };
    setLoading(true);
    const response = await getSurvey(params);
    setLoading(false);
    if (response.success) {
      setSurveyData(response.data);
    } else {
      toast.error("Something went wrong");
    }
  }

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
      console.log("setting type - ", type , " to ", e.target.files[0])
      setValue(type, [file]);
    }
  }
  

  async function submitHandler(data: any) {
    const formData = new FormData();
    console.log("dataaaaa------------>.",data.welcome_image[0])
    for (const key in data) {
      if (key !== "welcome_image" && key !== "thankyou_image") {
        formData.append(key, data[key] == null ? "" : data[key]);
      }
    }
   
    if (data.welcome_image && data.welcome_image.length > 0) {
      formData.append("welcome_image", data.welcome_image[0]);
    } else if (welcomeImagePreview === null) {
      formData.append("welcome_image", '');
    }
  
    // Handle thankyou image
    if (data.thankyou_image && data.thankyou_image.length > 0) {
      formData.append("thankyou_image", data.thankyou_image[0]);
    } else if (thankyouImagePreview === null) {
      formData.append("thankyou_image", '');
    }

    formData.append("created_by", "rohitchand490@gmail.com");

    setLoading(true);
    const params = {
      _id: surveyId,
      formData,
    };
    try {
      const res = await updateSurvey(params);
      if (res.success) {
        toast.success("Survey updated successfully!");
      } else {
        toast.error("Failed to update survey.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleImageDelete(type: string) {
    console.log("deleted",type)
    if (type === "welcome_image") {
      setWelcomeImagePreview(null);
    } else if (type === "thankyou_image") {
      setThankyouImagePreview(null);
    }
    setValue(type, []); 
  }

  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="w-full flex flex-grow flex-col gap-5">
        <EditSurveysHeader
          id={surveyId || ""}
          created_by={surveyData?.created_by}
          name={surveyData?.name}
        />

        {loading && (
          <Loader className="h-[50vh] w-full flex justify-center items-center" />
        )}
        {!loading && (
          <form
            className="grid grid-cols-2 m-10"
          >
            {/* left */}
            <div className="flex flex-col gap-5 w-full">
              <div className="grid grid-cols-3">
                <label className="text-secondary-300 font-medium">Name</label>
                <input
                  value={surveyData?.name || ""}
                  disabled
                  {...register("name")}
                  className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
                />
              </div>
              <div className="grid grid-cols-3">
                <label className="text-secondary-300 font-medium">Header text</label>
                <input
                  value={surveyData?.header_text || ""}
                  {...register("header_text")}
                  className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
                />
              </div>

              {/* Welcome Image */}
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
                  {
                    welcomeImagePreview && (
                      <ButtonBordered
                            type="button"
                            onClick={() => handleImageDelete("welcome_image")}
                            className="text-red-500 border-red-500 hover:bg-red-500 mt-5 rounded-md flex justify-center items-center"
                          >
                            Delete
                      </ButtonBordered>
                    )
                  }
                </div>
              </div>

              {/* Thank You Image */}
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
                  {
                    thankyouImagePreview && (
                      <ButtonBordered
                            type="button"
                            onClick={() => handleImageDelete("thankyou_image")}
                            className="text-red-500 border-red-500 hover:bg-red-500 mt-5 rounded-md flex justify-center items-center"
                          >
                            Delete
                      </ButtonBordered>
                    )
                  }
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-5 w-full">
              <div className="grid grid-cols-3">
                <label className="text-secondary-300 font-medium">
                  Access pin
                </label>
                <input
                  {...register("access_pin")}
                  className="col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"
                />
              </div>

              <div className="grid gap-5 grid-cols-3">
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

          </form>
        )}
      </div>
      <div className="sticky bottom-0 left-0 py-2 px-5 bg-white col-span-2 flex gap-4 justify-end mt-[10%] border-t border-gray-200">
        <ButtonFilled onClick={handleSubmit(submitHandler)} className="px-4 py-[10px] w-[95px]">Update</ButtonFilled>
        <button
          onClick={()=>router.back()}
          type="button"
          className="px-4 py-[10px] w-[95px] border border-secondary-200 rounded-md"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}

const SuspendedCreateSurveyPage = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default SuspendedCreateSurveyPage;
