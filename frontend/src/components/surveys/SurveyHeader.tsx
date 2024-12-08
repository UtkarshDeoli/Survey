"use client";

import { useState } from "react";
import ButtonBordered from "../ui/buttons/ButtonBordered";
import { CiImport } from "react-icons/ci";
import CreateSurveyModal from "./CreateSurveyModal";
import ImportSurveyModal from "./ImportSurveyModal";
import { useCreateSurveyContext } from "@/hooks/contextHooks/useCreateSurvey";

interface props {
  setUpdated: any;
}
function SurveyHeader({ setUpdated }: props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const {setName,setAcList } =
    useCreateSurveyContext();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setName("");
    setAcList([]);
    setModalIsOpen(false)
  };
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
      <CreateSurveyModal setUpdated ={setUpdated} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
      <ImportSurveyModal importModalOpen={importModalOpen} closeImportModal={closeImportModal}/>
      
    </header>
  );
}

export default SurveyHeader;
