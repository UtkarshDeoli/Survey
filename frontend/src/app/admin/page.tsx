'use client';

import React, { useEffect, useState } from 'react';
import IndiaMap from '@/components/ui/IndianMap';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Survey',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: ['green','red','blue','yellow','orange','gray','indigo'],
      borderColor: '',
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `Sales: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: '#e5e5e5',
      },
      ticks: {
        color: '#333',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: '#e5e5e5',
      },
      ticks: {
        color: '#333',
      },
    },
  },
};

function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent SSR issues
  }

  return (
    <div>
      <div className='p-5 font-semibold'>Admin dashboard</div>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-5 justify-center'>
          <div className='flex flex-col bg-gradient-to-r from-[#0086FF] via-[#62B4FE] to-[#a8d5ff] text-white w-[300px] h-[150px] rounded-lg p-3'>
            <p className='text-lg font-semibold'>Total Survey</p>
            <p className='text-2xl font-semibold mt-10'>5,753</p>
            <p>last week survey</p>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-[#e9e961] via-[#e2e24c] to-[#f5f5bd] text-white w-[300px] h-[150px] rounded-lg p-3'>
            <p className='text-lg font-semibold'>Pending Survey</p>
            <p className='text-2xl font-semibold mt-10'>2,563</p>
            <p>last week survey</p>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-[#396f33] via-[#38982d] to-[#8dc086] text-white w-[300px] h-[150px] rounded-lg p-3'>
            <p className='text-lg font-semibold'>Approved Survey</p>
            <p className='text-2xl font-semibold mt-10'>1,433</p>
            <p>last week survey</p>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-[#d45050] via-[#f35f5f] to-[#ffb3b3] text-white w-[300px] h-[150px] rounded-lg p-3'>
            <p className='text-lg font-semibold'>Rejected Survey</p>
            <p className='text-2xl font-semibold mt-10'>3,563</p>
            <p>last week survey</p>
          </div>
        </div>
        <div className='grid grid-cols-10 justify-center items-center'>
          <div className='col-span-6 px-10'>
            <div>
              <Bar data={data} options={options}/>
            </div>
          </div>
          <div className='col-span-4'>
            <IndiaMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
