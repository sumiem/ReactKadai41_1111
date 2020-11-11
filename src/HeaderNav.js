import React from "react";
import styled from "styled-components";
// import ImgPathH from "./img/header_logo.png";

const NavMenu = styled.li`
    text-align: center;
    display: inline;
    padding: 50px 25px;
    font-size: 21px;
`;

const HeaderNav = () => {
  return (<>
  <div >
    <ul >
        <NavMenu><a href="#about">ABOUT</a></NavMenu>
        <NavMenu><a href="#course">COURSE</a></NavMenu>
        <NavMenu><a href="#news">NEWS</a></NavMenu>
        <NavMenu><a href="#access">ACCESS</a></NavMenu>
        <NavMenu><a href="#contact">CONTACT</a></NavMenu>
    </ul>
  </div>
  
  </>);
};

export default HeaderNav;
