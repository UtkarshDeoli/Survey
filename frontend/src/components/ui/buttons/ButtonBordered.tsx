import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
    className? : string;
}

function ButtonBordered({children, className} : LayoutProps) {
  return (
    <button className={`border border-primary-300 px-4 py-2 rounded-md text-primary-300 ${className}`}>
        {children}
    </button>
  )
}

export default ButtonBordered