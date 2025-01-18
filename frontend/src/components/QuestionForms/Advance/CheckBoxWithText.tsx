"use client";
import { FormProps } from "@/types/forms_interfaces";
import FormHeader from "../FormHeader";


function CheckBoxWithTextForm({
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
                Display title
              </label>
              <input
                {...register(`questions.${index}.parameters.display_title`)}
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
                {...register(`questions.${index}.parameters.variable_name`)}
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
                  {...register(`questions.${index}.parameters.options`)}
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
                {...register(`questions.${index}.parameters.default_value`)}
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
                  {...register(`questions.${index}.parameters.hidden_options`)}
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
                  `questions.${index}.parameters.is_questions_required`,
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
                  `questions.${index}.parameters.minimum_options_required`,
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
                  {...register(`questions.${index}.parameters.unique_options`)}
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
                  `questions.${index}.parameters.maximum_options_selectable`,
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

export default CheckBoxWithTextForm;
