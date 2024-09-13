"use client"

import { useState } from "react";
import ButtonBordered from "../ui/buttons/ButtonBordered"
import Modal from "react-modal"
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { useRouter } from "next/navigation";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0', // Remove default padding
      border: 'none', // Remove default border if needed
      borderRadius: '16px', // Adjust border radius
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
  };

  Modal.setAppElement('body');

function SurveyHeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name,setName] = useState <string> ("")
    const router = useRouter()

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <header className="w-full h-16 border-2">
        <div className="bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center">
           <h3 className="text-secondary-300">Surveys</h3>
           <div className=" flex gap-2">
                <ButtonBordered className="bg-white font-semibold"> + Copy template</ButtonBordered>
                <ButtonBordered 
                onClick={openModal} 
                className="bg-white font-semibold"> + Create survey</ButtonBordered>
           </div>
        </div>


       {/* modal */}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <div className="min-w-[662px] h-[337px] flex flex-col">
            <div className="relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md">Create surveys</div>
            <form className="w-full h-full flex flex-col gap-10 justify-center items-center">
                <div className="flex items-center gap-10">
                    <label>Name</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className="flex items-center border border-secondary-200 rounded-md px-8 py-3 w-[185px] h-[35px]" type="text" placeholder="name"/>
                </div>
                <div className="flex items-center gap-10">
                    <ButtonBordered onClick={closeModal} type="button" className="border-secondary-200">Cancel</ButtonBordered>
                    <button className="px-6 py-2 bg-primary-300 text-white rounded-md" type="button" onClick={()=>router.push(`/admin/surveys/create?name=${encodeURIComponent(name)}`)}>Create survey</button>
                </div>
            </form>
        </div>
      </Modal>
    </header>
  )
}

export default SurveyHeader