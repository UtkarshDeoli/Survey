"use client";
import React, { useState, useEffect } from "react";
import CustomModal from "../ui/Modal";
import Select from "react-select";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import toast from "react-hot-toast";
import { assignBooth, getAllKaryakarta } from "@/networks/user_networks";
import { getAllUsers } from "@/networks/user_networks";
import { boothAdhyakshId, districtPresidentId, shaktiKendraId, surveyCollectorId } from "@/utils/constants";

interface Props {
  isImported:boolean;
  boothModal: boolean;
  setBoothModal: (value: boolean) => void;
  acList: { ac_no: string; booth_numbers: string[] }[];
  survey_id: string;
}

function AssignBoothModal({ boothModal, setBoothModal, acList, survey_id,isImported }: Props) {
  const allRoles = [
    { value: surveyCollectorId, label: "Survey Collector" },
    { value: districtPresidentId, label: "District President" },
    { value: shaktiKendraId, label: "Shakti Kendra" },
    { value: boothAdhyakshId, label: "Booth Adhyaksh" },
  ];
  
  const [roles, setRoles] = useState(allRoles);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [selectedAcBooths, setSelectedAcBooths] = useState<
    { ac_no: string; booth_numbers: string[] }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsersByRole = async (role: string) => {
    try {
      setLoading(true);
      let response
      if(selectedRole === districtPresidentId || selectedRole === shaktiKendraId || selectedRole === boothAdhyakshId) {
        response = await getAllKaryakarta({role:selectedRole})
      }
      else{
        response = await getAllUsers({ selectedRole: role });
      }
      console.log("users ---->",response);
      if (response.success) {
        setUsers(response.data || []);
      } else {
        toast.error("Failed to fetch users");
      }
    } catch (error) {
      toast.error("An error occurred while fetching users");
    }
    setLoading(false);
  };

  useEffect(() => {
    // Filter roles based on isImported prop
    setRoles(!isImported ? allRoles.filter((role) => role.label !== "Survey Collector") : allRoles);
  }, [isImported]);

  useEffect(() => {
    if (selectedRole) {
      console.log(" ------->",selectedRole);
      fetchUsersByRole(selectedRole);
    } else {
      setUsers([]);
    }
  }, [selectedRole]);

  const userOptions = users?.map((user) => ({
    value: user._id,
    label: user.name,
  }));

  const acOptions = acList?.map((ac) => ({
    value: ac.ac_no,
    label: `AC ${ac.ac_no}`,
  }));

  const handleAcChange = (selectedAc: any) => {
    const ac_no = selectedAc.value;
    if (!selectedAcBooths.some((item) => item.ac_no === ac_no)) {
      setSelectedAcBooths([...selectedAcBooths, { ac_no, booth_numbers: [] }]);
    }
  };

  const handleBoothChange = (ac_no: string, selectedBooths: any) => {
    setSelectedAcBooths((prev) =>
      prev.map((item) =>
        item.ac_no === ac_no
          ? { ...item, booth_numbers: selectedBooths.map((b: any) => b.value) }
          : item
      )
    );
  };

  const handleRemoveAc = (ac_no: string) => {
    setSelectedAcBooths((prev) => prev.filter((item) => item.ac_no !== ac_no));
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!userId || selectedAcBooths.length === 0) {
      toast.error("Please select all fields");
      setLoading(false);
      return;
    }
    const updatedAcList = selectedAcBooths.map((item) => ({
      ...item,
      survey_id,
    }));
    const payload:any = {
      survey_id,
      userId,
      ac_list: updatedAcList,
    };
    if(selectedRole === "671f997d38863c2bfc859e76"){
      payload.editResponses = true
    }
    try {
      const response = await assignBooth(payload);
      if (response.success) {
        toast.success("AC and Booth assigned successfully!");
        setBoothModal(false);
      } else {
        toast.error("Failed to assign AC and Booth");
      }
    } catch {
      toast.error("An error occurred during assignment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal open={boothModal} closeModal={() => setBoothModal(false)}>
      <div className="min-h-[50vh] max-h-[90vh] flex items-center gap-5 p-8 flex-col bg-secondary-100 overflow-y-auto">
        <h1 className="text-xl font-bold text-primary-300">
          Assign AC and Booth to User
        </h1>

        {/* Role Selector */}
        <div className="flex flex-col space-y-2 w-[352px]">
          <Select
            value={roles.find((role) => role.value === selectedRole)}
            onChange={(selectedOption) => setSelectedRole(selectedOption?.value || null)}
            options={roles}
            placeholder="Select Role"
            classNamePrefix="react-select"
            isSearchable
          />
        </div>

        {/* User Selector */}
        <div className="flex flex-col space-y-2 w-[352px]">
          <Select
            value={userOptions.find((option) => option.value === userId)}
            onChange={(selectedOption) => setUserId(selectedOption?.value || "")}
            options={userOptions}
            placeholder="Select User"
            classNamePrefix="react-select"
            isSearchable
            isDisabled={!selectedRole}
          />
        </div>

        {/* AC Selector */}
        <div className="flex flex-col space-y-2 w-[352px]">
          <Select
            onChange={handleAcChange}
            options={acOptions}
            placeholder="Select AC"
            classNamePrefix="react-select"
            isSearchable
          />
        </div>

        {/* Booth Selector for Each AC */}
        {selectedAcBooths.map((item) => {
          const boothOptions = acList
            .find((ac) => ac.ac_no === item.ac_no)
            ?.booth_numbers.map((booth) => ({
              value: booth,
              label: `Booth ${booth}`,
            }));

          return (
            <div key={item.ac_no} className="flex flex-col space-y-2 w-[352px]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-primary-300">
                  AC {item.ac_no}
                </h2>
                <button
                  onClick={() => handleRemoveAc(item.ac_no)}
                  className="text-red-500 underline text-sm"
                >
                  Remove
                </button>
              </div>
              <Select
                value={item.booth_numbers.map((booth) =>
                  boothOptions?.find((option) => option.value === booth)
                )}
                onChange={(selectedOptions) =>
                  handleBoothChange(item.ac_no, selectedOptions || [])
                }
                options={boothOptions}
                placeholder={`Select Booths for AC ${item.ac_no}`}
                classNamePrefix="react-select"
                isSearchable
                isMulti
              />
            </div>
          );
        })}

        {/* Submit Button */}
        <ButtonFilled
          disabled={loading}
          loading={loading}
          className="mt-auto disabled:bg-primary-100"
          onClick={handleSubmit}
        >
          Assign
        </ButtonFilled>
      </div>
    </CustomModal>
  );
}

export default AssignBoothModal;
