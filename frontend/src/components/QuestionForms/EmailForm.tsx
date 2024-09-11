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

function EmailForm({ id, register, setValue }: Props) {
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
            {...register(`questions.${id}.parameters.question`, { required: true })}
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
              {...register(`questions.${id}.parameters.description`)}
              type="email"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Type help information for question here..."
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Display title</label>
            <input
              {...register(`questions.${id}.parameters.display_title`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Display title"
            />
          </div>
          <div className="grid grid-cols-12 w-3/4">
            <label className="col-span-4 text-secondary-300">Variable name</label>
            <input
              {...register(`questions.${id}.parameters.variable_name`)}
              type="text"
              className="border border-secondary-200 rounded-md p-2 col-span-8"
              placeholder="Display title"
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default EmailForm;
