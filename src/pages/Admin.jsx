import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Admin/Sidebar'

const Admin = () => {
  return (
    <div className='flex'>
      <div className='basis-[15%]'>
        <Sidebar/>
      </div>
      <div className='basis-[85%]'>
        
      </div>
      <Outlet/>
    </div>

  )
}

export default Admin