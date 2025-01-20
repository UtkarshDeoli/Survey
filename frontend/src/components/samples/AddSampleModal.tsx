"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getAllUsers } from "@/networks/user_networks";
import { surveyCollectorId } from "@/utils/constants";
import CustomModal from "../ui/Modal";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { createSampling } from "@/networks/sampling_networks";
import toast from "react-hot-toast";

function AddSampleModal({ open, onClose, refetch, surveyId }: any) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [samplingSize, setSamplingSize] = useState("");
  const [samplingMethod, setSamplingMethod] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

  // Fetch users (collectors)
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await getAllUsers({ selectedRole: surveyCollectorId });
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load collectors");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const options = users?.map((user: any) => ({
    value: user._id,
    label: user.name,
  }));

  const samplingMethodOptions = [
    { value: "random", label: "Random" },
    { value: "index", label: "Index" },
  ];

  // Generate index options based on the sampling size
  const indexOptions = Array.from(
    { length: Number(samplingSize) || 0 },
    (_, i) => ({ value: i, label: `Index ${i}` })
  );

  // Function to reset all states
  const resetStates = () => {
    setUserId("");
    setSamplingSize("");
    setSamplingMethod("");
    setSelectedIndex(null);
    setError("");
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!userId || !samplingSize || !samplingMethod) {
      setError("All fields are required.");
      return;
    }

    if (samplingMethod === "index" && selectedIndex === null) {
      setError("Please select an index.");
      return;
    }

    const params = {
      surveyId,
      userId,
      sampleSize: samplingSize,
      sampleMethod: samplingMethod,
      index: samplingMethod === "index" ? selectedIndex : null,
    };

    try {
      const response = await createSampling(params);
      console.log("Data submitted successfully:");
      toast.success("Sample data saved successfully!");
      resetStates(); // Reset states after successful submission
      refetch()
      onClose(); // Close modal after submission
    } catch (err) {
      console.error("Error submitting data:", err);
      toast.error("Failed to save sample data.");
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    resetStates(); // Reset states on modal close
    onClose();
  };

  return (
    <CustomModal open={open} closeModal={handleModalClose}>
      <div className="p-4 bg-white rounded-md shadow-md w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Add Sample</h2>

        {error && <div className="text-red-500 mb-2">{error}</div>}

        {loading ? (
          <div>Loading collectors...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Collector */}
            <div>
              <label className="block font-medium mb-1">Select Collector</label>
              <Select
                value={options.find((option) => option.value === userId)}
                onChange={(selectedOption) =>
                  setUserId(selectedOption?.value || "")
                }
                options={options}
                placeholder="Select collector"
                classNamePrefix="react-select"
                isSearchable={true}
              />
            </div>

            {/* Sampling Size */}
            <div>
              <label className="block font-medium mb-1">Sampling Size</label>
              <input
                type="number"
                value={samplingSize}
                onChange={(e) => setSamplingSize(e.target.value)}
                placeholder="Enter sampling size"
                className="w-full px-3 py-2 border rounded-md"
                min={1}
                required
              />
            </div>

            {/* Sampling Method */}
            <div>
              <label className="block font-medium mb-1">Sampling Method</label>
              <Select
                value={samplingMethodOptions.find(
                  (option) => option.value === samplingMethod
                )}
                onChange={(selectedOption) =>
                  setSamplingMethod(selectedOption?.value || "")
                }
                options={samplingMethodOptions}
                placeholder="Select sampling method"
                classNamePrefix="react-select"
              />
            </div>

            {/* Index Selector (Conditional) */}
            {samplingMethod === "index" && (
              <div>
                <label className="block font-medium mb-1">Select Index</label>
                <Select
                  value={indexOptions.find(
                    (option) => option.value === selectedIndex
                  )}
                  onChange={(selectedOption) =>
                    setSelectedIndex(selectedOption?.value || 0)
                  }
                  options={indexOptions}
                  placeholder="Select an index"
                  classNamePrefix="react-select"
                  isDisabled={indexOptions.length === 0}
                />
              </div>
            )}

            {/* Submit Button */}
            <ButtonFilled type="submit" className="w-full">
              Submit
            </ButtonFilled>
          </form>
        )}
      </div>
    </CustomModal>
  );
}

export default AddSampleModal;
