import React from "react";
import "../CSS/Navbar.scss";
import { Stack, Button } from "@mui/material";
import Logo from "../assets/1logo.png";
import { TbWorld } from "react-icons/tb";
import Dropdown from "./Dropdown";




const Navbar = () => {
  return (
    <Stack direction="row" sx={{ borderBottom: "1px solid silver", padding: { lg: "1.25rem", xs: "0.50rem" } }}>
      <img src={Logo} style={{maxHeight:"30px"}} alt="logo" />
      
      <Stack direction="row" sx={{ position: "relative", left: { lg: "75%", xs: "7%" } }}>
        
        <Button variant="text" id="btn1">
          Become a Host
        </Button>

         <Button id="btn2">
         <TbWorld />
         </Button>
         <Dropdown/>
         </Stack>
         </Stack>
  );
};

export default Navbar;