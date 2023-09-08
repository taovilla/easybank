import React from 'react'


function Info(props) {
  return (
    <div className='info-container'>
     <img src={`../images/${props.image}`}/>
     <h3> {props.title}</h3>
     <p>{props.description}</p>

    </div>
  )
}

export default Info