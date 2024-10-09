import { get_all_survey_responses, get_survey_responses, save_responses, SERVER_URI } from "@/utils/constants";
import axios from "axios";

export const saveResponses = async (params: any) => {
    try {
      const options = {
        method: "POST",
        url: `${SERVER_URI}/${save_responses}`,
        data: params,
      };
      const response = await axios.request(options);
      console.log(response);
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const getAllSurveyResponses = async (params:any) => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_all_survey_responses}`,
        params
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const getSurveyResponses = async (params:any) => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_survey_responses}`,
        params
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };