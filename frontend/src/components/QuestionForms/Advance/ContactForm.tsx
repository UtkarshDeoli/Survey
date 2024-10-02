"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FormHeader from "../FormHeader";
import FormMappings from "@/utils/FormMappings";
import SingleLineTextForm from "../SingleLineTextForm";
import PhoneNumberForm from "../PhoneNumberForm";
import EmailForm from "../EmailForm";
import MultiLineTextForm from "../MultiLineTextForm";
import { ignore_nesting_forms } from "@/utils/constants";
import { toast } from "react-hot-toast";
import { FormProps } from "@/types/forms_interfaces";


// Combined form component and name type
interface FormItem {
  component: React.ComponentType<any>;
  name: string;
}

function ContactForm({
  id,
  index,
  register,
  handleHide,
  control,
  hide,
  handleDelete,
  handleDuplicate,
  handleDragStart,
  handleDragEnter,
  endIndex,
  defaultQuestionTitle,
}: FormProps) {
  const [childhide, setChildHide] = useState<boolean>(false);
  const [formItems, setFormItems] = useState<FormItem[]>([
    { component: SingleLineTextForm, name: "First Name" },
    { component: SingleLineTextForm, name: "Last Name" },
    { component: PhoneNumberForm, name: "Phone" },
    { component: EmailForm, name: "Email" },
    { component: MultiLineTextForm, name: "Message" },
  ]);

  // console.log(formItems);
  const { handleSubmit, unregister } = useForm();

  function handleSubmitForm(data: any) {
    console.log("Inside Contact Form: ", data);
  }

  function handleChildDelete(formId: string) {
    const formIndex = formId.split("_").pop();

    if (formIndex) {
      const index = parseInt(formIndex, 10);

      // Remove the form and corresponding name at the specific index
      setFormItems((prevFormItems) =>
        prevFormItems.filter((_, ind) => ind !== index),
      );

      unregister(`questions.${formId}`);
    }
  }
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    const formMapping = FormMappings();
    const data = e.dataTransfer.getData(
      "text/plain",
    ) as keyof typeof formMapping;
    console.log("Datataaa: ", data);
    if (!ignore_nesting_forms.includes(data.toString())) {
      setFormItems((prevFormItems) => [
        ...prevFormItems,
        { component: formMapping[data], name: "" },
      ]);
    } else {
      toast.error(`${data} in not allowed to add in group`);
    }
  }

  return (
    <div
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      draggable
      className={`flex justify-center items-center flex-col gap-2 border border-secondary-200 rounded-md overflow-hidden cursor-move ${endIndex?.toString() === id ? "border-2 border-blue-500" : ""}`}
    >
     <FormHeader
        handleDelete={handleDelete}
        handleDuplicate={handleDuplicate}
        register={register}
        id={id}
        index={index}
        input={true}
        hide={hide}
        handleHide={handleHide}
        defaultQuestionTitle={defaultQuestionTitle}
        control={control}
      />
      {!hide && (
        <div className="bg-blue-100 p-5 w-full ">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            className="relative bg-white flex flex-col gap-2 p-2 overflow-y-auto h-auto "
          >
            <form
              onSubmit={handleSubmit(handleSubmitForm)}
              className="flex flex-col gap-2"
            >
              {formItems.map((formItem, ind) => {
                const Form = formItem.component;
                return (
                  <Form
                    handleDelete={handleChildDelete}
                    control={control}
                    register={register}
                    defaultQuestionTitle={formItem.name}
                    key={ind}
                    id={`${id}_${ind}`}
                    index={ind}
                  />
                );
              })}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
