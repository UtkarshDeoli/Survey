import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className? : string;
    onClick?:()=>void
}

function FilledGreyButton({children, className,onClick,...props} : LayoutProps) {
  return (
    <button {...props} onClick={onClick} className={twMerge('border text-black bg-[#E0DCDC] rounded-[20px] h-[50px]  px-10 py-3',className)}>
        {children}
    </button>
  )
}

export default FilledGreyButton;
