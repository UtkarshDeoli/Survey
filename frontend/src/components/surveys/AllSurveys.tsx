"use client"

import { BsThreeDotsVertical } from "react-icons/bs"

function AllSurveys() {
  return (
    <div className="w-full px-8 py-3" >
    {/* surveys */}
     <div className="grid grid-cols-12 text-secondary-300 font-semibold bg-secondary-100 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200">
        <p className="col-span-4">All surveys</p>
        <p className="col-span-2">Total responses</p>
        <p className="col-span-2">Date created</p>
        <p className="col-span-2">Web url</p>
        <p className="col-span-2">Status</p>
     </div>
     
     {
        [1,2,3,4,5,6,7,8,9].map((el)=>(
            <div className="grid grid-cols-12 px-8 py-[16px] border border-secondary-200 w-full">
                <p className="col-span-4">All surveys</p>
                <p className="col-span-2">Total responses</p>
                <p className="col-span-2">Date created</p>
                <p className="col-span-2 text-primary-300 underline cursor-pointer">Visit survey</p>
                <div className="flex items-center justify-between w-full">
                    <button className="border-custom-green-300 border rounded-md px-2 py-1 text-custom-green-300 text-[14px] font-medium">Published</button>
                    <BsThreeDotsVertical />
                </div>
            </div>

        ))
     }

    </div>
  )
}

export default AllSurveys