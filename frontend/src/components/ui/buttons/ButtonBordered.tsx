import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
    className? : string;
    onClick?:()=>void
}

function ButtonBordered({children, className,onClick } : LayoutProps) {
  return (
    <button onClick={onClick} className={`border border-primary-300 px-4 py-2 rounded-md text-primary-300 ${className}`}>
        {children}
    </button>
  )
}

export default ButtonBordered