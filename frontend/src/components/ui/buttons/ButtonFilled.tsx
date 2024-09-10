import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
    className? : string;
    onClick?:()=>void
}

function ButtonFilled({children, className,onClick} : LayoutProps) {
  return (
    <button onClick={onClick} className={`border text-white bg-primary-300 px-4 py-2 rounded-md ${className}`}>
        {children}
    </button>
  )
}

export default ButtonFilled