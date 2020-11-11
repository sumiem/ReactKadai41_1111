import React from "react";
import styled from "styled-components";
import Background from "./img/mainbg.png";
// background: url(./img/mainbg.png);
const Mtitle = styled.h1`
    color: white;
    font-size: 40px;
    padding-top: 160px;
    text-align: center;
    margin:0;
`;
const Mtext = styled.p`
    color: white;
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
    margin:0;
`;

const Mv = styled.div`
 background-image: url(${Background});
 height: 450px;
 margin: 0;
 background-size: cover;
`;

const Main = () => {
  return (
    <Mv>
      <Mtitle>セカイを変えるチーズを作ろう</Mtitle>
      <Mtext>チーズ職人養成学校「チーズアカデミーTOKYO」</Mtext>
    </Mv>
  );
};
export default Main;