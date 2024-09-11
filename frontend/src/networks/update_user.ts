import { IUser } from "@/types/user_interfaces";
import { SERVER_URI, update_user } from "@/utils/constants";
import axios from "axios";


export const addUsers =async (params:IUser)=>{
  try {
    const bearerToken =localStorage.getItem('token');
    const options={
      method: 'POST',
      url: `${SERVER_URI}/${update_user}`,
      headers: { 
        Authorization: `Bearer ${bearerToken}`,
      },
      body:params
    }
    const response = await axios.request(options);
    return response.data.success;
  } catch (error) {
    return { success: false, message: 'Something Went Wrong' ,error};
  }
}