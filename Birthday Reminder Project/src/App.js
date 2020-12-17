import React, { useState } from 'react';
import data from './data'
import List from './List';
import './App.css';

function App() {

  //state variable
  const [people, setPeople] = useState(data)

  function clearAllRecords() {
    //set people to an empty array
    setPeople([])
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>

        {/* people prop = people state value */}
        <List people={people} />
        <button onClick={clearAllRecords}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
