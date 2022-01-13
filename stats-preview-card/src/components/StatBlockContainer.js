import React from 'react'
import StatBlock from './StatBlock';

const StatBlockContainer = () => {
  return (
    <ul className='statBlockContainer'>
      <StatBlock
        stat="10k+"
        label="COMPANIES"
      />
      <StatBlock
        stat="314"
        label="TEMPLATES"
      />
      <StatBlock
        stat="12M+"
        label="QUERIES"
      />
    </ul>
  ) 
}

export default StatBlockContainer
