import React, { useState } from 'react'

export const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <div id="color-picker-container" style={{backgroundColor: color}}>
      <label htmlFor="">Choose Color for the Background</label>
      <input type="color" value={color} id="color-input" onChange={(e)=>{
        setColor(e.target.value)
      }} />
    </div>
  )
};