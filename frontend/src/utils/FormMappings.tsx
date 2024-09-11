
import EmailForm from "../components/QuestionForms/EmailForm"
function FormMappings(): { [key: string]: React.ComponentType<any> }  {
  return {
    Email: EmailForm
  };
}

export default FormMappings;
