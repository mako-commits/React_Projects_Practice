import React, { useState, Fragment } from 'react';
import data from './data';
function App() {

  //for how many paragraphs to be generated
  const [count, setCount] = useState(0)
  //default value for the text,which is an empty array
  const [text, setText] = useState([])


  const handleSubmit = (e) => {
    // to prevent uneccesary page refresh
    e.preventDefault();
    // convert count type to number from string
    let amount = parseInt(count)
    setText(data)

    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    // slice will return a new copy of array and will select item from 0 to amount
    setText(data.slice(0, amount))
  }
  return (
    <Fragment>
      <section className='section-center'>
        <h3>Random Text Generator</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>
            paragraphs:
          </label>

          {/* value = count(state value).....as the value changes,the count changes */}
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)} />
          <button type='submit' className='btn'>Generate</button>
        </form>

        <article className='lorem-text'>
          {text.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
        </article>
      </section>
    </Fragment>
  )
}

export default App;
