import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text:sm py-4 mb-4 border-b border-gray-400'>
      <div>

      </div>
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
    </div>
  )
}

export default Navbar
