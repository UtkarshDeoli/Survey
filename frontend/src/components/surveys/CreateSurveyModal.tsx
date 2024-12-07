"use client";

import React, { useState } from "react";
import ButtonBordered from "../ui/buttons/ButtonBordered";
import CustomModal from "../ui/Modal";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { useCreateSurveyContext } from "@/hooks/contextHooks/useCreateSurvey";
import { useRouter } from "next/navigation";
import { createSurvey } from "@/networks/survey_networks";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

function CreateSurveyModal({ modalIsOpen, closeModal }: Props) {
  const { ac_list, addAcEntry, name, removeAcEntry, setName } =
    useCreateSurveyContext();
  const [currentAcNo, setCurrentAcNo] = useState<string>("");
  const [currentBoothNo, setCurrentBoothNo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleCreateSurvey = async () => {
    // Prepare the ac_list to match backend format
    const body: any = {
      name,
    };
    if (ac_list.length > 0) {
      body.ac_list = ac_list.map((entry) => ({
        ac_no: entry.ac_no,
        booth_numbers: entry.booth_numbers.split(",").map((num) => num.trim()),
      }));
    }
    try {
      setLoading(true);
      const response = await createSurvey(body);
      if (response.success) {
        toast.success("Survey created successfully!");
        console.log("survey--------", response);
        closeModal();
        router.push(`/admin/surveys/edit?survey_id=${response.survey._id}`);
      }
    } catch (error) {
      console.log("error in creating survey ---=-=-=->", error);
      toast.error("Something went wrong while creating the survey.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal open={modalIsOpen} closeModal={closeModal}>
      {loading && <Loader />}
      <div className="relative w-[50vw] min-h-[60vh] max-h-[90vh] overflow-y-auto vertical-scrollbar-orange flex flex-col items-center">
        <div className="sticky top-0 left-0 z-10 text-primary-300 px-8 py-4 text-[24px] bg-white font-bold border-b w-full">
          Create surveys
        </div>
        <div className="flex p-4 gap-5 justify-center w-full h-full">
          <img
            src="/images/create-survey.png"
            className="w-[300px] h-[223px]"
          />
          <form className="grid grid-cols-4 gap-5 w-full h-fit place-items-center">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="col-span-4 flex items-center border border-secondary-200 rounded-[20px] px-8 py-4 h-full w-full focus:ring-2 focus:ring-primary-50 outline-none"
              type="text"
              placeholder="Survey name"
            />
            <input
              onChange={(e) => setCurrentAcNo(e.target.value)}
              value={currentAcNo}
              className="col-span-4 flex items-center border border-secondary-200 rounded-[20px] px-8 py-4 h-full w-full focus:ring-2 focus:ring-primary-50 outline-none"
              type="text"
              placeholder="AC_NO"
            />
            <input
              onChange={(e) => setCurrentBoothNo(e.target.value)}
              value={currentBoothNo}
              className="col-span-4 flex items-center border border-secondary-200 rounded-[20px] px-8 py-4 h-full w-full focus:ring-2 focus:ring-primary-50 outline-none"
              type="text"
              placeholder="BOOTH_NO (comma-separated)"
            />
          </form>
        </div>
        <div className="w-full px-4">
          {ac_list.map((entry, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b"
            >
              <div className="flex flex-col">
                <span className="text-primary-300 font-bold">
                  AC_NO: {entry.ac_no}
                </span>
                <span>Booth Numbers: {entry.booth_numbers}</span>
              </div>
              <button
                type="button"
                onClick={() => removeAcEntry(index)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 ri justify-end p-4 flex items-center gap-10 z-20 bg-white w-full">
          <ButtonBordered
            onClick={closeModal}
            type="button"
            className="border-secondary-200"
          >
            Cancel
          </ButtonBordered>
          <ButtonFilled
            type="button"
            onClick={() => {
              setCurrentAcNo("");
              setCurrentBoothNo("");
              addAcEntry(currentAcNo, currentBoothNo);
            }}
            className="col-span-4 px-4 py-2 bg-primary-300 text-white rounded-md"
          >
            Add AC_NO
          </ButtonFilled>

          <ButtonFilled
            disabled={!name}
            className="px-6 py-2 bg-primary-300 text-white rounded-md disabled:bg-primary-100 disabled:cursor-not-allowed"
            type="button"
            onClick={handleCreateSurvey}
          >
            Create Survey
          </ButtonFilled>
        </div>
      </div>
    </CustomModal>
  );
}

export default CreateSurveyModal;
