import React from 'react'

export const Navbar = () => {
  return (
    <nav className='py-10'>
        <ul className='list-none flex gap-2'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
    </nav>
  )
}
