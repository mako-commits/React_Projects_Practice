import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import questions from './data';
function App() {

  //state variable
  const [questions, setQuestion] = useState(data)

  return <main>
    <div className="container">
      <h3>Frequently Asked Questions</h3>
      <section className='info'>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>

    </div>

  </main>;
}

export default App;
