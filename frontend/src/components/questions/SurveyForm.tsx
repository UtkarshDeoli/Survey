"use client";

import React, { useState } from "react";
import FormMappings from "@/utils/FormMappings";
import { useForm } from "react-hook-form";
import ButtonBordered from "../ui/buttons/ButtonBordered";

function SurveyForm() {
  //states
  const [forms, setForms] = useState< React.ComponentType<any>[]>([]);

  // React hook form
  const { register, handleSubmit, setValue , control, unregister} = useForm();

  // Handle form drop event
  function handleSubmitForm(data: any) {
    console.log(data);
  }

  function handleDelete(id:string){ 
    setForms(forms.filter((form,index)=>index.toString() !== id))
    unregister(`questions.${id}`)
  }
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const formMapping = FormMappings();
    const data = e.dataTransfer.getData("text/plain") as keyof typeof formMapping;
    setForms([...forms, formMapping[data]]);
  }
  return (
    <main className="w-full flex justify-center items-center">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative w-[1062px] h-[682px] bg-white flex flex-col gap-2 p-2 overflow-y-auto"
      >
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-2">
          {forms.map((Form, ind) => (
            <Form handleDelete={handleDelete} control={control} setValue={setValue} register={register} key={ind} id={ind.toString()}/>
          ))}
          {forms.length >0 && <ButtonBordered className="mt-10 w-fit ml-auto">Save</ButtonBordered>}
        </form>
      </div>
    </main>
  );
}

export default SurveyForm;
