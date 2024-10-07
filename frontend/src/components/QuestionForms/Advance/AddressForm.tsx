"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FormHeader from "../FormHeader";
import FormMappings from "@/utils/FormMappings";
import SingleLineTextForm from "../SingleLineTextForm";
import { ignore_nesting_forms } from "@/utils/constants";
import toast from "react-hot-toast";

interface Props {
  id: string;
  register: ReturnType<typeof useForm>["register"];
  setValue: ReturnType<typeof useForm>["setValue"];
  handleDelete: (id: string) => void;
  handleDragEnter: () => void;
  handleDragStart: () => void;
  endIndex: number;
  control: ReturnType<typeof useForm>["control"];
}

interface FormItem {
  component: React.ComponentType<any>;
  name: string;
}

function AddressForm({
  id,
  register,
  setValue,
  handleDelete,
  handleDragEnter,
  handleDragStart,
  endIndex,
  control,
}: Props) {
  const [hide, setHide] = useState<boolean>(false);
  const [formItems, setFormItems] = useState<FormItem[]>([
    { component: SingleLineTextForm, name: "Address Line 1" },
    { component: SingleLineTextForm, name: "Address Line 2" },
    { component: SingleLineTextForm, name: "City/Town" },
    { component: SingleLineTextForm, name: "State/Province" },
    { component: SingleLineTextForm, name: "ZIP/Postal Code" },
    { component: SingleLineTextForm, name: "Country" },
  ]);

  const { handleSubmit, unregister } = useForm();

  // useEffect(() => {
  //   setValue(`questions.${index}.type`, "Address");
  //   setValue(`questions.${index}.question_id`, id);
  // }, []);
  function handleSubmitForm(data: any) {
    console.log("Inside Address Form: ", data);
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
      {/* <FormHeader
        id={id}
        register={register}
        input={true}
        // handleDelete={handleDelete}
        hide={hide}
        control={control}
        // setHide={() => setHide((prev: boolean) => !prev)}
        defaultQuestionTitle="Address Form"
      /> */}
      {!hide && (
        <div className="bg-blue-100 p-5 w-full">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            className="relative bg-white flex flex-col gap-2 p-2 overflow-y-auto min-h-20 "
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
                    setValue={setValue}
                    register={register}
                    defaultQuestionTitle={formItem.name}
                    key={ind}
                    id={`${id}_${ind}`}
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

export default AddressForm;
