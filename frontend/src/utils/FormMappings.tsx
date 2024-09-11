
import EmailForm from "../components/QuestionForms/EmailForm"
import Checkbox from "../components/QuestionForms/Checkbox"
import CheckboxListWithOther from "../components/QuestionForms/Checkbox"
import RadioButton  from "../components/QuestionForms/RadioButton"
import SingleLineTextForm from "../components/QuestionForms/SingleLineTextForm"
function FormMappings(): { [key: string]: React.ComponentType<any> }  {
  return {
    Email: EmailForm,
    "Singleline Text Input":SingleLineTextForm,
    "Checkbox List With Other": CheckboxListWithOther,
    "Checkbox List": Checkbox,
    "Radio Button": RadioButton

  };
}

export default FormMappings;
