import {useForm} from "react-hook-form";

export interface FormProps {
    id: string;
    index: number;
    endIndex: number;
    hide:boolean;
    handleHide:(index:number)=>void;
    handleDuplicate:(index:number)=>void;
    register: ReturnType<typeof useForm>["register"];
    setValue: ReturnType<typeof useForm>["setValue"];
    control: ReturnType<typeof useForm>["control"];
    handleDelete: (ind: number) => void;
    handleDragEnter: () => void;
    handleDragStart: () => void;
    defaultQuestionTitle?: string;
  }