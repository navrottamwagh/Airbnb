import React from "react";
import { Stack, Container } from "@mui/material";
import "../CSS/Upper.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import { CardData } from "./CardUpper";


const Upper = () => {

const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 700;
}

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 700;
}



  return (
    <>
     
      <Container>
      
        <Stack direction="row" style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>New this week</h1>
        <Stack direction="row" style={{ display: "flex", gap: "5px" }}>
        <div id="btnCall">
            <button className="scrollbtn">
              <AiOutlineLeft onClick={slideLeft} />
            </button>
            <button className="scrollbtn">
              <AiOutlineRight onClick={slideRight} />
            </button>
            </div>
          </Stack>
        </Stack>
      </Container>
      
   
    <div id="slider" style={{display:"flex", gap:"10px", flexWrap:"nowrap"}}>
      {CardData.map((curElem, idx) => {
        return (
            <Card  key={idx} data={curElem} />
        );
      })}
      </div>
    </>
  );
};

export default Upper;