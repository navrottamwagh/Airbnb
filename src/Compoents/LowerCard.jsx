import React from 'react'
import "../CSS/LowerCard.scss"
import { AiFillStar,AiFillHeart } from "react-icons/ai";
const LowerCard = (props) => {
  return (
    <>
       <div id='main'>
         <AiFillHeart id='heartIco' style={{position:"relative", top:"5%", left:"80%"}}/>
       <img src={props.data.img} height="270px" width="220px" alt='loweCard'/>
       <span><AiFillStar/>{props.data.rating}</span>
      <h3>{props.data.title}</h3>
      <h4>{props.data.price}</h4>
      </div>
    </>
  )
}

export default LowerCard
