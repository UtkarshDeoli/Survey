"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";

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

function CheckBoxWithTextForm({
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
  useEffect(() => {
    setValue(`questions.${id}.type`, "Checkbox With Text");
    setValue(`questions.${id}.question_id`, id);
  }, []);
  return (
    <div
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      draggable
      className={`flex justify-center items-center flex-col gap-2 border border-secondary-200 rounded-md overflow-hidden cursor-move ${endIndex?.toString() === id ? "border-2 border-blue-500" : ""}`}
    >
      <FormHeader
        id={id}
        register={register}
        input={true}
        handleDelete={handleDelete}
        hide={hide}
        setHide={() => setHide((prev: boolean) => !prev)}
        control={control}
      />
      {!hide && (
        <div className="bg-blue-100 p-5 w-full">
          <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Display title
              </label>
              <input
                {...register(`questions.${id}.parameters.display_title`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7 focus:outline-none"
                placeholder="Display title"
              />
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Variable name
              </label>
              <input
                {...register(`questions.${id}.parameters.variable_name`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7"
                placeholder="Define Variable Name"
              />
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">Options</label>
              <div className="col-span-7">
                <textarea
                  className="border border-secondary-200 rounded-md p-2 w-full"
                  {...register(`questions.${id}.parameters.options`)}
                  id="options"
                  placeholder=""
                />
                <p className="text-secondary-300">One option per line.</p>
              </div>
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Default Value
              </label>
              <input
                {...register(`questions.${id}.parameters.default_value`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7"
                placeholder="Set Default Value"
              />
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Hidden Options
              </label>
              <div className="col-span-7">
                <textarea
                  className="border border-secondary-200 rounded-md p-2 w-full"
                  id="hiddenOptions"
                  {...register(`questions.${id}.parameters.hidden_options`)}
                  placeholder=""
                />
                <p className="text-secondary-300">One option per line.</p>
              </div>
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Is Questions Required?
              </label>
              <input
                {...register(
                  `questions.${id}.parameters.is_questions_required`,
                )}
                type="Checkbox"
                className="border border-secondary-200 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Minimum Options Required
              </label>
              <input
                {...register(
                  `questions.${id}.parameters.minimum_options_required`,
                )}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7"
                placeholder="Variable Name"
              />
            </div>
            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Unique Options
              </label>
              <div className="col-span-7">
                <textarea
                  className="border border-secondary-200 rounded-md p-2 w-full"
                  id="uniqueOptions"
                  {...register(`questions.${id}.parameters.unique_options`)}
                  placeholder=""
                />
                <p className="text-secondary-300">One option per line.</p>
              </div>
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Maximum Options Selectable
              </label>
              <input
                {...register(
                  `questions.${id}.parameters.maximum_options_selectable`,
                )}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7"
                placeholder="Variable Name"
              />
            </div>

            <div className="grid grid-cols-12 w-[85%]">
              <label className="col-span-5 text-secondary-300">
                Randomize Options
              </label>
              <input
                {...register(`questions.${id}.parameters.randomize_options`)}
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

export default CheckBoxWithTextForm;
