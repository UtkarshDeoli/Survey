"use client";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProfileImage from "./ProfileImage";
import { getAllChatsData, getAllUsers } from "@/networks/user_networks";
import {
  CurrentUserDataInterface,
  UserDataInterface,
} from "@/types/support_interfaces";
import { truncateText, getDateAndMonth } from "@/utils/common_functions";
import InfiniteScroll from "react-infinite-scroll-component";

interface ChatCardProp {
  chat: UserDataInterface;
  onClick: (chat: UserDataInterface) => void;
  isSelected: boolean;
}

function ChatCard({ chat, onClick, isSelected }: ChatCardProp) {
  const lastMessageData = chat.lastMessageData;

  let lastMessage = "";
  let formattedDate = "";
  if (lastMessageData && lastMessageData.lastMessage != null) {
    lastMessage = truncateText(lastMessageData.lastMessage.content, 50);
    const lastMessageDate = lastMessageData.lastMessageTime;
    formattedDate = getDateAndMonth(lastMessageDate);
  }

  return (
    <div
      key={chat._id}
      className={`h-14 bg-opacity-20 mb-[18px] items-center px-[10px] py-[6px] rounded-lg cursor-pointer ${
        isSelected ? "bg-primary-300" : "bg-white"
      }`}
      onClick={() => onClick(chat)}
    >
      <div className="flex h-full justify-between items-center">
        <span className="flex items-center gap-2">
          <ProfileImage
            user={chat}
            isOnline={chat.isOnline}
            alt="profile pic"
          />
          <div className="flex flex-col">
            <p className="text-[16px]">{chat.name}</p>
            <p className="text-[13px] text-my-gray-200">{lastMessage}</p>
          </div>
        </span>
        <p className="flex flex-col text-[15px] justify-center text-my-gray-200">
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

interface RoleChipsProps {
  Roles: string[];
  selectedRole: string;
  handleRoleSelect: (role: string) => void;
}

function RoleChips({ Roles, selectedRole, handleRoleSelect }: RoleChipsProps) {
  return (
    <div className="w-full h-fit mb-[18px] rounded-lg overflow-x-scroll no-scrollbar">
      <div className="flex justify-center items-center min-w-max">
        {Roles.map((role) => {
          const selected = selectedRole === role;
          return (
            <p
              key={role}
              className={`flex flex-col h-full ${
                selected
                  ? "bg-primary-300 border-2 border-primary-300 text-white"
                  : "text-secondary-300 border-2 border-secondary-200"
              } text-[15px] px-2 py-2 font-medium mr-2 rounded-full whitespace-nowrap cursor-pointer`}
              onClick={() => handleRoleSelect(role)}
            >
              {role}
            </p>
          );
        })}
      </div>
    </div>
  );
}

interface SupportChatProps {
  onChatClick: (chat: UserDataInterface) => void;
  userData: UserDataInterface[];
  selectedRole: string;
  handleRoleSelect: (role: string) => void;
  handleSearchClick: (input: string) => void;
  setUserData: (userData: UserDataInterface[]) => void;
  currentUserData: any;
  total: number;
}

function SupportChatsList({
  onChatClick,
  userData,
  selectedRole,
  handleRoleSelect,
  handleSearchClick,
  setUserData,
  currentUserData,
  total,
}: SupportChatProps) {
  const Roles = [
    "Admin",
    "Booth Karyakarta",
    "Survey Collector",
    "Support Executive",
    "Survey Manager",
  ];
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  async function loadMoreChats() {
    const params = {
      currentUserId: currentUserData?.id!,
      searchBarInput,
      selectedRole,
      page: page + 1,
      limit: 10,
    };
    console.log("loading more...");
    const res = await getAllChatsData(params);
    setUserData(res.data);
    setPage(page + 1);
  }

  return (
    <div className="w-4/12 h-full bg-white  flex flex-col items-center px-[10px] py-2 rounded-lg ">
      <div className="relative w-full h-12 mb-[18px]">
        <BsSearch
          className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-300"
          size={20}
          onClick={() => handleSearchClick(searchBarInput)}
        />
        <input
          className="w-full h-12 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none text-[16px] font-medium text-secondary-300"
          placeholder="Search Here"
          value={searchBarInput}
          onChange={(e) => setSearchBarInput(e.target.value)}
        />
      </div>

      <RoleChips
        Roles={Roles}
        selectedRole={selectedRole}
        handleRoleSelect={handleRoleSelect}
      />

      <div
        className="w-full h-full flex-1 flex-col overflow-y-scroll rounded-lg"
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={userData?.length} // This is the length of the current items
          next={loadMoreChats} // Function to call when scrolled to bottom
          hasMore={userData?.length < total} // Whether there are more items to load
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv" // The scrollable container
          endMessage={<p style={{ textAlign: "center" }}>No more chats</p>}
        >
          <div>
            {/* Recents Section */}
            <div className="w-full flex flex-row justify-center items-center gap-2 my-5">
              <span className="text-gray-400">Recents</span>
              <div className="flex-1 border-t border-gray-400 mr-2.5" />
            </div>

            {/* Chats with Recent Messages */}
            {userData?.map(
              (chat, index) =>
                chat.lastMessageData && (
                  <ChatCard
                    key={chat._id}
                    chat={chat}
                    onClick={(chat) => {
                      setSelectedChatId(chat._id);
                      onChatClick(chat);
                    }}
                    isSelected={selectedChatId === chat._id}
                  />
                ),
            )}

            {/* Start New Chat Section */}
            <div className="w-full flex flex-row justify-center items-center gap-2 my-5">
              <span className="text-gray-400">Start New</span>
              <div className="flex-1 border-t border-gray-400 mr-2.5" />
            </div>

            {/* Chats without Messages */}
            {userData?.map(
              (chat, index) =>
                !chat.lastMessageData && (
                  <ChatCard
                    key={chat._id}
                    chat={chat}
                    onClick={(chat) => {
                      setSelectedChatId(chat._id);
                      onChatClick(chat);
                    }}
                    isSelected={selectedChatId === chat._id}
                  />
                ),
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default SupportChatsList;
