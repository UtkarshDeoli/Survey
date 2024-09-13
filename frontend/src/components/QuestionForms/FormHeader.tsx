"use client";
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoDuplicateOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";

interface Props {
  id: string;
  register: ReturnType<typeof useForm>["register"];
  input: boolean;
  handleDelete: (id: string) => void;
  setHide:()=>void;
  hide:boolean;
  control: ReturnType<typeof useForm>["control"];
  defaultQuestionTitle?: string;
}
function FormHeader({
  id,
  input,
  register,
  handleDelete,
  defaultQuestionTitle,
  hide,
  control,
  setHide
}: Props) {

  const media = useWatch({
    control,
    name: `questions.${id}.parameters.question`,
    defaultValue: "",
  });
  
  return (
    <div className="flex gap-3 items-center w-full bg-white p-2">
      <p>
        <VscThreeBars />
      </p>
      <div className="flex items-center gap-2 w-full">
        <CiMail />
        {input && hide ?(
          <p>{media}</p>
        ): (
          <input
            defaultValue={defaultQuestionTitle}
            placeholder="Type your question here..."
            {...register(`questions.${id}.parameters.question`, {
              required: true,
            })}
            className="py-2 px-4 text-secondary-300 flex-grow focus:outline-none"
          />
        )}
      </div>
      <button onClick={setHide} type="button">
        {hide ? <IoIosArrowDown /> : <IoIosArrowUp/>}
      </button>
      <button type="button">
        <VscThreeBars />
      </button>
      <button type="button">
        <FaEye />
      </button>
      <button type="button">
        <IoDuplicateOutline />
      </button>
      <button
        type="button"
        className="hover:text-red-500"
        onClick={() => handleDelete(id)}
      >
        <MdOutlineDelete />
      </button>
    </div>
  );
}

export default FormHeader;
