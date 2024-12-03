import React from 'react'
import ButtonFilled from '../ui/buttons/ButtonFilled';
import CustomModal from '../ui/Modal';

interface props {
    userModal:boolean,
    setUserModal: React.Dispatch<React.SetStateAction<boolean>>,
    selectedPanna: any,
    setSelectedPanna: React.Dispatch<React.SetStateAction<any>>,
    assignMode: boolean,
    setAssignMode: React.Dispatch<React.SetStateAction<boolean>>,
    pannaPramukh: any[];
    userSearch: string;
    setUserSearch: (val:string)=>void
}
function AssignPannaPramukhModal({pannaPramukh,setUserModal,selectedPanna,setSelectedPanna,setAssignMode,userModal,userSearch,setUserSearch}:props) {
  return (
    <CustomModal
        open={userModal}
        closeModal={() => {
          setUserModal(false);
          setSelectedPanna(null);
        }}
      >
        <div className="relative flex flex-col h-[60vh] w-[30vw] p-4">
          <h1 className="self-center text-lg font-semibold mb-5">
            Assign to Panna Pramukh
          </h1>
          <input
            placeholder="Search by name"
            className="sticky top-5 left-0 px-4 py-2 border-2 outline-none rounded-md"
            value={userSearch || ""}
            onChange={(e) => setUserSearch(e.target.value)}
            type="text"
          />
          <div className="grid mt-5 grid-cols-2 gap-3">
            {pannaPramukh &&
              pannaPramukh.map((us: any) => (
                <label className="flex gap-5">
                  <input
                    onChange={() => setSelectedPanna(us._id)}
                    type="radio"
                    name="panna"
                    className="h-5 w-5"
                  />
                  <p>{us.name}</p>
                </label>
              ))}
          </div>
          <ButtonFilled
            onClick={() => {
              setAssignMode(true);
              setUserModal(false);
            }}
            className="mt-auto disabled:bg-primary-100 disabled:cursor-not-allowed justify-center"
            disabled={!selectedPanna}
          >
            Proceed
          </ButtonFilled>
        </div>
      </CustomModal>
  )
}

export default AssignPannaPramukhModal