
import EmailForm from "../components/QuestionForms/EmailForm"
import CheckboxListWithOther from "../components/QuestionForms/CheckboxListWithOther"
function FormMappings(): { [key: string]: React.ComponentType<any> }  {
  return {
    Email: EmailForm,
    CheckboxListWithOther: CheckboxListWithOther
  };
}

export default FormMappings;
