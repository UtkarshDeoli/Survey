"use client";

import React, { useState } from "react";
import FormMappings from "@/utils/FormMappings";
import { useForm } from "react-hook-form";
import ButtonBordered from "../ui/buttons/ButtonBordered";

function SurveyForm() {
    //states
  const [forms, setForms] = useState< React.ComponentType<any>[]>([]);

// React hook form
  const { register, handleSubmit, setValue } = useForm();

  // Handle form drop event
  function handleSubmitForm(data: any) {
    console.log(data);
  }
  console.log("formsss: ", forms)
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const formMapping = FormMappings();
    const data = e.dataTransfer.getData("text/plain") as keyof typeof formMapping;
    console.log("Datataaa: ", data)
    setForms([...forms, formMapping[data]]);
  }
  return (
    <main className="w-full flex justify-center items-center">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-[1062px] h-[682px] bg-white flex flex-col gap-2 p-2"
      >
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col">
          {forms.map((Form, ind) => (
            <Form setValue={setValue} register={register} key={ind} id={ind}/>
          ))}
          {forms.length >0 && <ButtonBordered className="mt-10 w-fit ml-auto">Save</ButtonBordered>}
        </form>
      </div>
    </main>
  );
}

export default SurveyForm;
