"use client"
import ButtonBordered from "./buttons/ButtonBordered"

function Navbar() {
  return (
    <nav className="z-50 relative flex justify-between px-8 py-[18px] shadow-md">
        <h1 onClick={()=>window.open("/","_self")} className="font-bold text-primary-300 text-2xl cursor-pointer">SURVEY LOGO</h1>
        <div className="flex gap-9 justify-center items-center">
            <ButtonBordered className="text-[14px] font-semibold">Notifications</ButtonBordered>
            <h3 className="text-primary-300 text-[12px]">Welcome <span className="font-semibold text-[16px]">user!</span></h3>
        </div>
    </nav>
  )
}

export default Navbar