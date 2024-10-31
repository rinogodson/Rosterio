import React from 'react'

function RollnoDisplay(props) {
  return (
    <div
    className='rollno' onClick={() => props.setCurrentValue("0")}>
    {props.currentValue}
    </div>
  )
} 

export default RollnoDisplay
