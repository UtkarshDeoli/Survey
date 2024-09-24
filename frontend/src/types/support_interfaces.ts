export interface UserDataInterface {
  _id: string;
  name: string;
  email: string;
  profile_picture: {
    type: string;
    data: Buffer;
  };
  lastMessageData: {
    lastMessage: {
      _id: string;
      content: string;
      sender: string;
    };
    lastMessageTime: string;
  };
  isOnline: boolean;
}

export interface CurrentUserDataInterface {
  id: string;
  email: string;
  role: string;
  isOnline: boolean;
}

export interface Message {
  _id?: string;
  content: string;
  sender: string;
  read: boolean;
  createdAt?: string;
}
