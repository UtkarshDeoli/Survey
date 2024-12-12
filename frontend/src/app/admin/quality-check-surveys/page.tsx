"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Loader from "@/components/ui/Loader";
import useUser from "@/hooks/useUser";
import { getUser } from "@/networks/user_networks";
import { formatDate } from "@/utils/common_functions";
import { qualityCheckId } from "@/utils/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [collectorSurveys, setCollectorSurveys] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const userData = useUser();
  const router = useRouter();
  useEffect(() => {
    if(userData){
        getQualityCheckSurveys();
    }
  }, [userData]);
  async function getQualityCheckSurveys() {
    setLoading(true);
    const response = await getUser({
      userId: userData.id,
      assignedSurveys: true,
    });
    console.log("collector is ---->", response);
    if (response.success) {
      setCollectorSurveys(response.data.assigned_survey);
    } else {
      toast.error("Unable to retrieve collector");
    }
    setLoading(false);
  }
  if (loading) return <Loader />;
  return (
    <div className="w-full bg-[#ECF0FA] text-sm min-h-[calc(100vh-80px)]">
      {/* header */}
      <nav className="h-16 w-full py-3 px-8 flex justify-between">
        <div className="text-my-gray-200">
          <h1 className="text-2xl font-medium">Quality check's Surveys</h1>
        </div>
      </nav>

      {/* Surveys */}
      <div className="relative w-[96%] mx-auto text-sm mt-5  max-h-[60vh] overflow-y-auto vertical-scrollbar">
        <div className="sticky top-0 left-0 z-10 grid grid-cols-5 text-white bg-dark-gray font-semibold py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
          <p className="col-span-1 flex justify-center items-center">
            Survey name
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Responses
          </p>
          <p className="col-span-1 flex justify-center items-center">
            Created at
          </p>
          <p className="col-span-1 flex justify-center items-center">Ac list</p>
          <p className="col-span-1 flex justify-center items-center">Action</p>
        </div>
        {loading && (
          <Loader className="h-[50vh] flex justify-center items-center w-full" />
        )}
        {!loading && collectorSurveys && collectorSurveys.length !== 0 ? (
          collectorSurveys.map((survey: any, index: number) => (
            <div
              key={index}
              className="bg-mid-gray border-2 grid p-2 grid-cols-5 gap-2 text-center text-black"
            >
              <p className="col-span-1 flex justify-center items-center font-semibold ">
                {survey.name}
              </p>
              <p className="col-span-1 flex justify-center items-center font-semibold ">
                {survey.response_count}
              </p>
              <p className="col-span-1 flex justify-center items-center ">
                {formatDate(survey.createdAt)}
              </p>
              <p className="col-span-1 flex justify-center items-center ">
              {!survey.ac_list && <p></p>}
              {survey.ac_list && survey.ac_list.length > 0 ? <p className="text-green-600 font-semibold">AC list included</p> : <p className="text-primary-300 font-semibold">AC list not included</p>}
              </p>
              <ButtonFilled onClick ={()=>router.push(`/admin/quality-check-surveys/survey-responses?survey_id=${survey._id}`)} className="w-fit mx-auto">
                View Responses
              </ButtonFilled>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-[20vh] w-full">
            No surveys found
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
