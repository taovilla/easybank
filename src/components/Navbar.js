import React from 'react'
import Button from './Button'
import logo from  './images/logo.svg'
import Hamburger from './Hamburger'

function Navbar() {
  return (
    <div>
     <nav className='nav-container'>
      
      <img src={logo}/>
      <div className='nav-menu'>
       <a href=''>Home</a>
       <a href=''>About</a>
       <a href=''>Contact</a>
       <a href=''>Blogs</a>
       <a href=''>Careers</a>
     
      </div>
      
      <div className='btn1'>
      <Button />
      </div>
      
      
     </nav>

    </div>
  )
}

export default Navbar