import React from 'react'
import Card from './Card'
import data from './card-data'

function CardSection() {

    const cards = data.map(item =>{
        return(
          <Card
          
          {...item}
          />
        )
        
          })
  return (
    <div className='cardsection'>
        <h1>Latest Article</h1>

        <section className='card-details'>
      {cards}
      </section>
       

    </div>
  )
}

export default CardSection