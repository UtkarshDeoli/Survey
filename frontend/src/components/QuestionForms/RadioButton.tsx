"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import { FormProps } from "@/types/forms_interfaces";

function RadioButton({
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
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Description
              </label>
              <input
                {...register(`questions.${index}.parameters.description`)}
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
                {...register(`questions.${index}.parameters.display_title`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8"
                placeholder="Display title"
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
              <label className="col-span-4 text-secondary-300">Options</label>
              <div className="col-span-8">
                <textarea
                  className="border border-secondary-200 rounded-md p-2 w-full"
                  id="options"
                  {...register(`questions.${index}.parameters.options`)}
                  placeholder=""
                />
                <p className="text-secondary-300">One option per line</p>
              </div>
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Default Value
              </label>
              <input
                {...register(`questions.${index}.parameters.default_value`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8"
                placeholder="Set default value"
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Hidden Options
              </label>
              <div className="col-span-8">
                <textarea
                  className="border border-secondary-200 rounded-md p-2 w-full"
                  id="hiddenOptions"
                  {...register(`questions.${index}.parameters.hiddenOptions`)}
                  placeholder=""
                />
                <p className="text-secondary-300">One option per line</p>
              </div>
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Is Question Required?
              </label>
              <input
                {...register(
                  `questions.${index}.parameters.is_question_required`,
                )}
                type="Checkbox"
                className="border border-secondary-200 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Minimum Options Required
              </label>
              <input
                {...register(`questions.${index}.parameters.minimumOptionsReq`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8"
                placeholder="Set default value"
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Maximum Options Required
              </label>
              <input
                {...register(`questions.${index}.parameters.maximumOptionsReq`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8"
                placeholder="Set default value"
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Unique Options
              </label>
              <div className="col-span-8">
                <textarea
                  className="border border-secondary-200 rounded-md p-2 w-full"
                  id="uniqueOptions"
                  {...register(`questions.${index}.parameters.uniqueOptions`)}
                  placeholder=""
                />
                <p className="text-secondary-300">One option per line</p>
              </div>
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Check All Options
              </label>
              <input
                {...register(`questions.${index}.parameters.checkAllOptions`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8"
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Enable Text Search
              </label>
              <input
                {...register(
                  `questions.${index}.parameters.enable_text_search`,
                )}
                type="Checkbox"
                className="border border-secondary-200 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">
                Randomize Options
              </label>
              <input
                {...register(`questions.${index}.parameters.randomize_options`)}
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

export default RadioButton;
