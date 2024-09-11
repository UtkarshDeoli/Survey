"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoDuplicateOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";

interface Props {
  id: string;
  register: ReturnType<typeof useForm>["register"];
  setValue: ReturnType<typeof useForm>["setValue"];
}

function RadioButton({ id, register, setValue }: Props) {
  useEffect(() => {
    setValue("questions.0.type", "email");
    setValue("questions.0.question_id", id);
  }, [])
  return (
    <div className="flex justify-center items-center flex-col gap-2 border border-secondary-200 rounded-md">

      <div className="flex gap-3 items-center w-full bg-white p-2">
        <p><VscThreeBars /></p>
        <div className="flex items-center gap-2 w-full">
          <CiMail />
          <input
            placeholder="Type your question here..."
            {...register('questions.0.parameters.question', { })}
            className="py-2 px-4 text-secondary-300 flex-grow focus:outline-none"
          />
        </div>
        <button><IoIosArrowUp /></button>
        <button><VscThreeBars /></button>
        <button><FaEye /></button>
        <button><IoDuplicateOutline /></button>
        <button><MdOutlineDelete /></button>
      </div>

      <div className="bg-blue-100 p-5 w-full">
        <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Description</label>
            <input
              {...register(`question.${id}.parameters.description`)}
              type="email"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Type help information for question here..."
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Display title</label>
            <input
              {...register(`question.${id}.parameters.display_title`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Display title"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Question Media Type</label>
            <select className="border border-secondary-200 rounded-md p-2 col-span-8" id="mediaType" {...register(`question.${id}.parameters.mediaType`, { })}>
              <option value="">Include Media Type</option>
              <option value="image">Image</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Options</label>
            <div className="col-span-8">
              <textarea className="border border-secondary-200 rounded-md p-2 w-full"
                id="options"
                {...register(`question.${id}.parameters.options`, )}
                placeholder=""
              />
              <p className="text-secondary-300">One option per line</p>
            </div>
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Default Value</label>
            <input
              {...register(`question.${id}.parameters.default_value`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Set default value"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Hidden Options</label>
            <div className="col-span-8">
              <textarea className="border border-secondary-200 rounded-md p-2 w-full"
                id="hiddenOptions"
                {...register(`question.${id}.parameters.hiddenOptions`)}
                placeholder=""
              />
              <p className="text-secondary-300">One option per line</p>
            </div>
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Is Question Required?</label>
            <input
              {...register(`question.${id}.parameters.is_question_required`)}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Minimum Options Required</label>
            <input
              {...register(`question.${id}.parameters.minimumOptionsReq`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Set default value"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Maximum Options Required</label>
            <input
              {...register(`question.${id}.parameters.maximumOptionsReq`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Set default value"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Unique Options</label>
            <div className="col-span-8">
              <textarea className="border border-secondary-200 rounded-md p-2 w-full"
                id="uniqueOptions"
                {...register(`question.${id}.parameters.uniqueOptions`)}
                placeholder=""
              />
              <p className="text-secondary-300">One option per line</p>
            </div>
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Check All Options</label>
            <input
              {...register(`question.${id}.parameters.checkAllOptions`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder=""
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Enable Text Search</label>
            <input
              {...register(`question.${id}.parameters.enable_text_search`)}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Randomize Options</label>
            <input
              {...register(`question.${id}.parameters.randomize_options`)}
              type="Checkbox"
              className="border border-secondary-200 rounded-md p-2"
            />
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default RadioButton;
