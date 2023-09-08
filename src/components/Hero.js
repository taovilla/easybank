import React from 'react'
import Button from './Button'
import mockups from './images/image-mockups.png'
import background from './images/bg-intro-desktop.svg'
function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
         <h1>Next generation digital banking</h1>
         <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
         </p>
         <Button/>
        </div>
        

          <img src={mockups}  className='hero-img' style={{ backgroundImage: `url(${background})`,
           backgroundRepeat:'no-repeat',
           
        }}/>
        
    </div>
  )
}

export default Hero