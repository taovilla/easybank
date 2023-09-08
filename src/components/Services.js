import React from 'react'
import data from './data'
import Info from './Info'

function Services() {

const details = data.map(list =>{
    return (
        <Info
          {...list}
        
        />
    )
})    


  return (
    <div className='services-container'>
     <diV className='services-header'>
       <h2>  Why choose Easybank?</h2>
       <p> We leverage Open Banking to turn your bank account into your financial hub. Control 
           your finances like never before.</p>
      
       </diV>

       <div className='service-details'>
     {details}
     </div>

    </div>
  )
}

export default Services