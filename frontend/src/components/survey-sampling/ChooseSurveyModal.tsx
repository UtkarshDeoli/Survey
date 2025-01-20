"use client";

import React, { useEffect, useState } from "react";
import CustomModal from "../ui/Modal";
import { getAllSurveys, updateSurvey } from "@/networks/survey_networks";
import toast from "react-hot-toast";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { PropagateLoader } from "react-spinners";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function ChooseSurveyModal({
  open,
  closeModal,
  refetch,
}: {
  open: boolean;
  closeModal: () => void;
  refetch: () => void;
}) {
  // states
  const [surveys, setSurveys] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);

  console.log("selected survey -->", selectedSurvey);

  //   api calls

  async function fetchSurveys(page: number = 1) {
    setLoading(true);
    const response = await getAllSurveys({ page, limit: 10 });
    if (response.success) {
      setSurveys(response.surveys);
      setTotalPages(response.totalPages);
    } else {
      toast.error("Error fetching surveys");
    }
    setLoading(false);
  }
  async function handleUpdateSurvey() {
    setUpdating(true);
    const response = await updateSurvey({
      formData: { sampling: true },
      _id: selectedSurvey,
    });
    if (response.success) {
      toast.success("Survey sampled successfully");
    } else {
      toast.error("Error sampling survey");
    }
    setUpdating(false);
    handleCloseModal();
    refetch();
  }

  //   side effects
  useEffect(() => {
    if (open) fetchSurveys(currentPage);
  }, [open, currentPage]);

  function handlePageChange(newPage: number) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }

  function handleSurveySelection(surveyId: string) {
    setSelectedSurvey(surveyId);
  }
  const handleCloseModal = () => {
    setSelectedSurvey(null);
    closeModal();
  };

  return (
    <CustomModal open={open} closeModal={handleCloseModal}>
      <div className="flex relative flex-col gap-5 w-[40vw] min-h-[50vh] p-5">
        <h1 className="text-2xl font-bold text-primary-300 text-center">
          Select Surveys
        </h1>
        {loading || updating ? (
          <div className="absolute inset-0 z-30 bg-black/65 flex flex-col justify-center items-center gap-10 h-full w-full">
            <PropagateLoader speedMultiplier={1.25} color="#FF8437" />
            <h3 className="text-white font-semibold">{`${
              loading ? "Loading" : "Sampling"
            } surveys...`}</h3>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-8">
              {surveys &&
                surveys.map((survey) => (
                  <label
                    key={survey._id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="survey"
                      value={survey._id}
                      checked={selectedSurvey === survey._id}
                      onChange={() => handleSurveySelection(survey._id)}
                      className="cursor-pointer appearance-none w-4 h-4 border-2 border-primary-300 checked:bg-primary-100 checked:text-white rounded-full"
                    />
                    {survey.name}
                  </label>
                ))}
            </div>
          </>
        )}

        <div className="flex justify-between items-center mt-auto">
          <div className="flex gap-5 items-center">
            <button
              className="btn btn-secondary cursor-pointer text-2xl"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <MdNavigateBefore />
            </button>
            <p className="text-secondary-500">
              Page {currentPage} of {totalPages}
            </p>
            <button
              className="btn btn-secondary cursor-pointer text-2xl"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <MdNavigateNext />
            </button>
          </div>
          <ButtonFilled
            className="btn btn-primary w-fit"
            disabled={!selectedSurvey}
            onClick={handleUpdateSurvey}
          >
            Confirm Selection
          </ButtonFilled>
        </div>
      </div>
    </CustomModal>
  );
}

export default ChooseSurveyModal;
