"use client";

import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteSurvey, getAllSurveys, updateSurvey } from "@/networks/survey_networks";
import { formatDate } from "@/utils/common_functions";
import { useRouter } from "next/navigation";
import { FaRegEdit, FaRegUser} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CustomModal from "../ui/Modal";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import toast from "react-hot-toast";

function AllSurveys() {
  // States
  const [allSurveys, setAllSurveys] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [deleteModal,setDeleteModal] = useState<boolean>(false);
  const [publishModal,setPublishModal] = useState<boolean>(false);
  const [surveyToDelete,setSurveyToDelete] = useState<string | null>(null)
  const [surveyToPublish,setSurveyToPublish] = useState<string | null>(null)
  const [isSurveyPublished,setisSurveyPublished] = useState<boolean | null>(null)

  console.log(isSurveyPublished)
  
  const router = useRouter();

  // useEffects
  useEffect(() => {
    handleGetAllSurveys();
  }, []);

  // Get all the surveys
  async function handleGetAllSurveys() {
    const params = {}; //to be dynamic
    setLoading(true);
    const response = await getAllSurveys(params);
    setAllSurveys(response.survey);
  }

  // Delete a survey
  async function handleDeleteSurvey(){
      const params={id:surveyToDelete,created_by:"rohitchand490@gmail.com"}
      const response = await deleteSurvey(params);
      if(response.success){
        handleGetAllSurveys();
        setDeleteModal(false);
        setActiveDropdown(null);
        toast.success("Survey deleted successfully");
      }else{
        toast.error("Failed to delete survey");
      }
  }

  // Publish a survey
  async function handlePublishSurvey(){
      const formData = {published:!isSurveyPublished, created_by:"rohitchand490@gmail.com"}
     
      const params={_id:surveyToPublish,formData}
      const response = await updateSurvey(params);
      if(response.success){
        handleGetAllSurveys();
        setPublishModal(false);
        setSurveyToPublish(null);
        setisSurveyPublished(null);
        toast.success(`Survey ${isSurveyPublished ? "Unpublished" : "Published"} successfully`);
      }else{
        toast.error("Failed to Publish survey");
      }
  }

  // Toggle dropdown
  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full px-8 py-3">
      {/* surveys */}
      <div className="grid grid-cols-10 text-secondary-300 font-semibold bg-secondary-100 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
        <p className="col-span-4">All surveys</p>
        <p className="col-span-2">Total responses</p>
        <p className="col-span-2">Date created</p>
        <p className="col-span-2">Status</p>
      </div>

      {allSurveys && allSurveys.length > 0 ? (
        allSurveys.map((el: any, index: number) => (
          <div
            key={index}
            className="grid grid-cols-10 px-8 py-[16px] border border-secondary-200 w-full"
          >
            <p
              onClick={() =>
                router.push(`/admin/surveys/edit?survey_id=${el._id}`)
              }
              className="col-span-4 cursor-pointer underline"
            >
              {el.name}
            </p>
            <p className="col-span-2">0</p>
            <p className="col-span-2">{formatDate(el.createdAt)}</p>
            <div className="col-span-2 flex items-center justify-between w-full relative">
              <button
                onClick={()=>{
                  setisSurveyPublished(el.published)
                  setSurveyToPublish(el._id)
                  setPublishModal(true)
                }}
                className={`border rounded-md px-2 py-1 text-[14px] font-medium ${
                  el.published
                    ? "border-custom-green-300 text-custom-green-300"
                    : "border-red-500 text-red-500"
                }`}
              >
                {el.published ? "Published" : "Unpublished"}
              </button>
              <div className="relative">
                <button onClick={() => {
                    setSurveyToDelete(el._id)
                    toggleDropdown(el._id)
                  }}>
                  <BsThreeDotsVertical />
                </button>
                {activeDropdown === el._id && (
                  <div className="absolute right-0 top-8 h-auto w-48 bg-white shadow-lg border rounded-md py-2 z-10">
                    <button className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">
                    <FaRegEdit /> Edit
                    </button>
                    <button className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">
                    <FaRegUser /> Assign to user
                    </button>
                    <button onClick={()=>{
                        setActiveDropdown(null)
                        setDeleteModal(true)
                      }} className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">
                    <MdDeleteOutline /> Delete
                    </button>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No surveys</p>
      )}
      {/* modals */}

      <CustomModal open={publishModal} closeModal={()=>{
          setPublishModal(false)
          setSurveyToPublish(null)
          setisSurveyPublished(null)
        }}>
        <div className="flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ">
          <h1 className="text-xl">Do want to {isSurveyPublished ? "Unpublish" : "Publish"} this survey?</h1>
          <div className="flex gap-2">
            <ButtonFilled onClick={handlePublishSurvey} className="w-40">{isSurveyPublished ? "Unpublish" : "Publish"}</ButtonFilled>
            <ButtonFilled onClick={()=>{
              setPublishModal(false)
              setSurveyToPublish(null)
              setisSurveyPublished(null)
            }}className="w-40">No</ButtonFilled>
          </div>
        </div>
      </CustomModal>
                
      <CustomModal open={deleteModal} closeModal={()=>{
          setDeleteModal(false)
          setActiveDropdown(null)
          setSurveyToDelete(null)
        }}>
        <div className="flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ">
          <h1 className="text-xl">Are you sure you want to delete this survey?</h1>
          <div className="flex gap-2">
            <ButtonFilled onClick={handleDeleteSurvey} className="w-40">Yes</ButtonFilled>
            <ButtonFilled onClick={()=>{
              setDeleteModal(false)
              setActiveDropdown(null)
              setSurveyToDelete(null)
            }}className="w-40">No</ButtonFilled>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

export default AllSurveys;
