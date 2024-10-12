"use client";

import { useEffect, useRef, useState } from "react";
import ButtonBordered from "../ui/buttons/ButtonBordered";
import { useRouter } from "next/navigation";
import CustomModal from "../ui/Modal";
import { checkToken } from "@/utils/common_functions";
import { createSurvey } from "@/networks/survey_networks";
import * as XLSX from "xlsx";
import { TbBroadcast } from "react-icons/tb";
import toast from "react-hot-toast";
import { saveResponses } from "@/networks/response_networks";
import { CiImport } from "react-icons/ci";

interface props {
  setUpdated:any;
}
function SurveyHeader({setUpdated}:props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [excelData, setExcelData] = useState<any[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(excelData);

  useEffect(() => {
    const userData = checkToken();
    setUser(userData);
  }, []);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      let jsonData: any;
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        jsonData = XLSX.utils.sheet_to_json(worksheet);
        if (user) {
          const questions: any[] = [];
          console.log("json data------>", jsonData);
          const responseObj = jsonData[0];
          Object.keys(responseObj).forEach((key, index) => {
            const questionObj = {
              question_id: index + 10,
              type: "Single line Text Input",
              randomize: false,
              dependency: [],
              children: [],
              parameters: {
                question: key,
              },
            };
            questions.push(questionObj);
          });

          const params = {
            name,
            created_by: user.email,
            published: false,
            questions,
          };
          const response = await createSurvey(params);
          console.log(response);
          if (response.success) {
            toast.success("Survey created successfully!");
            console.log(response.survey._id)
            const allResponses: any = [];
            jsonData.forEach((data: any, index: number) => {
              const responses: any = [];
              Object.keys(data).forEach((key, ind) => {
                let obj: any = {};
                obj.response = String(data[key]);
                obj.question_id = ind+10;
                obj.question = key;
                obj.question_type = "Single line Text Input";
                responses.push(obj);
              });
              allResponses.push({
                survey_id: response.survey._id,
                responses,
              });
            });
            handleSaveResponses(allResponses);
          } else {
            toast.error("Failed to create survey!");
          }
          setImportModalOpen(false);
          setUpdated((prev:boolean)=>!prev)
        }
        setExcelData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  async function handleSaveResponses(params: any) {
    const response = await saveResponses(params);
    if (response.success) {
      toast.success("Responses saved successfully");
    } else {
      toast.error("Something went wrong while saving responses");
    }
  }
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const openImportModal = () => setImportModalOpen(true);
  const closeImportModal = () => setImportModalOpen(false);

  return (
    <header className="top-0 left-0 z-20 w-full h-16">
      <div className="h-16 w-full py-3 px-8 flex justify-between ">
        <h3 className="text-secondary-300 text-2xl">Surveys</h3>
        <div className="flex gap-2">
          <ButtonBordered
            onClick={openModal}
            className="bg-white font-semibold"
          >
            {" "}
            + Create survey
          </ButtonBordered>
          <ButtonBordered
            onClick={openImportModal}
            className="flex gap-2 items-center bg-white font-semibold"
          >
            <CiImport className="tex-xl" />
             Import survey
          </ButtonBordered>
        </div>
      </div>

      {/* modal */}
      <CustomModal open={modalIsOpen} closeModal={closeModal}>
        <div className="min-w-[662px] h-[337px] flex flex-col">
          <div className="relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md">
            Create surveys
          </div>
          <form className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <div className="flex items-center gap-10">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="flex items-center border border-secondary-200 rounded-md px-8 py-3 w-[185px] h-[35px]"
                type="text"
                placeholder="Survey name"
              />
            </div>
            <div className="flex items-center gap-10">
              <ButtonBordered
                onClick={closeModal}
                type="button"
                className="border-secondary-200"
              >
                Cancel
              </ButtonBordered>
              <button
                className="px-6 py-2 bg-primary-300 text-white rounded-md"
                type="button"
                onClick={() =>
                  router.push(
                    `/admin/surveys/create?name=${encodeURIComponent(name)}`
                  )
                }
              >
                Create survey
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <CustomModal open={importModalOpen} closeModal={closeImportModal}>
        <div className="min-w-[662px] h-[337px] flex flex-col">
          <div className="relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md">
            Import survey
          </div>
          <form className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <div className="flex items-center gap-10">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="flex items-center border border-secondary-200 rounded-md px-8 py-3 w-[185px] h-[35px]"
                type="text"
                placeholder="Survey name"
              />
            </div>
            <div className="flex items-center gap-10">
              <ButtonBordered
                onClick={closeImportModal}
                type="button"
                className="border-secondary-200"
              >
                Cancel
              </ButtonBordered>
              <label>
                <input
                  ref={inputRef}
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.click();
                    }
                  }}
                  className={`border text-white bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold`}
                >
                  Import questions
                </button>
              </label>
            </div>
          </form>
        </div>
      </CustomModal>
    </header>
  );
}

export default SurveyHeader;
