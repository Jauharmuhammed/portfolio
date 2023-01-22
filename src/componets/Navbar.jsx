import React from 'react'

export const Navbar = () => {
  return (
    <nav className='py-10'>
        <ul className='list-none flex gap-4'>
            <li className='cursor-pointer'><a href='#'>Home</a></li>
            <li className='cursor-pointer'><a href='#projects'>Projects</a></li>
            <li className='cursor-pointer'><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}
