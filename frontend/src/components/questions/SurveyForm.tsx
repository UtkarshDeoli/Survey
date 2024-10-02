"use client";

import React, { useEffect, useState } from "react";
import FormMappings from "@/utils/FormMappings";
import { useFieldArray, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { getSurvey, updateSurvey } from "@/networks/survey_networks";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";

function SurveyForm() {
  // search params
  const searchParams = useSearchParams();
  const _id = searchParams.get("id");
  const created_by = searchParams.get("created_by");

  // states
  const [forms, setForms] = useState<{ component: React.ComponentType<any>; hide: boolean }[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [endDragIndex, setEndDragIndex] = useState<number | null>(null);
  const [questId, setQuestId] = useState<number>(10);
  const [loading, setLoading] = useState(false);

  // React hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { isSubmitting },
  } = useForm();
  const { fields, append, move, remove } = useFieldArray({
    control,
    name: "questions",
  });
  // Effects
  useEffect(() => {
    if (_id) {
      handlegetSurveyData();
    }
  }, [_id]);

  // handle get survey
  async function handlegetSurveyData() {
    const params = { _id };
    setLoading(true);
    const response = await getSurvey(params);
    setLoading(false);
    if (response.success) {
      const formMappings = FormMappings();
      const receivedForms = response.data.questions?.map(
        (question: any) => ({component:formMappings[question.type],hide:false})
      );
      if (receivedForms) setForms(receivedForms);
      remove()
      let max = 10
      response.data.questions?.forEach((question: any, index: number) => {
        max = question.question_id > max ? question.question_id : max
        append({
          question_id: question.question_id,
          type: question.type,
          parameters: question.parameters,
          children:question.children,
          dependency:question.dependency,
          randomize:question.randomize,
        });
        Object.keys(question.parameters).forEach((parameter: string) =>
          setValue(
            `questions.${index}.parameters[${parameter}]`,
            question.parameters[parameter]
          )
        );
      });
      if(max !== 10) setQuestId(max+1);
    } else {
      toast.error("Something went wrong");
    }
  }

  // Handle form submission
  async function handleSubmitForm(data: any) {
    console.log(data);
    const questions = data.questions || [];
    const formData = { created_by, questions };
    const params = { _id, created_by, formData };
    const response = await updateSurvey(params);
    if (response.success) {
      toast.success("Questions updated in survey!");
    } else {
      toast.error("Something went wrong");
    }
  }

  function handleDelete(ind: number) {
    const deletedQuestionId = getValues(`questions.${ind}.question_id`);
    fields.forEach((_, index) => {
      if (index !== ind) {
        const dependencies = getValues(`questions.${index}.dependency`) || [];
        const updatedDependencies = dependencies.filter(
          (dep: any) => dep.question !== deletedQuestionId.toString()
        );
        setValue(`questions.${index}.dependency`, updatedDependencies);
        const children = getValues(`questions.${index}.children`) || [];
        const updatedChildren = children.filter(
          (childId: number) => childId !== deletedQuestionId
        );
        setValue(`questions.${index}.children`, updatedChildren);
      }
    });
    setForms(forms.filter((_, index) => index !== ind));
    remove(ind);
  }
  

  // Handle start of drag
  function handleDragStart(e: React.DragEvent<HTMLDivElement>, index: number) {
    e.stopPropagation();
    e.dataTransfer.setData("text/plain", "form_reorder");
    setDraggedIndex(index);
  }

  // Handle form drop event
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const formMapping = FormMappings();
    const data = e.dataTransfer.getData(
      "text/plain"
    ) as keyof typeof formMapping;
    if (data !== "form_reorder") {
      const newForm = {component:formMapping[data],hide:false}
      setForms([...forms, newForm]);
      append({ question_id: questId, type: data , randomize:true, children:[], dependency:[]});
      setQuestId((prev) => prev + 1);
    }
  }

  // Handle drop event (rearrange forms based on the dragged and dropped indices)
  function handleDropForm(e: React.DragEvent<HTMLDivElement>) {
    if (draggedIndex === null) return;
    move(draggedIndex, endDragIndex || 0);
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

  function handleHide(index: number) {
    setForms((prevForms) =>
      prevForms.map((form, i) =>
        i === index ? { ...form, hide: !form.hide } : form
      )
    );
  }

  function handleDuplicate(index:number){
      const data = getValues()
      const type = data?.questions?.[index]?.type;
      const newForm = {component: forms[index].component,hide:false}
      setForms([...forms, newForm]);
      append({ question_id: questId , type, randomize:true, children:[], dependency:[]});
      setQuestId((prev) => prev + 1);
  }

  return (
    <main className="flex flex-col h-screen w-full p-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative flex-1 bg-white flex flex-col gap-2 p-2 overflow-y-auto"
      >
        <form className="flex flex-col flex-1 pb-20">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropForm}
            className="flex flex-col gap-2 flex-1"
          >
            {(loading || isSubmitting) && (
              <Loader className="w-full h-[50vh] flex justify-center items-center" />
            )}
            {!loading && !isSubmitting && forms.length > 0
              ? fields.map((field, index) => {
                  const Form = forms[index].component;
                  return (
                    <Form
                      handleDragEnter={() => handleDragEnter(index)}
                      handleDragStart={(e: React.DragEvent<HTMLDivElement>) =>handleDragStart(e, index)}
                      endIndex={endDragIndex}
                      key={field.id}
                      id={questId}
                      index={index}
                      handleHide={handleHide}
                      handleDuplicate={handleDuplicate}
                      hide={forms[index].hide}
                      control={control}
                      handleDelete={handleDelete}
                      register={register}
                    />
                  );
                })
              : !loading &&
                !isSubmitting && (
                  <p className="w-full h-[20vh] flex justify-center items-center text-secondary-300">
                    Drag and drop the questions from left to add question to
                    survey
                  </p>
                )}
          </div>
        </form>
      </div>
      <div className="sticky bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 px-4 flex justify-end z-10">
        <button
          onClick={handleSubmit(handleSubmitForm)} // Trigger form submission
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </main>
  );
}

export default SurveyForm;
