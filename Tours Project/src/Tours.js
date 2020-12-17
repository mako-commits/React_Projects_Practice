import React from 'react';
import Tour from './Tour';


const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          // using object spread operator to get access to all the properties in the object
          // fucntions can be passed as props eg removeTour function
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        }

        )}
      </div>
    </section>
  );




};

export default Tours;
