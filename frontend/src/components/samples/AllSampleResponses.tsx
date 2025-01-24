"use client";

import { deleteSampling, getSampling } from "@/networks/sampling_networks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { IoIosAddCircle } from "react-icons/io";
import AddSampleModal from "./AddSampleModal";
import SampleResponses from "./SampleResponses";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import SampleResponseModal from "./SampleResponseModal";
import FilterModal from "./FilterModal";
import Pagination from "../ui/pagination/Pagination";
import { MdDelete } from "react-icons/md";
import DeleteModal from "./DeleteModal";

function AllSampleResponses() {
  const [samples, setSamples] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [addSampleModal, setAddSampleModal] = useState<boolean>(false);
  const [responseModal, setResponseModal] = useState<boolean>(false);
  const [selectedResponse, setSelectedResponse] = useState<any>(null);
  const [groupDetails, setGroupDetails] = useState<any>(null); // Store group details
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [selectedCollector, setSelectedCollector] = useState<any>(null); // Tracks the selected collector
  const [selectedGroup, setSelectedGroup] = useState<any>(null); // Tracks the selected group
  const [currentGroupId, setCurrrentGroupId] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(10);
  const [totalResponsePages, setTotalResponsePages] = useState<number>(0);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const params = useSearchParams();
  const surveyId = params.get("survey_id");

  async function fetchSamples() {
    setLoading(true);
    const response = await getSampling({
      surveyId,
      groupId: selectedGroup?.value,
      userId: selectedCollector?.value,
      page,
      limit: pageLimit || 10,
    });
    if (response.success) {
      setSamples(response.data);
      setGroupDetails(response.group_details);
      setCurrrentGroupId(response.group_id);
      setTotalResponsePages(response.pagination.totalPages);
      setPage(response.pagination.currentPage);
      setPageLimit(response.pagination.limit);
    } else {
      toast.error("Error fetching samples");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSamples();
  }, [refetch, page, pageLimit]);

  if (loading) return <Loader />;

  const hasSamples = samples && samples.length > 0;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Survey Sampling</h1>
        {/* filter button */}
        <div className="flex items-center gap-3">
          {hasSamples && (
            <div className="flex gap-3 items-center">
              <ButtonFilled
                onClick={() => {
                  setDeleteModal(true);
                }}
                className="bg-red-400 hover:bg-red-500 gap-3"
              >
                <MdDelete /> Delete
              </ButtonFilled>
              <ButtonFilled onClick={() => setFilterModal(true)}>
                Filter
              </ButtonFilled>
            </div>
          )}

          <ButtonFilled
            onClick={() => setAddSampleModal(true)}
            className="flex gap-3 items-center"
          >
            <IoIosAddCircle className="text-2xl" /> Add Sampling
          </ButtonFilled>
        </div>
      </div>

      {/* Display group details in tabular format */}
      {hasSamples && (
        <div className="mb-4">
          <div className="flex gap-3 items-center">
            <h1 className="text-xl font-semibold">Group Details - </h1>
            <p className="font-semibold text-primary-300">{currentGroupId}</p>
          </div>
          {groupDetails ? (
            <div className="mt-2 border border-gray-200 rounded-lg p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Sampling Method</th>
                    <th className="border px-4 py-2">Sample Size</th>
                    <th className="border px-4 py-2">Collector</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      {groupDetails.sampling_method}
                    </td>
                    <td className="border px-4 py-2">
                      {groupDetails.sample_size}
                    </td>
                    <td className="border px-4 py-2">
                      {groupDetails.collector_name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No group details available.</p>
          )}
        </div>
      )}

      {hasSamples ? (
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
          <p>No samplings yet for this survey</p>
        </div>
      )}
      {hasSamples && (
        <Pagination
          page={page}
          pageLimit={pageLimit}
          setPage={setPage}
          setPageLimit={setPageLimit}
          totalResponsePages={totalResponsePages}
        />
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
      <FilterModal
        open={filterModal}
        setSelectedCollector={setSelectedCollector}
        setSelectedGroup={setSelectedGroup}
        selectedCollector={selectedCollector}
        selectedGroup={selectedGroup}
        closeModal={() => setFilterModal(false)}
        refetch={() => setRefetch(!refetch)}
        surveyId={surveyId}
      />
      <DeleteModal
        closeModal={() => setDeleteModal(false)}
        currentGroupId={currentGroupId}
        open={deleteModal}
        surveyId={surveyId || ""}
        refetch={() => setRefetch(!refetch)}
        setSelectedGroup={setSelectedGroup}
      />
    </div>
  );
}

export default AllSampleResponses;
