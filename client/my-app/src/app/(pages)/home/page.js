'use client'

import React from 'react'
import Seach from '@/app/components/global/Seach'
import TableComp from '@/app/components/HomeComp/Table'



const Page = () => {
  return (
    <div  className='main-content p-10 items-center flex flex-col  right-0 h-screen h-full w-[87vw] bg-white'>
      {/* Home */}
      <div className='w-full flex justify-end items-end'>
        <Seach />
      </div>

       <TableComp />
     
      <p className='text-black'></p>

    </div>
  )
}

export default Page
