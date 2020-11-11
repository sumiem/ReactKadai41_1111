import React from "react";
import styled from "styled-components";
import ImgPathC1 from "./img/course_01.jpg";
import ImgPathC2 from "./img/course_02.jpg";
import ImgPathC3 from "./img/course_03.jpg";

// CourseのTOP
const Course1 = styled.div`
  font-size: 26px;
  font-weight: bold;
  padding: 40px 0 20px 50px;
`;
const CourseText = styled.div`
  margin: 0%;
  margin-top: auto;
  margin-bottom: auto;
`;
const CourseText1 = styled.p`
  font-size: 16px;
  color: #222222;
  text-align: center;
  padding-bottom: 60px;
`;
/* Course ContentのStyle */
// const Course2 = styled.div`
// font-size: 26px;
// font-weight: bold;
// padding: 40px 0 20px 50px;
// `;
// const CourseH3 = styled.h3`
// /* font-size: 26px; */
// /* font-weight: bold; */
// /* padding: 40px 0 20px 50px; */
// `;
/* Course ContentのStyle */
const CourseContent = styled.div`
  width: 100%;
`;
const CourseContent1 = styled.div`
  display: flex;
  width: 100%;
`;
const CourseImg1 = styled.div`
  width: 100%;
`;
const ContentText1 = styled.div`
  width: 100%;
  margin: 0%;
  margin-top: auto;
  margin-bottom: auto;
`;

const CourseContent2 = styled.div`
  width: 100%;
  display: flex;
`;
const CourseImg2 = styled.div`
  width: 100%;
`;
const ContentText2 = styled.div`
    width: 100%;
    margin: 0;
    margin-top: auto;
    margin-bottom: auto;
`;
const CourseContent3 = styled.div`
  display: flex;
  width: 100%;
`;
const CourseImg3 = styled.div`
  width: 100%;
`;
const ContentText3 = styled.div`
  width: 100%;
  margin: 0%;
  margin-top: auto;
  margin-bottom: auto;
`;
const Course = () => {
  return (
    <>
      <Course1>
        <h1>COURSE</h1>
        <CourseText>
          <CourseText1>
            未経験からでもスタートができるよう、カリキュラムは多くの専門家や<br/><br/>
            現役チーズ職人のアドバイスのもと、作られました。
          </CourseText1>
        </CourseText>
      </Course1>
 {/* コンテンツ */}
      <CourseContent>
        <CourseContent1>
          <CourseImg1>
            <img src={ImgPathC1} width="100%" alt="" />
          </CourseImg1>
          <ContentText1>
            <div className="textboxA">
              <h3>本格的な農園を使った実地研修</h3>
              <p>
                チーズアカデミーでは、本格的な農園を使った実地研修を<br/>
                行うことができます。プロとして活躍するチーズ職人も<br/>
                使用するような、広大で環境も整った農園を余すところ<br/>
                なく使い、卒業時には本格的なチーズを自分の力で作れる<br/>
                実践力の養成を目指します。
              </p>
            </div>
          </ContentText1>
        </CourseContent1>

        <CourseContent2>
          <ContentText2>
            <div className="textboxB">
              <h3>必要な知識もしっかりと取得</h3>
              <p>
                チーズ作りには、しっかりとした食に関する知識が<br />
                欠かせません。チーズアカデミーでは、一流講師陣による、<br />
                チーズ作りに必要ないろはを余すところなく学べます。<br />
                チーズそのものでなく、栄養学全般を学ぶことも<br />
                可能ですので、チーズ以外への展開も夢ではないでしょう。
              </p>
            </div>
          </ContentText2>
          <CourseImg2>
            <img src={ImgPathC2} width="100%" alt="" />
          </CourseImg2>
        </CourseContent2>

        <CourseContent3>
          <CourseImg3 className="courseImage3">
            <img src={ImgPathC3} width="100%" alt="" />
          </CourseImg3>
          <ContentText3 className="contentText3">
            <div className="textboxA">
              <h3>卒業制作はティスティング審査あり</h3>
              <p>
                チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。<br />
                卒業制作として、チーズ作りを実際に行います。卒業後、<br />
                一般参加によるティスティング審査があるため、作り手の<br />
                目線だけでなく、消費者の目線から、卒業制作作品としての<br />
                チーズを、しっかりと評価いただくことができます。
              </p>
            </div>
          </ContentText3>
        </CourseContent3>
      </CourseContent>
    </>
  );
};

export default Course;
