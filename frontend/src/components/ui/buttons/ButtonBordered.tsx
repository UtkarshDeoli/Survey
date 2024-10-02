import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className? : string;
}

function ButtonBordered({children, className,...props} : LayoutProps) {
  return (
    <button {...props} className={twMerge('border border-primary-300 px-4 py-2 rounded-md text-primary-300 hover:text-white hover:bg-primary-300',className)}>
        {children}
    </button>
  )
}

export default ButtonBordered;
