"use client";
import { useState } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { BsPersonCircle, BsWhatsapp } from "react-icons/bs";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { RiSurveyLine } from "react-icons/ri";
import james from "@/../public/icons/james_profile.png";
import olivia from "@/../public/icons/olivia_profile.png";
import Image from "next/image";
import ProfileImage from "./ProfileImage";

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

function MessageHeader({ request }: { request: RequestInterface }) {
  return (
    <div className="w-full h-20 flex shadow-md justify-between px-4 items-center mb-1">
      <div className="flex items-center gap-8">
        <ProfileImage
          src={request?.id % 2 ? james.src : olivia.src}
          isOnline={request?.id % 2 ? false : true}
          alt="profile pic"
        />
        <p className="text-[20px] font-medium">{request?.name}</p>
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
            className={`max-w-[70%] mt-1 flex p-3 rounded-lg items-end gap-2 ${message.isUser ? "bg-primary-300" : "bg-[#85a7ff]"} text-white`}
          >
            <p className="break-words text-[24px] font-medium mb-1">
              {message.content}
            </p>
            <p className="min-w-16 text-[12px] text-my-gray-100 mt-1 text-right">
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

function RequestMessageBody({
  selectedRequest,
  dummyMessages,
}: {
  selectedRequest: RequestInterface | null;
  dummyMessages: Message[];
}) {
  return (
    <>
      <MessageHeader request={selectedRequest} />
      <MessageBody messages={dummyMessages} />
      <MessageFooter />
    </>
  );
}

function NoRequest() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      No Conversation Selected
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
  ];

  return (
    <div className="w-3/4 h-5/6 bg-white m-8 ml-0 flex flex-col items-center rounded-lg">
      {selectedRequest ? (
        <RequestMessageBody
          selectedRequest={selectedRequest}
          dummyMessages={dummyMessages}
        />
      ) : (
        <NoRequest />
      )}
    </div>
  );
}

export default RequestMessages;
