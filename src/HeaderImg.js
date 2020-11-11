
import React from "react";
import styled from "styled-components";
import ImgPath from "./img/header_logo.png";

// const ImgPath = styled.img`
  // font-size: 20px;
  // background-color: pink;
// `;


const HeaderImg = () => {
  return <img src={ImgPath}  width="120" height="68" alt="ロゴ" />;
};

export default HeaderImg;