import EmailForm from "../components/QuestionForms/EmailForm";
import Checkbox from "../components/QuestionForms/Checkbox";
import CheckboxListWithOther from "../components/QuestionForms/Checkbox";
import RadioButton from "../components/QuestionForms/RadioButton";
import SingleLineTextForm from "../components/QuestionForms/SingleLineTextForm";
import DropDownForm from "@/components/QuestionForms/DropDownForm";
import NumberPointForm from "@/components/QuestionForms/NumberPointForm";
import PhoneNumberForm from "@/components/QuestionForms/PhoneNumberForm";
import RatingForm from "@/components/QuestionForms/RatingForm";
import DateForm from "@/components/QuestionForms/DateForm";
import RadioButtonWithText from "@/components/QuestionForms/Advance/RadioButtonWithTextForm";
import DropDownGridForm from "@/components/QuestionForms/Advance/DropDownGridForm";
import DropDownWithOtherGridForm from "@/components/QuestionForms/Advance/DropDownWithOtherGridForm";
import SinglelineTextGridForm from "@/components/QuestionForms/Advance/SinglelineTextGridForm";
import NumberGridForm from "@/components/QuestionForms/Advance/NumberGrid";

function FormMappings(): { [key: string]: React.ComponentType<any> } {
  return {
    Email: EmailForm,
    "Single line Text Input": SingleLineTextForm,
    "Checkbox List With Other": CheckboxListWithOther,
    "Checkbox List": Checkbox,
    "Radio Button": RadioButton,
    DropDown: DropDownForm,
    "DropDown With Other": DropDownForm,
    "Number Point": NumberPointForm,
    "Phone Number": PhoneNumberForm,
    Rating: RatingForm,
    Date: DateForm,
    "Radio Button With Text": RadioButtonWithText,
    "DropDown Grid": DropDownGridForm,
    "DropDown With Other Grid": DropDownWithOtherGridForm,
    "Single line Text Grid": SinglelineTextGridForm,
    "Number Grid": NumberGridForm,
  };
}

export default FormMappings;
