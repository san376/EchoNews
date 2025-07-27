import React from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.jpeg'
import logo2 from '../assets/logo2.png'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between text:sm py-4 mb-4 border-b border-gray-400'>
        <img src={logo2} alt="" className='w-80 h-40 rounded-full' />
      <div className=' md:flex items-start gap-5 font-medium'>
         <NavLink to='/'>
            Home
         </NavLink>
          <NavLink to='/select-news'>
            Select-News
         </NavLink>
          <NavLink to='/about'>
            About
         </NavLink>
          <NavLink to='/contact'>
            Contact
         </NavLink>
      </div>
      <div>
         <p className='bg-primary text-white px-8 py-3 rounded-full font-medium mb-4  md:block '>Create Account</p>
      </div>
      <p></p>
    </div>
  )
}

export default Navbar
