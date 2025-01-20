"use client";

import { getSampling, getSamplingGroups } from "@/networks/sampling_networks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select"; // Import react-select
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { IoIosAddCircle } from "react-icons/io";
import AddSampleModal from "./AddSampleModal";
import SampleResponses from "./SampleResponses";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import SampleResponseModal from "./SampleResponseModal";

function AllSampleResponses() {
  const [samples, setSamples] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [addSampleModal, setAddSampleModal] = useState<boolean>(false);
  const [responseModal, setResponseModal] = useState<boolean>(false);
  const [selectedResponse, setSelectedResponse] = useState<any>(null);
  const [groups, setGroups] = useState<any>(null);

  const params = useSearchParams();
  const surveyId = params.get("survey_id");

  async function fetchSamples() {
    setLoading(true);
    const response = await getSampling({ surveyId });
    console.log("response is -->", response);
    if (response.success) {
      setSamples(response.data);
    } else {
      toast.error("Error fetching samples");
    }
    setLoading(false);
  }

  async function fetchGroups() {
    setLoading(true);
    const response = await getSamplingGroups({ survey_id: surveyId });
    console.log("response is -->", response);
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
    setLoading(false);
  }

  useEffect(() => {
    fetchSamples();
    fetchGroups();
  }, [refetch]);

  if (loading) return <Loader />;

  return (
    <div>
      {samples && samples.length > 0 && (
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Survey sampling</h1>
          <ButtonFilled
            onClick={() => setAddSampleModal(true)}
            className="flex gap-3 items-center"
          >
            <IoIosAddCircle className="text-2xl" /> Add sampling
          </ButtonFilled>
        </div>
      )}
      {samples && samples.length > 0 && groups && (
        <div className="flex justify-between items-center mb-8">
          <Select
            options={groups}
            placeholder="Select a group"
            className="w-full max-w-md"
            onChange={(selected) => console.log("Selected group:", selected)}
            isSearchable // Enables search functionality
          />
        </div>
      )}
      {samples && samples.length > 0 ? (
        <div className="h-screen">
          <SampleResponses
            setResponseModalIsOpen={setResponseModal}
            setSelectedResponse={setSelectedResponse}
            data={samples}
          />
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-156px)] flex justify-center items-center font-semibold text-secondary-300 flex-col gap-5">
          <img src="/icons/no-data.png" className="object-contain h-20" />
          <p>No samplings still for this survey</p>
          <ButtonFilled
            onClick={() => setAddSampleModal(true)}
            className="flex gap-3 items-center"
          >
            <IoIosAddCircle className="text-2xl" /> Add sampling
          </ButtonFilled>
        </div>
      )}

      <AddSampleModal
        surveyId={surveyId}
        open={addSampleModal}
        onClose={() => setAddSampleModal(false)}
        refetch={() => setRefetch(!refetch)}
      />
      <SampleResponseModal
        responseModalIsOpen={responseModal}
        selectedResponse={selectedResponse}
        setResponseModalIsOpen={setResponseModal}
      />
    </div>
  );
}

export default AllSampleResponses;
