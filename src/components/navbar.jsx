import React from 'react'
import Logo from '../assets/Logo.png'
import { MdOutlineSegment } from "react-icons/md";


const Navbar = () => {

  return (
    <div className=''>
      <nav id='nav' className=" flex justify-between items-center pt-10 px-16  text-gray-100 lg:flex-row   ">
      <div className='cursor-pointer' >
        <img src={Logo} alt="" />
      </div>
      <ul className=" hidden gap-8 cursor-pointer lg:flex ">
        <li className=''><a href="#" className=' p-2 hover:rounded-full hover:bg-primaryColor hover:text-stone-950 hover:font-semibold'> Home</a></li>
        <li className=''><a href="#" className=' p-2 hover:rounded-full hover:bg-primaryColor hover:text-stone-950 hover:font-semibold '> About</a></li>
        <li className=''><a href="#" className=' p-2 hover:rounded-full hover:bg-primaryColor hover:text-stone-950 hover:font-semibold '> Services</a></li>
        <li className=''><a href="#" className=' p-2 hover:rounded-full hover:bg-primaryColor hover:text-stone-950 hover:font-semibold '> Product</a></li>
      </ul> 
      <div className=' gap-4 hidden lg:flex'>
        <a href="#"className='px-5 py-1 border-2 border-primaryColor rounded-xl hover:bg-primaryColor hover:text-stone-950 hover:font-semibold'>Sign In</a> 
        <a href="#" className='px-5 py-1 border-2 border-primaryColor rounded-xl text-stone-950 bg-primaryColor font-semibold hover:text-gray-100'>Get Started</a>
      </div>
      <div id='hambtn' className='lg:hidden block text-2xl'>
      <MdOutlineSegment />

        </div>
    </nav>
    </div>
  )
}

export default Navbar