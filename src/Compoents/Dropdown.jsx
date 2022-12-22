import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import "../CSS/DropDown.scss"

const Dropdown = () => {
const handleClick = ()=>{
    if((document.querySelector('#drop').style.display='none')){
        (document.querySelector('#drop').style.display='block');
     }
     setTimeout(()=>{
        (document.querySelector('#drop').style.display='none');
     },1700)
}


  return (
    <>
    <div id="main">
        <button onClick={handleClick}><FaUserCircle/><IoReorderThree/></button>
        <div id="drop">
            <li>Sign up</li>
            <li>Login</li>
            <hr />
            <li>Become a Member</li>
            <li>Know about us</li>
            <li>Reach out to us</li>
        </div>
        </div>
    </>
  )
}

export default Dropdown;