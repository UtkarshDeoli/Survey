"use client";
import ChatComponent from "@/components/support/ChatComponent";
import SupportChatsList from "@/components/support/SupportChats";
import Loader from "@/components/ui/Loader";
import useSupportSocket from "@/hooks/useSupportSocket";
import { UserDataInterface } from "@/types/support_interfaces";
import { useEffect, useState } from "react";

function page() {
  const [selectedChat, setSelectedChat] = useState<UserDataInterface | null>(
    null,
  );

  const {
    messages,
    currentUserData,
    userData,
    selectedRole,
    totalUsers,
    handleRoleSelect,
    handleSearchClick,
    sendMessage,
    joinRoom,
    setUserData,
    loading
  } = useSupportSocket();

  const handleChatClick = (chat: UserDataInterface) => {
    joinRoom(currentUserData.id, chat._id);
    setSelectedChat(chat);
  };

  if(loading) return <Loader/>

  return (
    <main className="w-full flex gap-8 p-6 bg-[#ECF0FA] h-[calc(100vh-80px)] overflow-hidden">
      <SupportChatsList
        onChatClick={handleChatClick}
        userData={userData}
        selectedRole={selectedRole}
        currentUserData={currentUserData}
        total={totalUsers}
        handleRoleSelect={handleRoleSelect}
        handleSearchClick={handleSearchClick}
        setUserData={(data: any) => {
          setUserData((prev: any) => [...prev, ...data]);
        }}
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
