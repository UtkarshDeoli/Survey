"use client";

import React, { useState } from "react";
import FormMappings from "@/utils/FormMappings";
import { useForm } from "react-hook-form";
import ButtonBordered from "../ui/buttons/ButtonBordered";

function SurveyForm() {
  // states
  const [forms, setForms] = useState<React.ComponentType<any>[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [endDragIndex, setEndDragIndex] = useState<number | null>(null);
  
  // React hook form
  const { register, handleSubmit, setValue, control, unregister } = useForm();

  // Handle form submission
  function handleSubmitForm(data: any) {
    console.log(data);
  }

  // Handle form deletion
  function handleDelete(id: string) {
    setForms(forms.filter((_, index) => index.toString() !== id));
    unregister(`questions.${id}`);
  }

  //Handle start of drag
  function handleDragStart(e:React.DragEvent<HTMLDivElement>,index:number){
    e.stopPropagation();
    e.dataTransfer.setData("text/plain","form_reorder")
    setDraggedIndex(index)
  }

  // Handle form drop event
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const formMapping = FormMappings();
    const data = e.dataTransfer.getData("text/plain") as keyof typeof formMapping;
    if(data !== "form_reorder"){
      setForms([...forms, formMapping[data]]);
    }
  }

  // Handle drop event (rearrange forms based on the dragged and dropped indices)
  function handleDropForm(e:React.DragEvent<HTMLDivElement>) {
    if (draggedIndex === null) return;

    const reorderedForms = [...forms];
    const [draggedItem] = reorderedForms.splice(draggedIndex, 1);
    reorderedForms.splice(endDragIndex || 0, 0, draggedItem);
    setForms(reorderedForms);
    setDraggedIndex(null);
    setEndDragIndex(null); 
  }

   // Handle drag enter event (update the end drag index)
   function handleDragEnter(index: number) {
    if (draggedIndex !== null && index !== draggedIndex) {
      setEndDragIndex(index);
      
    }
  }

  return (
    <main className="w-full flex justify-center items-center">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative w-[1062px] h-[682px] bg-white flex flex-col gap-2 p-2 overflow-y-auto"
      >
       
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div onDragOver={(e)=>e.preventDefault()} onDrop={handleDropForm} className="flex flex-col gap-2">
            {forms.map((Form, index) => (
                  <Form
                    handleDragEnter={() => handleDragEnter(index)}
                    handleDragStart={(e:React.DragEvent<HTMLDivElement>)=>handleDragStart(e,index)}
                    key={index}
                    handleDelete={handleDelete}
                    control={control}
                    setValue={setValue}
                    register={register}
                    id={index.toString()}
                    endIndex={endDragIndex}
                  />
                ))}
          </div>
          {forms.length > 0 && (
            <ButtonBordered className="mt-10 w-fit ml-auto">Save</ButtonBordered>
          )}
        </form>
      </div>
    </main>
  );
}

export default SurveyForm;
