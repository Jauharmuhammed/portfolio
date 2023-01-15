import React from 'react'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <ul>
        <li>
          <a target='_blank' href="https://github.com/Jauharmuhammed"><img src={github} alt="github" /></a>
        </li>
        <li>
          <a target='_blank' href="https://linkedin.com/in/Jauharmuhammed"><img src={linkedin} alt="github" /></a>
        </li>
        <li>
          <a target='_blank' href="https://twitter.com/Jauharmuhammed_"><img src={twitter} alt="github" /></a>
        </li>
      </ul>
    </section>
  )
}

export default Sidebar