// import React from 'react'
// import { FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench } from 'react-icons/fa'

// const Sidebar = () => {
//   return (
//       <div className='bg-[#283593] h-screen px-[25px]'>
//           <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/0.3'>
//               <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
//           </div>

//           <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/0.3'>
//               <FaTachometerAlt color='white'/>
//               <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
//           </div>

//           <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/0.3'>
//               <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
//               <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
//                   <div className='flex items-center gap-[10px]'>
//                         <FaRegSun color='white' />
//                         <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
//                   </div>
//                   <FaChevronRight color='white' />
//               </div>
//               <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
//                   <div className='flex items-center gap-[10px]'>
//                         <FaRegChartBar color='white' />
//                         <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
//                   </div>
//                   <FaChevronRight color='white' />
//               </div>
//                     <div className='flex items-center gap-[10px]'>
//                         <FaRegCalendarAlt color='white' />
//                         <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
//                   </div>
//           </div>

//           <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/0.3'>
//               <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONS</p>
//               <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
//                   <div className='flex items-center gap-[10px]'>
//                         <FaStickyNote color='white' />
//                         <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
//                   </div>
//                   <FaChevronRight color='white' />
//               </div>
//               <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
//                   <div className='flex items-center gap-[10px]'>
//                         <FaWrench color='white' />
//                         <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
//                   </div>
//                   <FaChevronRight color='white' />
//               </div>
//           </div>
//     </div>
//   )
// }

// export default Sidebar

import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out">
      <h2 className="text-2xl font-extrabold ml-[18px]">Admin Panel</h2>
      <nav>
        <Link
          to="/admin/users"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Users
        </Link>
        <Link
          to="/admin/products"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Products
        </Link>
        <Link
          to="/login"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <AiOutlineLogout />
        </Link>
        {/* Add more links here */}
      </nav>
    </div>
  );
};

export default Sidebar;
