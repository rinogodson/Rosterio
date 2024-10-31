import React from 'react'
import './Element.css'

function Element({name}) {
  return (
    <div className="Element">
      <p>
        <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          {("0" + name.no).slice(-2)+"."}
        </span>
        {" "}
        {name.name}
      </p>
    </div>
  )
}

export default Element
