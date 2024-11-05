import { SERVER_URI, create_role, delete_role, get_all_roles, get_roles, update_role} from "@/utils/constants";
import axios from "axios";

export const getAllRoles = async () => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_all_roles}`,
      };
      const response = await axios.request(options);
      console.log("response --->",response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const getRoles = async (params:any) => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_roles}`,
        params
      };
      const response = await axios.request(options);
      console.log("response --->",response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const createRole = async (params:any) => {
    try {
      const options = {
        method: "POST",
        url: `${SERVER_URI}/${create_role}`,
        data:params
      };
      const response = await axios.request(options);
      console.log("response --->",response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const updateRole = async (params:any) => {
    try {
      const options = {
        method: "POST",
        url: `${SERVER_URI}/${update_role}`,
        data:params
      };
      const response = await axios.request(options);
      console.log("response --->",response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const deleteRole = async (params:any) => {
    try {
      const options = {
        method: "POST",
        url: `${SERVER_URI}/${delete_role}`,
        data:params
      };
      const response = await axios.request(options);
      console.log("response --->",response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };