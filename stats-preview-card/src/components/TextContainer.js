import React from 'react'
import StatBlockContainer from './StatBlockContainer';

const TextContainer = () => {
  return (
    <div className='textContainer'>
      <h1>Get <span className='accent'>insights</span> that help your business grow.</h1>
      <p>Discover the benefits of data anlytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
      <StatBlockContainer />
    </div>
  )
}

export default TextContainer
