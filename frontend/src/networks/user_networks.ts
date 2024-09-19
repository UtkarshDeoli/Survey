import { IUser } from "@/types/user_interfaces";
import { SERVER_URI, update_user,get_user, add_multiple_users,  get_all_users,add_users } from "@/utils/constants";
import axios from "axios";


export const updateUsers =async (params:IUser)=>{
  try {
    const bearerToken =localStorage.getItem('token');
    const options={
      method: 'POST',
      url: `${SERVER_URI}/${update_user}`,
      headers: { 
        Authorization: `Bearer ${bearerToken}`,
      },
      data:params
    }
    const response = await axios.request(options);
    return response.data.success;
  } catch (error) {
    return { success: false, message: 'Something Went Wrong' ,error};
  }
}

export const getUser =async (params: any)=>{
  try {
    const bearerToken =localStorage.getItem('token');
    const options={
      method: 'GET',
      url: `${SERVER_URI}/${get_user}?userId=${params}`,
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

export const getAllUsers =async (params: any)=>{
  try {
    const bearerToken =localStorage.getItem('token');
    const options={
      method: 'GET',
      url: `${SERVER_URI}/${get_all_users}?filter=${params}`,
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

export const addUsers =async (params: any)=>{
    try {
      // const bearerToken =localStorage.getItem('token');
      const options={
        method: 'POST',
        url: `${SERVER_URI}/${add_users}`,
        // headers: { 
        //   Authorization: `Bearer ${bearerToken}`,
        //   'Content-Type': 'application/json'
        // },
        data:params
      }
      console.log(options)
      const response = await axios.request(options);
    //   const response = await axios.post(`${SERVER_URI}/${add_users}`,params,{
    //       headers: { 
    //         Authorization: `Bearer ${bearerToken}`,
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   );
      console.log(response)
      return response.data.success;
    } catch (error) {
      return { success: false, message: 'Something Went Wrong' ,error};
    }
  }


  export const addMultipleUsers =async (params: any)=>{
    try {
      const options={
        method: 'POST',
        url: `${SERVER_URI}/${add_multiple_users}`,
        data:params
      }
      const response = await axios.request(options);
      console.log(response)
      return response.data;
    } catch (error) {
      return { success: false, message: 'Something Went Wrong' ,error};
    }
  }