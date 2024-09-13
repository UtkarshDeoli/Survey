"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";

interface Props {
  id: string;
  register: ReturnType<typeof useForm>["register"];
  setValue: ReturnType<typeof useForm>["setValue"];
  handleDelete: (id: string) => void;
}

function CheckBoxGridForm({ id, register, setValue, handleDelete }: Props) {
  useEffect(() => {
    setValue(`questions.${id}.type`, "checkbox_grid");
    setValue(`questions.${id}.question_id`, id);
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-2 border border-secondary-200 rounded-md">
      <FormHeader
        id={id}
        register={register}
        input={true}
        handleDelete={handleDelete}
      />
      <div className="bg-blue-100 p-5 w-full">
        <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">Row Options</label>
            <div className="col-span-7">
              <textarea
                className="border border-secondary-200 rounded-md p-2 w-full"
                id="rowOptions"
                {...register(`questions.${id}.parameters.row_options`)}
                placeholder=""
              />
              <p className="text-secondary-300">
                One question per line. Maximum 100 character length.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Column Options
            </label>
            <div className="col-span-7">
              <textarea
                className="border border-secondary-200 rounded-md p-2 w-full"
                id="columnOptions"
                {...register(`questions.${id}.parameters.column_options`)}
                placeholder=""
              />
              <p className="text-secondary-300">One option per line.</p>
            </div>
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
              Hidden Column Options
            </label>
            <div className="col-span-7">
              <textarea
                className="border border-secondary-200 rounded-md p-2 w-full"
                id="hiddenColumOptions"
                {...register(
                  `questions.${id}.parameters.hidden_column_options`,
                )}
                placeholder=""
              />
              <p className="text-secondary-300">One option per line.</p>
            </div>
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
            <label className="col-span-5 text-secondary-300">
              Are All Questions Required?
            </label>
            <input
              {...register(
                `questions.${id}.parameters.are_all_questions_required`,
              )}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Minimum Questions Required
            </label>
            <div className="flex flex-col col-span-7">
              <input
                {...register(`questions.${id}.parameters.minimum_questions`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-7"
              />
              <div className="w-[85%] text-red-500 text-sm">
                If "Minimum Questions Required" is specified, "Are All Questions
                Required" will be ignored.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Radomize Row Options
            </label>
            <input
              {...register(`questions.${id}.parameters.randomize_row_options`)}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Randomize Column Options
            </label>
            <input
              {...register(
                `questions.${id}.parameters.randomize_column_options`,
              )}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Forward Row Options From
            </label>
            <input
              {...register(
                `questions.${id}.parameters.forward_row_options_from`,
              )}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-7"
              placeholder="Variable Name"
            />
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Forward Row Options Type
            </label>
            <select
              className="border border-secondary-200 rounded-md p-2 col-span-5"
              id="mediaType"
              {...register(
                `questions.${id}.parameters.forward_row_options_type`,
              )}
            >
              <option value=""></option>
              <option value="selected">Selected</option>
              <option value="unselected">UnSelected</option>
            </select>
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Forward Column Options From
            </label>
            <input
              {...register(
                `questions.${id}.parameters.forward_column_options_from`,
              )}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-7"
              placeholder="Variable Name"
            />
          </div>
          <div className="grid grid-cols-12 w-[85%]">
            <label className="col-span-5 text-secondary-300">
              Forward Column Options Type
            </label>
            <select
              className="border border-secondary-200 rounded-md p-2 col-span-5"
              id="mediaType"
              {...register(
                `questions.${id}.parameters.forward_column_options_type`,
              )}
            >
              <option value=""></option>
              <option value="selected">Selected</option>
              <option value="unselected">UnSelected</option>
            </select>
          </div>

          <div className="w-[85%] text-red-500 text-sm">
            If number of rows or columns are more, it might not fit in single
            view of the mobile device. This depends on the screen size of the
            mobile device also. In this scenario, please scroll to right in
            columns area to view all columns and scroll to bottom to view all
            the rows.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBoxGridForm;
