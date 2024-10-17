import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className? : string;
}

function ButtonFilled({children, className,onClick,...props} : LayoutProps) {
  return (
    <button {...props} onClick={onClick} className={twMerge('border text-white bg-primary-300 px-4 py-2 rounded-md',className)}>
        {children}
    </button>
  )
}

export default ButtonFilled