import { SERVER_URI, dashboard } from "@/utils/constants";
import axios, { AxiosRequestConfig } from "axios";

export async function getDashboard(){
    try {
        const options :AxiosRequestConfig = {
          method: "GET",
          url: `${SERVER_URI}/${dashboard}`,
        };
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        return { success: false, message: "Something Went Wrong", error };
      }
}