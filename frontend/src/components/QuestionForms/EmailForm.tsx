"use client"

import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import FormHeader from "./FormHeader";
import { FaRegFolderOpen } from "react-icons/fa";

interface Props {
    id: string;
    register: ReturnType<typeof useForm>["register"];
    setValue: ReturnType<typeof useForm>["setValue"];
    control: ReturnType<typeof useForm>["control"];
    handleDelete:(id:string)=>void
  }
  
  function EmailForm({ id, register, setValue, control ,handleDelete}: Props) {

    useEffect(()=>{
      setValue(`questions.${id}.type`,"email");
      setValue(`questions.${id}.question_id`,id);
    },[])

    const media = useWatch({
      control,
      name: `questions.${id}.parameters.question_media_type`,
      defaultValue: "",
    })
    console.log(media)
    return (
      <div className="flex justify-center items-center flex-col gap-2 border border-secondary-200 rounded-md overflow-hidden">
        <FormHeader handleDelete={handleDelete} register={register} id={id} input={true}/>
        <div className="bg-blue-100 p-5 w-full">
          <div className="flex flex-col justify-center items-center p-5 gap-3 bg-white w-full">
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">Description</label>
              <input
                {...register(`questions.${id}.parameters.description`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8 focus:outline-none"
                placeholder="Type help information for question here..."
              />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">Display title</label>
              <input
                {...register(`questions.${id}.parameters.display_title`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8 focus:outline-none"
                placeholder="Display title"
            />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">Variable name</label>
              <input
                {...register(`questions.${id}.parameters.variable_name`)}
                type="text"
                className="border border-secondary-200 rounded-md p-2 col-span-8 focus:outline-none"
                placeholder="Variable name"
            />
            </div>
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">Question media type</label>
              <select
                {...register(`questions.${id}.parameters.question_media_type`)}
                className="border border-secondary-200 rounded-md p-2 col-span-8 focus:outline-none"
             >
                <option value="">-- Select Media Type --</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
                <option value="document">Document</option>
              </select>
            </div>
            {
              media  && (
                <div className="grid grid-cols-12 w-3/4">
                  <p className="col-span-4 text-secondary-300">Question {media}</p>
                  <label className="flex items-center justify-center col-span-8 rounded-md cursor-pointer hover:bg-secondary-50">
                      <div className="flex gap-2 bg-white h-full w-full">
                        <div className="h-full w-full bg-secondary-200 rounded-md p-5"></div>
                        <p className="border border-secondary-200 text-secondary-300 h-full w-[35%] rounded-md flex items-center justify-center text-[14px] gap-2">
                        <FaRegFolderOpen /> Choose file
                        </p>
                      </div>
                      <input
                        {...register(`questions.${id}.parameters.question_media_type`)}
                        type="file"
                        className="hidden"
                        accept={
                          media === "image"
                            ? "image/*"
                            : media === "video"
                            ? "video/*"
                            : media === "audio"
                            ? "audio/*"
                            : media === "document"
                            ? ".pdf,.doc,.docx"
                            : ""
                        }
                      />
                  </label>
                </div>
              )
            }
            <div className="grid grid-cols-12 w-3/4">
              <label className="col-span-4 text-secondary-300">Is question required</label>
              <input
                {...register(`questions.${id}.parameters.question_required`)}
                type="checkbox"
                className="border border-secondary-200 rounded-md p-2 col-span-1 focus:outline-none"
            />
            </div>
          </div>

        </div>
        
      </div>
    );
  }
  
  export default EmailForm;
  
