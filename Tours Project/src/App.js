import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'



const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // if the tour id doesnt match,it will be placed in the newTours array,if the id matches,it will be removed
    const newTours = tours.filter((tour) => tour.id !== id);
    // set setTours = newTours
    setTours(newTours);
  }

  const fetchTours = async () => {
    // when fectching the data,set loading to true
    setLoading(true);

    //catching errors
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }
  return (<main>
    {/* tours props = tours state value */}
    <Tours tours={tours} removeTour={removeTour} />
  </main>)
}

export default App
