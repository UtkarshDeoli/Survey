"use client";
import { useState } from "react";
import { BsPersonCircle, BsSearch } from "react-icons/bs";

interface RequestInterface {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
}

interface RequestCardProp {
  request: RequestInterface;
  onClick: (request: RequestInterface) => void;
  isSelected: boolean;
}

function buildRequestArray(numberOfRequests: number) {
  const requests = [];

  for (let i = 1; i <= numberOfRequests; i++) {
    requests.push({
      id: i,
      name: `Username ${i}`,
      lastMessage: `Message ${i}`,
      lastMessageDate: `Date ${i}`,
    });
  }

  return requests;
}

function RequestCard({ request, onClick, isSelected }: RequestCardProp) {
  return (
    <div
      className={`h-14 bg-opacity-20 mb-[18px] items-center px-[10px] py-[6px] rounded-lg cursor-pointer ${isSelected ? "bg-primary-300" : "bg-white"}`}
      onClick={() => onClick(request)}
    >
      <div className="flex h-full justify-between items-center">
        <span className="flex items-center gap-2">
          <BsPersonCircle className="text-primary-300" size={40} />
          <div className="flex flex-col">
            <p className="text-[16px]">{request.name}</p>
            <p className="text-[13px] text-my-gray-200">
              {request.lastMessage}
            </p>
          </div>
        </span>
        <p className="flex flex-col text-[15px] justify-center text-my-gray-200">
          {request.lastMessageDate}
        </p>
      </div>
    </div>
  );
}

interface SupportRequestsProps {
  onRequestClick: (request: RequestInterface) => void;
}

function SupportRequests({ onRequestClick }: SupportRequestsProps) {
  const Data = buildRequestArray(20);
  const Roles = [
    "Admin",
    "Booth Karyakarta",
    "Survey Collector",
    "Support Executive",
    "Survey Manager",
  ];
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(
    null,
  );
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  function handleRoleSelect(role: string) {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  }
  return (
    <div className="w-4/12 h-5/6 bg-white m-8 flex flex-col items-center px-[10px] py-2 rounded-lg ">
      <div className="relative w-full h-12 mb-[18px]">
        <BsSearch
          className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-300"
          size={20}
        />
        <input
          className="w-full h-12 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none text-[16px] font-medium text-secondary-300"
          placeholder="Search Here"
          value={searchBarInput}
          onChange={(e) => setSearchBarInput(e.target.value)}
        />
      </div>

      <div className="w-full h-fit mb-[18px] rounded-lg overflow-x-scroll no-scrollbar">
        <div className="flex justify-center items-center min-w-max">
          {Roles.map((role) => {
            const selected = selectedRoles.includes(role);
            return (
              <p
                className={`flex flex-col h-full ${selected ? "bg-primary-300 border-2 border-primary-300 text-white" : "text-secondary-300 border-2 border-secondary-200"} text-[15px] px-2 py-2 font-medium mr-2 rounded-full whitespace-nowrap cursor-pointer`}
                onClick={() => handleRoleSelect(role)}
              >
                {role}
              </p>
            );
          })}
        </div>
      </div>

      <div className="w-full h-full flex-1 flex-col overflow-y-scroll rounded-lg">
        {Data.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onClick={(request) => {
              setSelectedRequestId(request.id);
              onRequestClick(request);
            }}
            isSelected={selectedRequestId === request.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SupportRequests;
