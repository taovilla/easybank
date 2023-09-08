import React from 'react'
import logo from './images/logo.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import Button from './Button'


function Foooter() {
  return (
    <div className='foooter'>
        <div className='foooter-logo'>
            <img src={logo} alt='logo'></img>

            <div className='social'>
            <img src={facebook} alt='facebook'></img>
            <img src={instagram} alt='instagram'></img>
            <img src={twitter} alt='twitter'></img>
            <img src={youtube} alt='logo'></img>
             
            </div>
        </div>


        <div className='link-container'>
            <div className='link1'>
                <a href='#'>About Us</a>
                <a href='#'>Contact</a>
                <a href='#'>Blog</a>
            </div>
            <div className='link2'> 
            <a href='#'>Careers</a>
            <a href='#'>Support</a>
            <a href='#'>Privacy Policy</a>
            </div>
        </div>


        <div className='foooter-button'>
            <Button/>
            <p> © Easybank. All Rights Reserved</p>

        </div>

        

    </div>

    
  )
}

export default Foooter