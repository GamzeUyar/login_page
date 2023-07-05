import React from 'react'
import "./button.css"
const Button = ({onClick}) => {
  return (
   
      <button className='button' onClick={onClick} >Giriş Yap</button>
   
  )
}

export default Button
