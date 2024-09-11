import { IUser } from "@/types/user_interfaces";
import { add_users, SERVER_URI } from "@/utils/constants";
import axios from "axios";


export const addUsers =async (params:IUser[])=>{
  try {
    const bearerToken =localStorage.getItem('token');
    // const options={
    //   method: 'POST',
    //   url: `${SERVER_URI}/${add_users}`,
    //   headers: { 
    //     Authorization: `Bearer ${bearerToken}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body:params
    // }
    // console.log(options)
    // const response = await axios.request(options);
    const response = await axios.post(`${SERVER_URI}/${add_users}`,params,{
        headers: { 
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response)
    return response.data.success;
  } catch (error) {
    return { success: false, message: 'Something Went Wrong' ,error};
  }
}