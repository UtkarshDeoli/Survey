"use client";
import ChatComponent from "@/components/support/ChatComponent";
import SupportChatsList from "@/components/support/SupportChats";
import useSupportSocket from "@/hooks/useSupportSocket";
import { UserDataInterface } from "@/types/support_interfaces";
import { useState } from "react";

function page() {
  const [selectedChat, setSelectedChat] = useState<UserDataInterface | null>(
    null,
  );

  const {
    messages,
    currentUserData,
    userData,
    selectedRole,
    handleRoleSelect,
    handleSearchClick,
    sendMessage,
    joinRoom,
  } = useSupportSocket();

  const handleChatClick = (chat: UserDataInterface) => {
    joinRoom(currentUserData.id, chat._id);
    setSelectedChat(chat);
  };

  return (
    <main className="w-full flex bg-[#ECF0FA] h-full">
      <SupportChatsList
        onChatClick={handleChatClick}
        userData={userData}
        selectedRole={selectedRole}
        handleRoleSelect={handleRoleSelect}
        handleSearchClick={handleSearchClick}
      />
      <ChatComponent
        messages={messages}
        sendMessage={sendMessage}
        currentUserData={currentUserData}
        otherUserData={selectedChat}
      />
    </main>
  );
}

export default page;
