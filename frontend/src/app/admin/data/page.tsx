import ButtonBordered from '@/components/ui/buttons/ButtonBordered';
import ButtonFilled from '@/components/ui/buttons/ButtonFilled';
import React from 'react'
import analytics from '../../../../public/icons/survey_data/analytics.png';
import daily_report from '../../../../public/icons/survey_data/daily_report.png';
import Image from 'next/image';
import summary_report from '../../../../public/icons/survey_data/summary_report.png';
import scoring_report from '../../../../public/icons/survey_data/scoring_report.png';
import spatial_report from '../../../../public/icons/survey_data/spatial_report.png';

function page() {
  const data = [
    {
      date: "10-Sept-2024",
      name: "Kalpana",
      responses: "45",
      Analytics: "Completed",
      DailyReport: "Reviewed",
      SummaryReport: "Pending",
      SpatialReport: "Not Started",
      ScoringReport: "In Progress"
    },
    {
      date: "02-Jun-2024",
      name: "Vikram",
      responses: "7",
      Analytics: "In Progress",
      DailyReport: "Pending",
      SummaryReport: "Reviewed",
      SpatialReport: "Completed",
      ScoringReport: "Completed"
    }
  ];
  
  return (
    <div className="w-full bg-my-gray-100 font-medium ">

      <nav className="h-16 bg-my-gray-105 w-full py-3 px-8 flex justify-between shadow-md ">
        <div className="text-my-gray-200">
          <h1 className="text-2xl">Surveys Data</h1>
        </div>
        <ButtonBordered>Uploaded Summary</ButtonBordered>
      </nav>

      <div className="p-5 text-sm text-my-gray-200">
        <div className="flex justify-between bg-gray-100">
          <div className="h-10 w-96">
            <input
              type="text"
              placeholder="Search Surveys here"
              className="border border-gray-300 rounded-md p-2 placeholder:text-my-gray-200 w-full"
            />
          </div>
          <div className="space-x-3 ">
            <ButtonBordered className="bg-my-blue-300 border-0 text-white px-8">Search</ButtonBordered>
            <ButtonBordered className="bg-white text-my-blue-3 px-8">Reset</ButtonBordered>
          </div>
          <div className="flex h-10 items-center space-x-10 ">
            <p className=''>Sort By:</p>
            <div className="rounded-md py-2 px-3 justify-between border-2 border-[#DDDDDD]">
              <select name="sortby" className='w-40 bg-my-gray-100' id="sortby">
                <option value="dateDesc">Date DESC</option>
                <option value="dateAsc">Date ASC</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full mt-3 text-center text-sm">
        <table className="w-full rounded-t-2xl overflow-hidden">
          <thead className="bg-my-gray-105">
            <tr className="w-full border-2 text-my-gray-200">
              <td className="rounded-tl-2xl px-8 text-left py-2 w-1/6">Names</td>
              <td className="px-4 py-2">Responses</td>
              <td className="px-4 py-2">Analytics</td>
              <td className="px-4 py-2">Daily Report</td>
              <td className="px-4 py-2">Summary Report</td>
              <td className="px-4 py-2">Spatial Report</td>
              <td className="px-4 py-2 rounded-tr-2xl">Scoring Report</td>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='bg-[#FFFFFF] border h-20'>
                <td className="px-8 py-2">
                  <div className="text-black space-y-1">
                    <p className='text-base text-left'>{row.name}</p>
                    <p className='text-xs text-left'>{row.date}</p>
                  </div>
                </td>
                <td className="px-4 py-2">{row.responses}</td>
                <td className="px-4 py-2"><Image className='mx-auto' src={analytics.src} alt="filter icon" height={24} width={24}/></td>
                <td className="px-4 py-2"><Image className='mx-auto' src={daily_report.src} alt="filter icon" height={24} width={24}/></td>
                <td className="px-4 py-2"><Image className='mx-auto' src={summary_report.src} alt="filter icon" height={24} width={24}/></td>
                <td className="px-4 py-2"><Image className='mx-auto' src={spatial_report.src} alt="filter icon" height={24} width={24}/></td>
                <td className="px-4 py-2"><Image className='mx-auto' src={scoring_report.src} alt="filter icon" height={24} width={24}/></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

    </div>
  )
}

export default page;
