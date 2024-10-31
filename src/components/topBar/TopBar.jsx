import React from 'react'
import './TopBar.css'

function TopBar(props) {
  return (
    <div className='topbar'>
      <h1
      className='divisionName'
      >{props.division}</h1>

      <div className='progress'>
        <div className='green'></div>
        <div className='red'></div>
        <p className='percent'>{props.percent}</p>
      </div>
    </div>
  )
}

export default TopBar
