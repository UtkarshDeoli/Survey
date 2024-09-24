"use client";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import ProfileImage from "./ProfileImage";
import {
  CurrentUserDataInterface,
  UserDataInterface,
} from "@/types/support_interfaces";
import { Message } from "@/types/support_interfaces";

function ChatHeader({ otherUserData }: { otherUserData: UserDataInterface }) {
  return (
    <div className="w-full h-20 flex shadow-md justify-between px-4 items-center mb-1">
      <div className="flex items-center gap-8">
        <ProfileImage
          user={otherUserData}
          isOnline={otherUserData.isOnline}
          alt="profile pic"
        />
        <p className="text-[20px] font-medium">{otherUserData?.name}</p>
      </div>
      <button className="text-white bg-primary-300 rounded-lg p-2">
        <BiSolidPhone size={40} />
      </button>
    </div>
  );
}

function ChatBody({
  messages,
  currentUserId,
}: {
  messages: Message[];
  currentUserId: string;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="w-full h-full flex flex-1 flex-col overflow-y-auto px-4 ">
      {messages.map((message) => {
        const messageDate = new Date(message.createdAt!);
        let hours = messageDate.getHours();
        const minutes = messageDate.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";

        hours %= 12;
        hours = hours || 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        return (
          <div
            key={message._id}
            className={`mb-4 w-full flex ${message.sender === currentUserId ? "justify-end" : "justify-start"} `}
          >
            <div
              className={`max-w-[70%] mt-1 flex p-3 rounded-lg items-end gap-2 ${message.sender === currentUserId ? "bg-primary-300" : "bg-[#85a7ff]"} text-white`}
            >
              <p className="break-words text-[24px] font-medium mb-1">
                {message.content}
              </p>
              <p className="min-w-16 text-[12px] text-my-gray-100 mt-1 text-right">
                {`${hours}:${formattedMinutes} ${ampm}`}
              </p>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}

function ChatFooter({
  sendMessage,
}: {
  sendMessage: (message: string) => void;
}) {
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  const handleSendMessage = () => {
    if (searchBarInput.trim()) {
      sendMessage(searchBarInput);
      setSearchBarInput("");
    }
  };
  return (
    <div className="w-full p-2 pt-1 flex justify-center items-center gap-4">
      <input
        className="w-full h-14 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none text-md text-secondary-300"
        placeholder="Type a message"
        value={searchBarInput}
        onChange={(e) => setSearchBarInput(e.target.value)}
      />
      <ButtonFilled className="h-14 bg-my-blue-600" onClick={handleSendMessage}>
        Send
      </ButtonFilled>
      <ButtonFilled className="w-16 h-14">
        <BsWhatsapp size={30} />
      </ButtonFilled>
    </div>
  );
}
interface ChatComponentInterface {
  otherUserData: UserDataInterface | null;
  messages: Message[];
  sendMessage: (message: string) => void;
  currentUserData: CurrentUserDataInterface;
}

function ChatComponentBody({
  otherUserData,
  messages,
  sendMessage,
  currentUserData,
}: ChatComponentInterface) {
  return (
    <>
      <ChatHeader otherUserData={otherUserData!} />
      <ChatBody messages={messages} currentUserId={currentUserData?.id} />
      <ChatFooter sendMessage={sendMessage} />
    </>
  );
}

function Nochat() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      No Conversation Selected
    </div>
  );
}

function ChatComponent({
  messages,
  sendMessage,
  currentUserData,
  otherUserData,
}: ChatComponentInterface) {
  return (
    <div className="w-3/4 h-5/6 bg-white m-8 ml-0 flex flex-col items-center rounded-lg">
      {otherUserData ? (
        <ChatComponentBody
          messages={messages}
          sendMessage={sendMessage}
          currentUserData={currentUserData}
          otherUserData={otherUserData}
        />
      ) : (
        <Nochat />
      )}
    </div>
  );
}

export default ChatComponent;
