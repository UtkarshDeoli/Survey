import { get_users, SERVER_URI } from "@/utils/constants";
import axios from "axios";


export const getUsers =async ()=>{
  try {
    const bearerToken =localStorage.getItem('token');
    const options={
      method: 'GET',
      url: `${SERVER_URI}/${get_users}`,
      headers: { 
        Authorization: `Bearer ${bearerToken}`,
      }
    }
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    return { success: false, message: 'Something Went Wrong' ,error};
  }
}