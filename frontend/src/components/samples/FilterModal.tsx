"use client";

import React, { useEffect, useState } from "react";
import CustomModal from "../ui/Modal";
import { getSamplingGroups } from "@/networks/sampling_networks";
import Select from "react-select";
import toast from "react-hot-toast";
import { getAllUsers } from "@/networks/user_networks";
import { surveyCollectorId } from "@/utils/constants";
import { PropagateLoader } from "react-spinners";
import ButtonFilled from "../ui/buttons/ButtonFilled";

function FilterModal({
  open,
  closeModal,
  surveyId,
  setSelectedCollector,
  setSelectedGroup,
  selectedCollector,
  selectedGroup,
  refetch,
}: any) {
  const [groups, setGroups] = useState<any>([]); // Holds the group options
  const [collectors, setCollectors] = useState<any>([]); // Holds the collector options

  const [loading, setLoading] = useState<boolean>(true); // Controls the loading state

  // Fetch collectors
  async function fetchCollectors() {
    try {
      const response = await getAllUsers({ selectedRole: surveyCollectorId });
      if (response.success) {
        setCollectors(
          response.data.map((collector: any) => ({
            value: collector._id,
            label: collector.name,
          }))
        );
      } else {
        toast.error("Error fetching collectors");
      }
    } catch (error) {
      console.error("Error fetching collectors:", error);
      toast.error("Error fetching collectors");
    }
  }

  // Fetch groups
  async function fetchGroups(collectorId?: string) {
    setLoading(true);
    try {
      const response = await getSamplingGroups({
        survey_id: surveyId,
        user_id: collectorId, // Pass collectorId if provided
      });
      if (response.success) {
        setGroups(
          response.data.map((group: any) => ({
            value: group.group_id,
            label: `${group.group_id} --> ${group.survey_collector}`,
          }))
        );
      } else {
        toast.error("Error fetching groups");
      }
    } catch (error) {
      console.error("Error fetching groups:", error);
      toast.error("Error fetching groups");
    }
    setLoading(false);
  }

  function handleFilter() {
    refetch();
    closeModal();
  }

  useEffect(() => {
    fetchCollectors(); // Fetch collectors on component mount
  }, []);

  // Fetch groups when the modal opens
  useEffect(() => {
    if (open) fetchGroups();
  }, [open]);

  // Handle collector selection
  const handleCollectorChange = (selected: any) => {
    setSelectedCollector(selected); // Update selected collector
    setSelectedGroup(null); // Reset selected group
    fetchGroups(selected?.value); // Fetch groups filtered by selected collector
  };

  // Handle group selection
  const handleGroupChange = (selected: any) => {
    setSelectedGroup(selected); // Update selected group
  };

  return (
    <CustomModal open={open} closeModal={closeModal}>
      <div className="relative w-[40vw]  p-4">
        {loading && (
          <div className="absolute inset-0 z-30 bg-black/65 flex flex-col justify-center items-center gap-10 h-full w-full">
            <PropagateLoader speedMultiplier={1.25} color="#FF8437" />
            <h3 className="text-white font-semibold">Loading groups...</h3>
          </div>
        )}
        <div className=" w-full flex items-center flex-col space-y-6 border-2 rounded-md h-full p-3 bg-lighter-gray">
          <h1 className="text-primary-300 font-semibold text-xl">
            Filter samples
          </h1>
          {/* Collector Dropdown */}
          <div className="flex flex-col gap-3 w-full">
            <h1>Choose survey collector</h1>
            <Select
              value={selectedCollector}
              options={collectors}
              placeholder="Select a collector"
              className="w-full"
              onChange={handleCollectorChange}
              isSearchable
            />
          </div>
          {/* Group Dropdown */}
          <div className="flex flex-col gap-3 w-full">
            <h1>Choose group</h1>
            <Select
              value={selectedGroup} // Use selectedGroup state for two-way binding
              options={groups}
              placeholder="Select a group"
              className="w-full"
              onChange={handleGroupChange}
              isSearchable
              isDisabled={loading || !selectedCollector} // Disable if no collector selected or loading
            />
          </div>
          <ButtonFilled onClick={handleFilter}>Filter</ButtonFilled>
        </div>
      </div>
    </CustomModal>
  );
}

export default FilterModal;
