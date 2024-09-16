import {
  SERVER_URI,
  create_survey,
  delete_survey,
  get_all_surveys,
  get_survey,
  update_survey,
} from "@/utils/constants";
import axios from "axios";

export const createSurvey = async (params: any) => {
  try {
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${create_survey}`,
      data: params,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const updateSurvey = async (params: any) => {
  try {
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${update_survey}?_id=${params._id}`,
      data: params.formData,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const getAllSurveys = async (params: any) => {
  try {
    const page = params.page || 1;
    const limit = params.limit || 10;
    const filter = params.filter || "";
    const created_by = params.created_by;
    const sortBy = params.sortBy;
    const sortOrder = params.sortOrder;

    let published = params.published;
    if (params.published === "published") {
      published = true;
    } else if (params.published === "unpublished") {
      published = false;
    } else if (params.published === "all") {
      published = undefined;
    }

    const options = {
      method: "GET",
      url: `${SERVER_URI}/${get_all_surveys}?filter=${filter}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&published=${published}&created_by=${created_by}`,
    };
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const getSurvey = async (params: any) => {
  try {
    const options = {
      method: "GET",
      url: `${SERVER_URI}/${get_survey}?_id=${params._id}`,
    };
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};

export const deleteSurvey = async (params: any) => {
  try {
    const options = {
      method: "POST",
      url: `${SERVER_URI}/${delete_survey}`,
      data: params,
    };
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    return { success: false, message: "Something Went Wrong", error };
  }
};
