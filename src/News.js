import React from "react";
import styled from "styled-components";
import ImgPathN1 from "./img/news_img.jpg";

const News = () => {
  return (
    <>
<div className="news" id="news">
    <h1 className="yellow">NEWS</h1>
    <h2>ニュース</h2>
    <div className="newsContent">
    <div className="news1">
      <div className="newsImage">
        <img src={ImgPathN1} alt=""/>
      </div>
      <div className="newsDate">
        <p>2016/11/18</p>
      </div>
      <div className="newsText">
        <p>チーズアカデミー卒業生のコスゲさんによる
            チーズだけをふんだんに使用した話題のピザ屋
            「Kosuge Pizza」が渋谷でオープンしました！</p>
      </div>
    </div>  

    <div className="news1">
      <div className="newsImage">
        <img src={ImgPathN1} alt=""/>
      </div>
      <div className="newsDate">
        <p>2016/11/18</p>
      </div>
      <div className="newsText">
        <p>チーズアカデミー卒業生のコスゲさんによる
            チーズだけをふんだんに使用した話題のピザ屋
            「Kosuge Pizza」が渋谷でオープンしました！</p>
      </div>
    </div>  

    <div className="news1">
      <div className="newsImage">
        <img src={ImgPathN1} alt=""/>
      </div>
      <div className="newsDate">
        <p>2016/11/18</p>
      </div>
      <div className="newsText">
        <p>チーズアカデミー卒業生のコスゲさんによる
            チーズだけをふんだんに使用した話題のピザ屋
            「Kosuge Pizza」が渋谷でオープンしました！</p>
      </div>
    </div>  
    </div>

      {/* <!-- ボタン--> */}
    <div className="newsMore">
      <button className="moreBtn">More</button>
    </div>

  </div>  


    </>
  );
};

export default News;
