import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className? : string;
    onClick?:()=>void
}

function FilledGreyButton({children, className,onClick,...props} : LayoutProps) {
  return (
    <button {...props} onClick={onClick} className={className}>
        {children}
    </button>
  )
}

export default FilledGreyButton;
