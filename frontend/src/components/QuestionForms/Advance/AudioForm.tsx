"use client";
import { FormProps } from "@/types/forms_interfaces";
import FormHeader from "../FormHeader";


function AudioForm({
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
        <div className="bg-primary-50 p-5 w-full">
          <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Max Length
              </label>
              <input
                {...register(`questions.${index}.parameters.max_length`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7 focus:outline-none"
                placeholder="Max length required"
              />
            </div>
            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Is Questions Required?
              </label>
              <input
                {...register(
                  `questions.${index}.parameters.is_questions_required`,
                )}
                type="Checkbox"
                className="border border-secondary-200 rounded-md p-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AudioForm;
