import React from 'react'
import { Stack, Container } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../CSS/Lower.scss";
import LowerCard from './LowerCard';
import { CardData } from './CardData';
const Lower = () => {
 const slideLeft = () => {
    var slider = document.getElementById('LowerSecSlider');
    slider.scrollLeft = slider.scrollLeft - 300;
  }
 const slideRight = () => {
    var slider = document.getElementById('LowerSecSlider');
    slider.scrollLeft = slider.scrollLeft + 300;
  }
  return (
    <>
    <Container>
    <Stack direction="row" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
     <h2 >Top sellers</h2>
     <Stack direction="row" style={{display:"flex", alignItems:"center", gap:"0.7rem"}}>
        <h3 style={{textDecoration:"underline"}}>Show (107)</h3>
        <button className='scrollLowerSection'><AiOutlineLeft  onClick={slideLeft}/></button>
        <button className='scrollLowerSection'><AiOutlineRight onClick={slideRight}/></button>
     </Stack>
    </Stack>
    <div id="LowerSecSlider">
    <Stack direction="row" sx={{display:"flex", gap:"0.5rem"}}>
    {
      CardData.map((curElem,idx)=>{
     
          return <LowerCard data={curElem} key={idx}/>
      })
    }
    </Stack>
    </div>
    </Container>
     
    </>
  )
}

export default Lower