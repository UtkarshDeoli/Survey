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
      backgroundColor: ['#EF9595','#EFB495','#EFD595','#EBEF95','#A5DD9B','#BB9AB1','#EECEB9'],
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
    <div className='bg-[#ECF0FA]'>
      <div className='p-5 font-medium'>Admin dashboard</div>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-5 justify-between bg-white mx-6 p-4 rounded-2xl'>
          <div className='flex flex-col bg-gradient-to-r from-[#0086FF] via-[#62B4FE] to-[#a8d5ff] text-white w-full h-[150px] rounded-lg p-3'>
            <p className='text-lg font-medium'>Total Survey</p>
            <p className='text-2xl font-medium mt-10'>5,753</p>
            <p>last week survey</p>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-[#ffa959] via-[#e2ab4c] to-[#ffda7b] text-white w-full h-[150px] rounded-lg p-3'>
            <p className='text-lg font-medium'>Pending Survey</p>
            <p className='text-2xl font-medium mt-10'>2,563</p>
            <p>last week survey</p>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-[#396f33] via-[#38982d] to-[#8dc086] text-white w-full h-[150px] rounded-lg p-3'>
            <p className='text-lg font-medium'>Approved Survey</p>
            <p className='text-2xl font-medium mt-10'>1,433</p>
            <p>last week survey</p>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-[#d45050] via-[#f35f5f] to-[#ffb3b3] text-white w-full h-[150px] rounded-lg p-3'>
            <p className='text-lg font-medium'>Rejected Survey</p>
            <p className='text-2xl font-medium mt-10'>3,563</p>
            <p>last week survey</p>
          </div>
        </div>
        <div className='grid grid-cols-10 justify-center items-center'>
          <div className='self-start col-span-6 px-10 bg-white mx-6 py-4 rounded-2xl'>
            <div>
              <Bar data={data} />
            </div>
          </div>
          <div className='col-span-4 bg-white mx-6 py-4 rounded-2xl'>
            <IndiaMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
