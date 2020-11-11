import React from "react";
import styled from "styled-components";
// import "./styles.css";
import ImgPathM from "./img/mainbg.png";

const Mtitle = styled.h1`
    color: white;
    font-size: 40px;
    position:absolute;
    top: 140px;
    left:50%;
    transform: translate(-50%,-50%);
    width:100%
`;
const Mtext = styled.h1`
  color: white;
  font-weight: normal;
  font-size: 30px;
  position:absolute;
  top: 230px;
  left:50%;
  transform: translate(-50%,-50%);
  width:100%
`;
const MainVisual = styled.div`
  position: relative;
    /* background-image: "url(" + { ImgPathM } + ")"; */
`;

const Main = (prop) => {
    return (
        <>
            <MainVisual className="mainvisual">
            <img src={ImgPathM}  height="450px" margin="auto" alt="logo" />
                <Mtitle>セカイを変えるチーズを作ろう</Mtitle>
                <Mtext>チーズ職人養成学校「チーズアカデミーTOKYO」</Mtext>
            </MainVisual>
        </>
    )
}

export default Main