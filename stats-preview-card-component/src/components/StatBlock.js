import React from 'react'

const StatBlock = ({stat, label}) => {
  return (
    <div className='statBlock'>
      <h2>{stat}</h2>
      <p>{label}</p>
    </div>
  )
}

export default StatBlock
