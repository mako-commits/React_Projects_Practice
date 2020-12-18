import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  // converting the rgb array to a string with commas
  const bcg = rgb.join(',')
  // converting rgb value to hex
  // const hex = rgbToHex(...rgb)

  // add an hashtag to the hex value
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <>
      {/* check when the index is greater than 10,change the className to color-light */}
      <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue)
        }}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexValue}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
      </article>
    </>
  )
}

export default SingleColor
