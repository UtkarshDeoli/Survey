import React from 'react'
import { PropagateLoader,PuffLoader } from 'react-spinners';
import { twMerge } from 'tailwind-merge'


interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className? : string;
  loading? : boolean;
}

function ButtonFilled({children, className,onClick,loading,...props} : LayoutProps) {
  return (
    <button {...props} onClick={onClick} className={twMerge('flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]',className)}>
      {loading ? <PuffLoader speedMultiplier={1.25} color="#FFFFFF" size={26}/> : children}
    </button>
  )
}

export default ButtonFilled