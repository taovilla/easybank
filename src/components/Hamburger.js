
import React, {useState} from 'react'
import{FaBars,FaTimes} from 'react-icons/fa'

function Hamburger() {

    const [isOpen , setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    


  return (
    <div className='hamburger-menu'>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`menu-items ${isOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>


    </div>
  )
}

export default Hamburger
