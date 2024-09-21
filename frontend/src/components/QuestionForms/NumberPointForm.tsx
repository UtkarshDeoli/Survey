"use client";

import FormHeader from "./FormHeader";
import { FormProps } from "@/types/forms_interfaces";

function NumberPointForm({
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
      {
        !hide && (
          <div className="bg-blue-100 p-5 w-full">
            <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Display title
                </label>
                <input
                  {...register(`questions.${index}.parameters.display_title`)}
                  type="text"
                  className="border border-secondary-200 rounded-md p-2 col-span-8"
                  placeholder="Display title"
                />
              </div>

              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Variable name
                </label>
                <input
                  {...register(`questions.${index}.parameters.variable_name`)}
                  type="text"
                  className="border border-secondary-200 rounded-md p-2 col-span-8"
                  placeholder="Define Variable Name"
                />
              </div>

              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Question Media Type
                </label>
                <select
                  className="border border-secondary-200 rounded-md p-2 col-span-8"
                  id="mediaType"
                  {...register(`questions.${index}.parameters.mediaType`, {})}
                >
                  <option value="">Include Media Type</option>
                  <option value="image">Image</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Limit Value Between
                </label>
                <span className="col-span-8">
                  <input
                    {...register(
                      `questions.${index}.parameters.limit_value_between_start`,
                    )}
                    type="number"
                    className="[appearance:textfield] border border-secondary-200 rounded-md p-2 mr-5 w-1/3"
                  />
                  <span>-</span>
                  <input
                    {...register(
                      `questions.${index}.parameters.limit_value_between_end`,
                    )}
                    type="number"
                    className="[appearance:textfield] border border-secondary-200 rounded-md p-2 ml-5 w-1/3"
                  />
                </span>
              </div>

              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Start Value Label
                </label>
                <input
                  {...register(`questions.${index}.parameters.start_value_label`)}
                  type="text"
                  className="border border-secondary-200 rounded-md p-2 col-span-8"
                />
              </div>

              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Mid Value Label
                </label>
                <input
                  {...register(`questions.${index}.parameters.mid_value_label`)}
                  type="text"
                  className="border border-secondary-200 rounded-md p-2 col-span-8"
                />
              </div>

              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  End Value Label
                </label>
                <input
                  {...register(`questions.${index}.parameters.end_value_label`)}
                  type="text"
                  className="border border-secondary-200 rounded-md p-2 col-span-8"
                />
              </div>
              <div className="grid grid-cols-12 w-3/4">
                <label className="col-span-4 text-secondary-300">
                  Is Question Required?
                </label>
                <input
                  {...register(`questions.${index}.parameters.is_question_required`)}
                  type="Checkbox"
                  className="border border-secondary-200 rounded-md p-2"
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default NumberPointForm;
