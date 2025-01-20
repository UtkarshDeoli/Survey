import { SERVER_URI, create_sampling,get_sample_groups,get_sample_surveys,get_sampling } from "@/utils/constants";
import axios from "axios";

export const createSampling = async (params: any) => {
    try {
      const options = {
        method: "POST",
        url: `${SERVER_URI}/${create_sampling}`,
        headers:{
          "Content-Type": "application/json"
        },
        data: params,
      };
      const response = await axios.request(options);
      console.log(response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
  };
export const getSampling = async (params: any) => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_sampling}`,
        headers:{
          "Content-Type": "application/json"
        },
        params: params,
      };
      const response = await axios.request(options);
      console.log(response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
};
export const getSampleSurveys = async (params: any) => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_sample_surveys}`,
        headers:{
          "Content-Type": "application/json"
        },
        params: params,
      };
      console.log(`${SERVER_URI}/${get_sample_surveys}`)
      const response = await axios.request(options);
      console.log(response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
};
export const getSamplingGroups = async (params: any) => {
    try {
      const options = {
        method: "GET",
        url: `${SERVER_URI}/${get_sample_groups}`,
        headers:{
          "Content-Type": "application/json"
        },
        params: params,
      };
      console.log(`${SERVER_URI}/${get_sample_surveys}`)
      const response = await axios.request(options);
      console.log(response)
      return response.data;
    } catch (error) {
      return { success: false, message: "Something Went Wrong", error };
    }
};