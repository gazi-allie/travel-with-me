import React from 'react'
import Card from './Card';

function Tours({tours, removeTour}){
  
    return(
    <div className='container'>
        <div>
        <h1 className='title'>Explore with me </h1>
        </div>
        <div className='cards'>
            {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeeTour={removeTour} > </Card>//...+>cloning
                })
            }


        </div>

    </div>

        
    )


}

export default Tours;