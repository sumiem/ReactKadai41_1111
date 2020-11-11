import React from "react";
import styled from "styled-components";
import imgPath1 from "./img/about_01.jpg";
import imgPath2 from "./img/about_02.jpg";
import imgPath3 from "./img/about_03.jpg";
import imgPath4 from "./img/about_04.jpg";


const AboutH1 = styled.h1`
color: yellow;
  `;
const AboutH2 = styled.h2`
    text-align: center;
    /* color: white; */
    /* font-size: 30px; */
    /* padding-top: 30px; */
  `;
const AboutText = styled.p`
    font-size: 16px;
    color: #222222;
    text-align: center;
 `;

const AboutText1 = styled.p`
padding-top: 40px;
font-size: 16px;
`;
const AboutText2 = styled.p`
padding-top: 40px;
font-size: 16px;
`;
const AboutText3 = styled.p`
padding-top: 40px;
`;
const AboutText4 = styled.p`
padding-top: 40px;
padding-bottom: 60px;
`;

const AboutImage = styled.img`
    display: flex;
    justify-content: center;
  `;

const About = () => {
  return (
    <>
      <div className="AboutAll" id="about">
        <AboutH1>ABOUT</AboutH1>
        <AboutH2 className="AboutH2">チーズアカデミーについて</AboutH2>
        <AboutText>
          <AboutText1>
            チーズアカデミーは、チーズ職人養成学校です。
          </AboutText1>
          <AboutText2>
            チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
            <br />
            <br />
            そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
          </AboutText2>
          <AboutText3>
            そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。
          </AboutText3>
          <AboutText4>
            卒業後、チーズ自給自足のバックアップはもちろんのこと、
            <br />
            チーズ職人への就職・転職もサポートします。
          </AboutText4>
        </AboutText>
        <div className="aboutImage">
        {/* <AboutImage> */}
        <img src={imgPath1} width="24%" margin="0" className="image" alt="" />
        <img src={imgPath2} width="24%" margin="0" className="image" alt="" />
        <img src={imgPath3} width="24%" margin="0" className="image" alt="" />
        <img src={imgPath4} width="24%" margin="0" className="image" alt="" />
      {/* </AboutImage> */}
        </div>
      </div>
    </>
  );
};

export default About;
