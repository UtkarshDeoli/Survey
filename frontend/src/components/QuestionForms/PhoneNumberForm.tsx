"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";

interface Props {
  id: string;
  register: ReturnType<typeof useForm>["register"];
  setValue: ReturnType<typeof useForm>["setValue"];
  handleDelete: (id: string) => void;
  defaultQuestionTitle?: string;
}

function PhoneNumberForm({
  id,
  register,
  setValue,
  handleDelete,
  defaultQuestionTitle,
}: Props) {
  useEffect(() => {
    setValue(`questions.${id}.type`, "Phone Number");
    setValue(`questions.${id}.question_id`, id);
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-2 border border-secondary-200 rounded-md">
      <FormHeader
        id={id}
        defaultQuestionTitle={defaultQuestionTitle}
        register={register}
        input={true}
        handleDelete={handleDelete}
      />
      <div className="bg-blue-100 p-5 w-full">
        <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Description</label>
            <input
              {...register(`questions.${id}.parameters.description`)}
              type="email"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Type help information for question here..."
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">
              Display title
            </label>
            <input
              {...register(`questions.${id}.parameters.display_title`)}
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
              {...register(`questions.${id}.parameters.variable_name`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Define Variable Name"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">
              Limit Value Between
            </label>
            <span className="col-span-8">
              <input
                {...register(
                  `questions.${id}.parameters.limit_value_between_start`,
                )}
                type="number"
                className="[appearance:textfield] border border-secondary-200 rounded-md p-2 mr-5 w-1/3"
              />
              <span>-</span>
              <input
                {...register(
                  `questions.${id}.parameters.limit_value_between_end`,
                )}
                type="number"
                className="[appearance:textfield] border border-secondary-200 rounded-md p-2 ml-5 w-1/3"
              />
            </span>
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">
              Question Media Type
            </label>
            <select
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              id="mediaType"
              {...register(`questions.${id}.parameters.mediaType`, {})}
            >
              <option value="">Include Media Type</option>
              <option value="image">Image</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">
              Is Question Required?
            </label>
            <input
              {...register(`questions.${id}.parameters.is_question_required`)}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberForm;
