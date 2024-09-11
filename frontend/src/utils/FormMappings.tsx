
import EmailForm from "../components/QuestionForms/EmailForm"
import SingleLineTextForm from "../components/QuestionForms/SingleLineTextForm"
function FormMappings(): { [key: string]: React.ComponentType<any> }  {
  return {
    Email: EmailForm,
    "Singleline Text Input":SingleLineTextForm,
    
  };
}

export default FormMappings;
