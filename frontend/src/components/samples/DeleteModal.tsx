"use client";
import React, { useState } from "react";
import CustomModal from "../ui/Modal";
import { PropagateLoader } from "react-spinners";
import { deleteSampling } from "@/networks/sampling_networks";
import toast from "react-hot-toast";
import ButtonFilled from "../ui/buttons/ButtonFilled";

function DeleteModal({
  open,
  closeModal,
  refetch,
  surveyId,
  currentGroupId,
  setSelectedGroup
}: {
  open: boolean;
  closeModal: () => void;
  refetch: any;
  surveyId: string;
  currentGroupId: string;
  setSelectedGroup:any
}) {
  const [deleting, setDeleting] = useState<boolean>(false);
  async function deleteGroup() {
    setDeleting(true);
    const response = await deleteSampling({
      surveyId,
      groupId: currentGroupId,
      mode: "group",
    });
    if (response.success) {
      toast.success("Sampling group successfully deleted!");
      setSelectedGroup(null)
      refetch();
    } else toast.error("Failed to delete sampling group");
    setDeleting(false);
    closeModal();
}
  return (
    <CustomModal
      preventOutsideClose={deleting}
      open={open}
      closeModal={closeModal}
    >
      <div className="relative flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ">
        {deleting && (
          <div className="absolute inset-0 z-30 bg-black/65 flex flex-col justify-center items-center gap-10 h-full w-full">
            <PropagateLoader speedMultiplier={1.25} color="#FF8437" />
            <h3 className="text-white font-semibold">Deleting survey...</h3>
          </div>
        )}
        <h1 className="text-xl">Are you sure you want to delete this group?</h1>
        <div className="flex gap-2">
          <ButtonFilled onClick={deleteGroup} className="w-40">
            Yes
          </ButtonFilled>
          <ButtonFilled className="w-40" onClick={closeModal}>
            No
          </ButtonFilled>
        </div>
      </div>
    </CustomModal>
  );
}

export default DeleteModal;
