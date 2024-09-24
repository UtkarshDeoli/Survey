import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SERVER_URI } from "../utils/constants";
import {
  Message,
  CurrentUserDataInterface,
  UserDataInterface,
} from "@/types/support_interfaces";
import { checkToken } from "@/utils/common_functions";
import { getAllChatsData } from "@/networks/user_networks";

const useSupportSocket = () => {
  const currentUser = checkToken();
  const { id } = currentUser || {};

  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentRoomId, setCurrentRoomId] = useState<string>("");
  const [currentUserData, setCurrentUserData] =
    useState<CurrentUserDataInterface>(currentUser);
  const [userData, setUserData] = useState<UserDataInterface[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  useEffect(() => {
    // Create a new socket connection
    const newSocket = io(SERVER_URI, {
      query: { id },
    });
    setSocket(newSocket);

    getAllChatData();
    return () => {
      newSocket.disconnect();
    };
  }, []);

  async function getAllChatData() {
    const data = await getAllChatsData(
      currentUserData?.id!,
      searchBarInput,
      selectedRole,
    );
    setUserData(data);
  }

  const handleRoomJoined = ({
    roomId,
    messages,
  }: {
    roomId: string;
    otherParticipantId: string;
    messages: Message[];
  }) => {
    setMessages(messages);
    setCurrentRoomId(roomId);
  };

  const handleNewMessage = ({
    roomId,
    newMessage,
  }: {
    roomId: string;
    newMessage: Message;
  }) => {
    console.log("message recieved curr roomid", currentRoomId);
    console.log("message recieved", newMessage);

    if (currentRoomId !== roomId) {
      getAllChatData();
      return;
    }
    setMessages([...messages, newMessage]);
  };

  const toggleOnline = (userId: string) => {
    setCurrentUserData((prev) => ({ ...prev, isOnline: true }));
  };
  const toggleOffline = (userId: string) => {
    setCurrentUserData((prev) => ({ ...prev, isOnline: false }));
  };

  useEffect(() => {
    if (socket) {
      socket.on("room_joined", handleRoomJoined);
      socket.on("new_message", handleNewMessage);
      socket.on("user_online", toggleOnline);
      socket.on("user_offline", toggleOffline);

      return () => {
        socket.off("user_online", toggleOnline);
        socket.off("user_offline", toggleOffline);
        socket.off("room_joined", handleRoomJoined);
        socket.off("new_message", handleNewMessage);
      };
    }
  }, [socket, handleRoomJoined, handleNewMessage, toggleOnline, toggleOffline]);

  const joinRoom = (currentUserId: string, otherUserId: string) => {
    if (socket) {
      socket.emit("join_room", { currentUserId, otherUserId });
    }
  };

  useEffect(() => {
    getAllChatData();
  }, [messages, selectedRole, searchBarInput, currentUserData]);

  const sendMessage = (content: string) => {
    if (socket && id) {
      socket.emit("send_message", {
        roomId: currentRoomId,
        senderId: id,
        content,
      });
    }
  };

  const handleRoleSelect = (role: string) => {
    if (selectedRole === role) setSelectedRole("");
    else setSelectedRole(role);
  };

  const handleSearchClick = (input: string) => {
    setSearchBarInput(input);
  };

  return {
    messages,
    userData,
    currentUserData,
    selectedRole,
    handleRoleSelect,
    handleSearchClick,
    sendMessage,
    joinRoom,
  };
};

export default useSupportSocket;
