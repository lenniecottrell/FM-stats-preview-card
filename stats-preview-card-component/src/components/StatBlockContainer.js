import React from 'react'
import StatBlock from './StatBlock';

const StatBlockContainer = () => {
  return (
    <div className='statBlockContainer'>
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
    </div>
  )
}

export default StatBlockContainer
