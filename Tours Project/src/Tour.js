import React, { useState } from 'react';

//destructing all the props from the object
const Tour = ({ id, image, info, price, name, removeTour }) => {

  // setting up a state value
  const [readMore, setReadMore] = useState(false)


  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        {/* if the readMore is true dispaly info,if not display 200 characters instead */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* !readMore on click,changes the value of readMore */}
          <button onClick={() => setReadMore(!readMore)}>
            {/* if readmore is true,dispaly show less on the button,otherwise,display show lesss */}
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
