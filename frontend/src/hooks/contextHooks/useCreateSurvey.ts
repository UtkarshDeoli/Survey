import { useContext } from "react";
import CreateSurveyContext from "@/store/createSurveyContext";
export const useCreateSurveyContext = () => {
    const context = useContext(CreateSurveyContext);
    if (!context) {
      throw new Error(
        "useCreateSurveyContext must be used within a CreateSurveyContextProvider"
      );
    }
    return context;
  };