import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className? : string;
    onClick?:()=>void
}

function FilledGreyButton({children, className,onClick,...props} : LayoutProps) {
  return (
    <button {...props} onClick={onClick} className={twMerge('border text-black bg-[#E0DCDC] rounded-lg px-4 py-2',className)}>
        {children}
    </button>
  )
}

export default FilledGreyButton;
