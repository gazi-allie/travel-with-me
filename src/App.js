import React, { useState } from 'react';
import data from './data.js';
import Tours from './Component/Tours';

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {

    const newTours = tours.filter((tour) => tour.id !== id);
   
    setTours(newTours);
  }
  function refreshTour() {
    setTours(data);
  }
  if(tours.length ===0) {
    return (
      <div className='refresh'>
        <h1>No Choice  Left...</h1>
        <button className='refBtn' onClick={refreshTour}> Refresh</button>
      </div>
    );
  
  }
  
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  );
};

export default App;
 