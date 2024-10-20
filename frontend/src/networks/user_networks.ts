import { IUser } from "@/types/user_interfaces";
import {
  SERVER_URI,
  update_user,
  get_user,
  add_multiple_users,
  get_all_users,
  add_users,
  get_all_chats_data,
  update_users,
  get_all_karyakartas,
  create_karyakarta,
} from "@/utils/constants";
import axios from "axios";

export const updateUsers = async (params: IUser) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${update_user}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      data: params,
    };
    const response = await axios.request(options);
    return response.data.success;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};
export const updateMultipleUsers = async (params: any) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${update_users}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      data: params,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const getUser = async (params: any) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${SERVER_URI}/${get_user}?userId=${params}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const getAllUsers = async (params: {
  searchBarInput?: string;
  selectedRole?: string;
  withProfilePic?: boolean;
  page?: number;
  limit?: number;
}) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${SERVER_URI}/${get_all_users}`,
      params: {
        filter: params.searchBarInput || "",
        getWithProfilePicture: params.withProfilePic ?? false,
        role: params.selectedRole || "",
        page: params.page,
        limit: params.limit,
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};


export const addUsers = async (params: any) => {
  try {
    // const bearerToken =localStorage.getItem('token');
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${add_users}`,
      // headers: {
      //   Authorization: `Bearer ${bearerToken}`,
      //   'Content-Type': 'application/json'
      // },
      data: params,
    };
    console.log(options);
    const response = await axios.request(options);
    //   const response = await axios.post(`${SERVER_URI}/${add_users}`,params,{
    //       headers: {
    //         Authorization: `Bearer ${bearerToken}`,
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   );
    console.log(response);
    return response.data.success;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const addMultipleUsers = async (params: any) => {
  try {
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${add_multiple_users}`,
      data: params,
    };
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const getAllChatsData = async (params: {
  currentUserId: string;
  searchBarInput: string;
  selectedRole: string;
  page?:number;
  limit?: number;
}) => {
  try {
    const options = {
      method: "GET",
      url: `${SERVER_URI}/${get_all_chats_data}`,
      params: {
        filter: params.searchBarInput,
        role: params.selectedRole,
        currentUserId:params.currentUserId,
        page:params.page,
        limit:params.limit
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "Something Went Wrong while getting all chats data",
      error,
    };
  }
};


// karyakartas

export const getAllKaryakarta = async (params: {
  searchBarInput?: string;
  selectedRole?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const options = {
      method: "GET",
      url: `${SERVER_URI}/${get_all_karyakartas}`,
      params: {
        filter: params.searchBarInput || "",
        role: params.selectedRole || "",
        page: params.page,
        limit: params.limit,
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};
export const createKaryakarta = async (params: any) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${create_karyakarta}`,
      data:params,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};
