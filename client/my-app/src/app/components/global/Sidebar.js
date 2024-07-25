import React from 'react'


const Sidebar = () => {
  return (
    <div className='relative h-[91vh] w-[17vw] flex items-center justify-center   bg-slate-700'>
        <ul className='sidebar-list'>
          <li className='mt-10 active'>View Data</li>
          <li>Instructions</li>
          <li>About</li>
          <li>Source</li>
          <li>Change</li>
        </ul>
      
    </div>
  )
}

export default Sidebar
