import React from 'react'
import "./input.css"
const input = ({ type,placeHolder,onChange}) => {
  return (
    
      <input className='input'  
      type={type} 
      placeholder={placeHolder} 
      onChange={onChange} />
   
  )
}

export default input
