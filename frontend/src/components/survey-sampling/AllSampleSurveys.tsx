"use client";

import { getSampleSurveys } from "@/networks/sampling_networks";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import { formatDate } from "@/utils/common_functions";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { IoIosAddCircle } from "react-icons/io";
import ChooseSurveyModal from "./ChooseSurveyModal";
import { useRouter } from "next/navigation";

function AllSampleSurveys() {
  // states
  const [sampleSurveys, setSampleSurveys] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [chooseSurveyModal, setChooseSurveyModal] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const router = useRouter()

  //   event handlers
  const handleChooseSurvey = () => {
    setChooseSurveyModal(true);
  };

  //   api calls
  async function fetchSampleSurveys() {
    setLoading(true);
    const response = await getSampleSurveys({});
    if (response.success) {
      setSampleSurveys(response.data);
    } else {
      toast.error("Error fetching sample surveys");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchSampleSurveys();
  }, [refetch]);

  return (
    <div
      className={`w-[96%] mt-1 mx-auto text-sm py-5 overflow-y-auto vertical-scrollbar`}
    >
      {/* navabr */}
      {sampleSurveys && sampleSurveys.length > 0 && (
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Sample Surveys</h1>
          <ButtonFilled
            onClick={handleChooseSurvey}
            className="flex gap-3 items-center"
          >
            <IoIosAddCircle className="text-2xl" /> Add Sample
          </ButtonFilled>
        </div>
      )}
      {/* surveys */}
      {sampleSurveys && sampleSurveys.length > 0 && (
        <div className="sticky top-0 z-10 grid grid-cols-6 text-white font-semibold bg-dark-gray px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
          <p className="col-span-2">All surveys</p>
          <p className="col-span-2">Total responses</p>
          <p className="col-span-2">Date created</p>
        </div>
      )}
      {loading && (
        <Loader className="h-[40vh] w-full flex justify-center items-center text-primary-300" />
      )}
      {!loading && sampleSurveys && sampleSurveys.length > 0
        ? sampleSurveys.map((el: any, index: number) => (
            <div
              onClick={()=>{router.push(`/admin/survey-sampling/samples?survey_id=${el._id}`)}}
              key={index}
              className="cursor-pointer grid grid-cols-6 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-mid-gray"
            >
              <p className="col-span-2 cursor-pointer font-semibold">
                {el.name}
              </p>
              <p className="col-span-2 pl-8">{el.response_count || 0}</p>
              <p className="col-span-2">{formatDate(el.createdAt)}</p>
            </div>
          ))
        : !loading && (
            <div className="w-full h-[calc(100vh-156px)] flex justify-center items-center font-semibold text-secondary-300 flex-col gap-5">
              <img src="/icons/no-data.png" className="object-contain h-20" />
              <p>No sample surveys</p>
              <ButtonFilled
                onClick={handleChooseSurvey}
                className="flex gap-3 items-center"
              >
                <IoIosAddCircle className="text-2xl" /> Add Sample
              </ButtonFilled>
            </div>
          )}
      <ChooseSurveyModal
        refetch={() => setRefetch(!refetch)}
        open={chooseSurveyModal}
        closeModal={() => setChooseSurveyModal(false)}
      />
    </div>
  );
}

export default AllSampleSurveys;
