import React from 'react'
import "../CSS/Button.scss"

const Button = (props) => {
  
  return (
    <>
    <div id='butDiv'>
      <button>{props.data.name}</button>
      </div>
    </>
  )
}

export default Button