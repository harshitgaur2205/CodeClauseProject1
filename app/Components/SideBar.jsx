import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <main className='w-[20%] max-xl:hidden min-h-screen bg-gray-100 font-[400] text-sm'>
    <div className='flex flex-col gap-5 justify-center items-center pt-20'>
        <div className='w-[80%] max-2xl:w-auto px-10 p-3 mb-6 flex items-center nav-bar-select'><MdOutlineDashboard className='w-8 h-6 mr-5 text-gray-500' /> <Link href="/DashBoardMain">Dashboard</Link></div>
        {/* <div className='w-[80%] max-2xl:w-auto px-10 p-3 flex items-center nav-bar-select'><LuPackage className='w-8 h-6 mr-5 text-gray-500' /> <Link href="/Products">Products</Link></div> */}
        <div className='w-[80%] max-2xl:w-auto px-10 p-3 flex items-center nav-bar-select'><SiGoogleanalytics className='w-8 h-6 mr-5 text-gray-500' /> <Link href="/Analytics">Analytics</Link></div>
        {/* <div className='w-[80%] max-2xl:w-auto px-10 p-3 mb-14 flex items-center nav-bar-select'><FiUsers className='w-8 h-6 mr-5 text-gray-500' /> <Link href="/People">Customers</Link></div> */}
        <div className='w-[80%] max-2xl:w-auto px-10 p-3 flex items-center nav-bar-select'><FaRegUser className='w-8 h-6 mr-5 text-gray-500' /> <Link href="/">Profile</Link></div>
        <div className='w-[80%] max-2xl:w-auto px-10 p-3 flex items-center nav-bar-select'><IoSettingsOutline className='w-8 h-6 mr-5 text-gray-500' /> <Link href="/">Setting</Link></div>
    </div>
</main>
  )
}

export default Sidebar