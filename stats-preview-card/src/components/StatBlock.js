import React from 'react'

const StatBlock = ({stat, label}) => {
  return (
    <li className='statBlock'>
      <p className='statNum'>{stat}</p>
      <p className='label'>{label}</p>
    </li>
  )
}

export default StatBlock
