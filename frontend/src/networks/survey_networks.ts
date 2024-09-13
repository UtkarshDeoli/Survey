import { SERVER_URI, create_survey, get_all_surveys, get_survey, update_survey} from "@/utils/constants";
import axios from "axios";

export const createSurvey =async (params:any)=>{
    try {
      const options={
        method: 'POST',
        url: `${SERVER_URI}/${create_survey}`,
        data:params
      }
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return { success: false, message: 'Something Went Wrong' ,error};
    }
  }
export const updateSurvey =async (params:any)=>{
    try {
      const options={
        method: 'POST',
        url: `${SERVER_URI}/${update_survey}?_id=${params._id}`,
        data:params
      }
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return { success: false, message: 'Something Went Wrong' ,error};
    }
  }

export const getAllSurveys =async (params:any)=>{
    try {
      const options={
        method: 'GET',
        url: `${SERVER_URI}/${get_all_surveys}?created_by=${"rohitchand490@gmail.com"}`,
      }
      const response = await axios.request(options);
      console.log(response);
      return response.data;
    } catch (error) {
      return { success: false, message: 'Something Went Wrong' ,error};
    }
  }

export const getSurvey =async (params:any)=>{
    try {
      const options={
        method: 'GET',
        url: `${SERVER_URI}/${get_survey}?_id=${params._id}`,
      }
      const response = await axios.request(options);
      console.log(response);
      return response.data;
    } catch (error) {
      return { success: false, message: 'Something Went Wrong' ,error};
    }
  }
