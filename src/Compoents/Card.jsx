import React from 'react'
import "../CSS/Card.scss"

const Card = (props) => {
 
    return(
        <div><div id='container'>
        <span>{props.data.title}</span>
        <h1>{props.data.desc}</h1>
        <img src={props.data.img} alt=""/>
        <button>Show All</button>
      </div></div>
    
    )

}

export default Card