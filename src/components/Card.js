import React from 'react'

function Card(props) {
  return (
    <div className='cards'>
    
    <img src={`../images/${props.image}`}/>
    <h5>{props.name}</h5>
    <h3>{props.title}</h3>
    <p>{props.description}</p>


    </div>
  )
}

export default Card