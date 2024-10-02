"use client";

import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  deleteSurvey,
  getAllSurveys,
  updateSurvey,
} from "@/networks/survey_networks";
import { formatDate } from "@/utils/common_functions";
import { useRouter } from "next/navigation";
import { FaRegEdit, FaRegUser } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CustomModal from "../ui/Modal";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import Switch from "react-switch"; // Using a third-party switch component for toggle
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface AllSurveysProps {
  queryParams: Params;
  setQueryParams:(params:any)=>void
}
interface Params {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
  published?: string;
  created_by: string;
  filter: string;
}

function AllSurveys({ queryParams, setQueryParams }: AllSurveysProps) {
  const [allSurveys, setAllSurveys] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [surveyToDelete, setSurveyToDelete] = useState<string | null>(null);

  const [surveyToPublish, setSurveyToPublish] = useState<string | null>(null);
  const [isSurveyPublished, setisSurveyPublished] = useState<boolean | null>(
    null,
  );
  const [publishModal, setPublishModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);

  const router = useRouter();

  useEffect(() => {
    handleGetAllSurveys();
  }, [queryParams]);

  // Delete a survey
  async function handleDeleteSurvey() {
    const params = {
      id: surveyToDelete,
      created_by: "rohitchand490@gmail.com",
    };
    const response = await deleteSurvey(params);
    if (response.success) {
      handleGetAllSurveys();
      setDeleteModal(false);
      setActiveDropdown(null);
      toast.success("Survey deleted successfully");
    } else {
      toast.error("Failed to delete survey");
    }
  }

  // Toggle publish/unpublish survey
  async function handlePublishSurvey() {
    const formData = {
      published: !isSurveyPublished,
      created_by: "rohitchand490@gmail.com",
    };

    const params = { _id: surveyToPublish, formData };
    const response = await updateSurvey(params);
    if (response.success) {
      handleGetAllSurveys();
      setPublishModal(false);
      setSurveyToPublish(null);
      setisSurveyPublished(null);
      toast.success(
        `Survey ${isSurveyPublished ? "Unpublished" : "Published"} successfully`,
      );
    } else {
      toast.error("Failed to Publish survey");
    }
  }

  async function handleGetAllSurveys() {
    const params = queryParams;
    setLoading(true);
    const response = await getAllSurveys(params);
    console.log(response)
    setAllSurveys(response.surveys);
    setTotalPages(response.totalPages);
    setLoading(false);
  }

  // Toggle dropdown
  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  // Handle publish/unpublish toggle click
  const handleToggleClick = (survey: any) => {
    setisSurveyPublished(survey.published);
    setSurveyToPublish(survey._id);
    setPublishModal(true); // Show modal for confirmation
  };


  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    setQueryParams({
      ...queryParams,
      limit: newLimit,
      page: 1, // Reset to the first page on limit change
    });
  };

  const handleNextPage = () => {
    if (queryParams.page < totalPages) {
      setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }
  };

  const handlePreviousPage = () => {
    if (queryParams.page > 1) {
      setQueryParams({ ...queryParams, page: queryParams.page - 1 });
    }
  };

  return (
    <div className="w-full px-5 py-5 text-sm">
      {/* surveys */}
      <div className="grid grid-cols-8 text-white font-semibold bg-blue-500 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
        <p className="col-span-2">All surveys</p>
        <p className="col-span-2">Total responses</p>
        <p className="col-span-2">Date created</p>
        <p className="col-span-2">Status</p>
      </div>
      {loading && (
        <Loader className="h-[40vh] w-full flex justify-center items-center text-primary-300" />
      )}
      {!loading && allSurveys && allSurveys.length > 0
        ? allSurveys.map((el: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-8 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-white"
            >
              <p
                onClick={() =>
                  router.push(`/admin/surveys/edit?survey_id=${el._id}`)
                }
                className="col-span-2 cursor-pointer underline"
              >
                {el.name}
              </p>
              <p className="col-span-2 pl-8">0</p>
              <p className="col-span-2">{formatDate(el.createdAt)}</p>
              <div className="col-span-2 flex items-center justify-between w-full relative">
                <Switch
                  onChange={() => handleToggleClick(el)}
                  checked={el.published}
                  onColor="#4CAF50"
                  offColor="#DDDDDD"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  className="transition-switch duration-300 ease-in-out"
                />

                <div className="relative">
                  <button
                    onClick={() => {
                      setSurveyToDelete(el._id);
                      toggleDropdown(el._id);
                    }}
                  >
                    <BsThreeDotsVertical />
                  </button>
                  {activeDropdown === el._id && (
                    <div className="absolute right-0 top-8 h-auto w-48 bg-white shadow-lg border rounded-md py-2 z-10">
                      <button
                        onClick={() =>
                          router.push(`/admin/surveys/edit?survey_id=${el._id}`)
                        }
                        className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full"
                      >
                        <FaRegEdit /> Edit
                      </button>
                      <button className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">
                        <FaRegUser /> Assign to user
                      </button>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          setDeleteModal(true);
                        }}
                        className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full"
                      >
                        <MdDeleteOutline /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))
        : !loading &&
          !allSurveys && (
            <p className="w-full h-20 flex justify-center items-center font-semibold text-secondary-300">
              No surveys
            </p>
          )}

       {/* Pagination Controls */}
       {
        !loading && (
          <div className="flex gap-3 items-center mt-4">
            {/* Limit Select */}
            <div>
              <label htmlFor="limit-select" className="mr-2">
                Show:
              </label>
              <select
                id="limit-select"
                value={queryParams.limit}
                onChange={handleLimitChange}
                className="p-2 border rounded-md"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={queryParams.page === 1}
                className="p-2 border rounded-md disabled:opacity-50"
              >
                <IoIosArrowBack />
              </button>
              <span>
                Page {queryParams.page} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={queryParams.page === totalPages}
                className="p-2 border rounded-md disabled:opacity-50"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        )
       }
      
      {/* modals */}
      <CustomModal
        open={publishModal}
        closeModal={() => {
          setPublishModal(false);
          setSurveyToPublish(null);
          setisSurveyPublished(null);
        }}
      >
        <div className="flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ">
          <h1 className="text-xl">
            Do you want to {isSurveyPublished ? "Unpublish" : "Publish"} this
            survey?
          </h1>
          <div className="flex gap-2">
            <ButtonFilled onClick={handlePublishSurvey} className="w-40">
              {isSurveyPublished ? "Unpublish" : "Publish"}
            </ButtonFilled>
            <ButtonFilled
              onClick={() => {
                setPublishModal(false);
                setSurveyToPublish(null);
                setisSurveyPublished(null);
              }}
              className="w-40"
            >
              No
            </ButtonFilled>
          </div>
        </div>
      </CustomModal>

      <CustomModal
        open={deleteModal}
        closeModal={() => {
          setDeleteModal(false);
          setActiveDropdown(null);
          setSurveyToDelete(null);
        }}
      >
        <div className="flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ">
          <h1 className="text-xl">
            Are you sure you want to delete this survey?
          </h1>
          <div className="flex gap-2">
            <ButtonFilled onClick={handleDeleteSurvey} className="w-40">
              Yes
            </ButtonFilled>
            <ButtonFilled
              onClick={() => {
                setDeleteModal(false);
                setActiveDropdown(null);
                setSurveyToDelete(null);
              }}
              className="w-40"
            >
              No
            </ButtonFilled>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

export default AllSurveys;
