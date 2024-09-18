"use client";
import { useState } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { BsPersonCircle, BsWhatsapp } from "react-icons/bs";
import ButtonFilled from "../ui/buttons/ButtonFilled";

interface RequestInterface {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

function MessageHeader({ request }: { request: RequestInterface | null }) {
  return (
    <div className="w-full h-20 flex shadow-md justify-between px-4 items-center mb-1">
      <div className="flex items-center gap-8">
        <BsPersonCircle className="text-primary-300" size={56} />
        <p className="text-xl font-semibold">{request?.name}</p>
      </div>
      <button className="text-white bg-primary-300 rounded-lg p-2">
        <BiSolidPhone size={40} />
      </button>
    </div>
  );
}

function MessageBody({ messages }: { messages: Message[] }) {
  return (
    <div className="w-full h-full flex flex-1 flex-col overflow-y-auto px-4 ">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 w-full flex ${message.isUser ? "justify-end" : "justify-start"} `}
        >
          <div
            className={`max-w-[70%] flex p-3 rounded-lg items-end gap-2 ${message.isUser ? "bg-[#85a7ff]" : "bg-primary-300"} text-white`}
          >
            <p className="break-words mb-1">{message.content}</p>
            <p className="min-w-16 text-xs text-gray-200 mt-1 text-right">
              {message.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MessageFooter() {
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  return (
    <div className="w-full p-2 pt-1 flex justify-center items-center gap-4">
      <input
        className="w-full h-14 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none text-md text-secondary-300"
        placeholder="Type a message"
        value={searchBarInput}
        onChange={(e) => setSearchBarInput(e.target.value)}
      />
      <ButtonFilled className="h-14 bg-my-blue-600">Send</ButtonFilled>
      <ButtonFilled className="w-16 h-14">
        <BsWhatsapp size={30} />
      </ButtonFilled>
    </div>
  );
}

function RequestMessages({
  selectedRequest,
}: {
  selectedRequest: RequestInterface | null;
}) {
  const dummyMessages: Message[] = [
    {
      id: 1,
      sender: "User",
      content: "Hello",
      timestamp: "12:59 AM",
      isUser: false,
    },
    {
      id: 2,
      sender: "Support",
      content: "Hi, how can I help you?",
      timestamp: "01:59 PM",
      isUser: true,
    },

    {
      id: 3,
      sender: "User",
      content: "Hello",
      timestamp: "12:59 AM",
      isUser: false,
    },
    {
      id: 4,
      sender: "Support",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "01:59 PM",
      isUser: true,
    },
    {
      id: 5,
      sender: "User",
      content: "Hello",
      timestamp: "12:59 AM",
      isUser: false,
    },
    {
      id: 6,
      sender: "Support",
      content: "Hi, how can I help you?",
      timestamp: "01:59 PM",
      isUser: true,
    },

    {
      id: 7,
      sender: "User",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "12:59 AM",
      isUser: false,
    },
    {
      id: 8,
      sender: "Support",
      content: "Hi, how can I help you?",
      timestamp: "01:59 PM",
      isUser: true,
    },
  ];

  return (
    <div className="w-3/4 h-10/12 bg-white m-8 ml-0 flex flex-col items-center rounded-lg">
      <MessageHeader request={selectedRequest} />
      <MessageBody messages={dummyMessages} />
      <MessageFooter />
    </div>
  );
}

export default RequestMessages;
