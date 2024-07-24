import React from 'react'
import Sidebar from './Sidebar'

const Main = ({children}) => {
  return (
    <div className='w-full flex h-screen '>
        <Sidebar />

        <div className='mainContent'>
            {children}
        </div>
    </div>
  )
}

export default Main
