import React from "react";
import styled from "styled-components";
// import "./style.css";
import ImgPath from "./img/mainbg.png";

// CSSうつす
// title
// const MainVisual = styled.img`
/* backgroundImage: url(./img/mainbg.png/); */
//   height: 450px;
//   margin: auto;
//   background-size: cover;
// `;

const Mtitle = styled.h1`
    color: red;
    font-size: 40px;color-interpolation-filters
    padding-top: 160px;
    text-align: center;
`;

const Mtext = styled.p`
  text-align: center;
  color: white;
  font-size: 30px;
  padding-top: 30px;
`;

const MainVisual = styled.div`
    background-image: "img src={ImgPath}";
    /* "url(" + { ImgPath } + ")" */
    height: 450px;
    margin: auto;
    background-size: cover;
`;

const Main = () => {
  return (
    <div  className="MainVisual" >
      <MainVisual>
        <Mtitle>
          <h1>セカイを変えるチーズを作ろう</h1>
        </Mtitle>
        <Mtext>
          <p>チーズ職人養成学校「チーズアカデミーTOKYO」</p>
        </Mtext>
      </MainVisual>
    </div>
  );
};

export default Main;
