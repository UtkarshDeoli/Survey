"use client";
import { useState } from "react";
import { BsFunnel, BsPersonCircle, BsSearch } from "react-icons/bs";

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
      className={`h-20 bg-opacity-20 mb-4 items-center p-4 rounded-lg cursor-pointer ${isSelected ? "bg-primary-300" : "bg-white"}`}
      onClick={() => onClick(request)}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <BsPersonCircle className="text-primary-300" size={40} />
          <div className="flex flex-col">
            <p>{request.name}</p>
            <p className="text-sm text-my-gray-200">{request.lastMessage}</p>
          </div>
        </span>
        <p className="text-md text-my-gray-200">{request.lastMessageDate}</p>
      </div>
    </div>
  );
}

interface SupportRequestsProps {
  onRequestClick: (request: RequestInterface) => void;
}

function SupportRequests({ onRequestClick }: SupportRequestsProps) {
  const data = buildRequestArray(20);
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(
    null,
  );
  return (
    <div className="w-1/4 h-10/12 bg-white m-8 flex flex-col items-center p-4 rounded-lg ">
      <div className="relative w-full h-12 mb-6">
        <BsFunnel
          className="cursor-pointer absolute right-12 top-1/2 transform -translate-y-1/2 text-secondary-300"
          size={20}
        />
        <BsSearch
          className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-300"
          size={20}
        />
        <input
          className="w-full h-12 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none text-[14px] text-secondary-300"
          placeholder="Search Here"
          value={searchBarInput}
          onChange={(e) => setSearchBarInput(e.target.value)}
        />
      </div>

      <div className="w-full h-full flex-1 flex-col overflow-y-scroll rounded-lg">
        {data.map((request) => (
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
