import React, { useState, useEffect } from "react";
import CustomModal from "../ui/Modal";
import Select from "react-select";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import toast from "react-hot-toast";
import { assignBooth, getAllUsers } from "@/networks/user_networks";
import { qualityCheckId } from "@/utils/constants";
import { getSurvey } from "@/networks/survey_networks";

interface Props {
  boothModal: boolean;
  setBoothModal: (value: boolean) => void;
  survey_id: string | null;
}

function AssignQcBoothModal({ boothModal, setBoothModal, survey_id }: Props) {
  const [users, setUsers] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [selectedAcBooths, setSelectedAcBooths] = useState<
    { ac_no: string; booth_numbers: string[] }[]
  >([]);
  const [acList, setAcList] = useState<
    { ac_no: string; booth_numbers: string[] }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQualityCheckUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers({ selectedRole: qualityCheckId });
      if (response.success) {
        setUsers(response.data || []);
      } else {
        toast.error("Failed to fetch users");
      }
    } catch (error) {
      toast.error("An error occurred while fetching users");
    } finally {
      setLoading(false);
    }
  };

  const fetchAcList = async () => {
    try {
      setLoading(true);
      const response = await getSurvey({ _id: survey_id });
      if (response.success) {
        setAcList(response.data.ac_list || []);
      } else {
        toast.error("Failed to fetch AC list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the AC list");
    } finally {
      setLoading(false);
    }
  };

  const clearStates = () => {
    setUserId("");
    setSelectedAcBooths([]);
    setUsers([]);
    setAcList([]);
    setLoading(false);
  };

  useEffect(() => {
    if (survey_id) {
      fetchQualityCheckUsers();
      fetchAcList();
    }
  }, [survey_id]);

  const userOptions = users?.map((user) => ({
    value: user._id,
    label: user.name,
  }));

  const acOptions = acList?.map((ac) => ({
    value: ac.ac_no,
    label: `AC ${ac.ac_no}`,
  }));

  const handleUserChange = (selectedOption: any) => {
    const selectedUser = users.find((user) => user._id === selectedOption.value);
    setUserId(selectedOption?.value || "");
    setSelectedAcBooths(selectedUser?.ac_list || []); // Initialize selected AC booths with the user's AC list
  };

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
      toast.error("Please select a user and at least one AC with booths.");
      setLoading(false);
      return;
    }

    const hasEmptyBooths = selectedAcBooths.some(
      (item) => item.booth_numbers.length === 0
    );
    if (hasEmptyBooths) {
      toast.error("Please select booth numbers for all selected ACs.");
      setLoading(false);
      return;
    }

    const updatedAcList = selectedAcBooths.map((item) => ({
      ...item,
      survey_id,
    }));
    const payload = {
      survey_id,
      userId,
      ac_list: updatedAcList,
    };

    try {
      const response = await assignBooth(payload);
      if (response.success) {
        toast.success("AC and Booth assigned successfully!");
        setBoothModal(false);
        clearStates();
      } else {
        toast.error("Failed to assign AC and Booth");
      }
    } catch {
      toast.error("An error occurred during assignment");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    clearStates();
    setBoothModal(false);
  };

  return (
    <CustomModal open={boothModal} closeModal={handleCloseModal}>
      <div className="min-h-[50vh] max-h-[90vh] w-[35vw] flex items-center gap-5 p-8 flex-col bg-secondary-100 overflow-y-auto">
        <h1 className="text-xl font-bold text-center text-primary-300">
          Assign AC and Booth to Quality Check Team Member
        </h1>

        {/* User Selector */}
        <div className="flex flex-col space-y-2 w-full">
          <Select
            value={userOptions.find((option) => option.value === userId)}
            onChange={handleUserChange}
            options={userOptions}
            placeholder="Select User"
            classNamePrefix="react-select"
            isSearchable
          />
        </div>

        {/* AC Selector */}
        <div className="flex flex-col space-y-2 w-full">
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
            <div key={item.ac_no} className="flex flex-col space-y-2 w-full">
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
          disabled={
            loading ||
            !userId || // Check if user is not selected
            selectedAcBooths.length === 0 || // Check if no ACs are selected
            selectedAcBooths.some((item) => item.booth_numbers.length === 0) // Check if any AC has no booths
          }
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

export default AssignQcBoothModal;
