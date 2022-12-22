import React from "react";
import "../CSS/Middle.scss";
import { Stack } from "@mui/material";
import { BtnData } from "./ButtonData";
import Button from "./Button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Middle= () => {

const slideLeft = () => {
  var slider = document.getElementById('middleSecSlider');
  slider.scrollLeft = slider.scrollLeft - 400;
}

const slideRight = () => {
  var slider = document.getElementById('middleSecSlider');
  slider.scrollLeft = slider.scrollLeft + 400;
}
  return (
    <>
      <Stack
        direction="row"
        sx={{ display:"flex", gap:"0.3rem", position:"relative", left: {lg:"6%", xs:"1%", md:"2%"}}}>
        
     
        <div id="leftButDiv">
          <button className="btnFixed" style={{backgroundColor:"white", border:"1px solid silver"}}>Dates</button>
          <button className="btnFixed" style={{backgroundColor:"white", border:"1px solid silver"}}>Group size</button>
          <button className="btnFixed" style={{backgroundColor:"white", border:"1px solid silver"}}>More filters</button>
        </div>

      <div id="middleSecSlider">
      <button id="leftScrl"  onClick={slideLeft}><AiOutlineLeft/></button>
      <button id="rightScrl" onClick={slideRight}><AiOutlineRight/></button>
       {BtnData.map((curElem, idx) => {
            return <Button key={idx} data={curElem} />;
          })}
        </div>
      </Stack>
    </>
  );
};

export default Middle;