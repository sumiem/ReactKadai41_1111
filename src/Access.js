import React from "react";
// import Iframe from './IframeComm';
import styled from "styled-components";
// import Iflame from url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3916472593896!2d139.71164155100485!3d35.667357338242574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9faa7a06e3%3A0xb5f86d73bf92e8bc!2z44CSMTA3LTAwNjEg5p2x5Lqs6YO95riv5Yy65YyX6Z2S5bGx77yT5LiB55uu77yVIOmdkuaci-ODk-ODqyAyRg!5e0!3m2!1sja!2sjp!4v1597848858741!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0";
// import ImgPathH from "./img/header_logo.png";

const Access = () => {
  return (
<div className="access" id="access">
    <h1>ACCESS</h1>
    <h2>会社情報</h2>

    <div className="accessMap">
    <iframe title="map"　className="ifMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3916472593896!2d139.71164155100485!3d35.667357338242574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9faa7a06e3%3A0xb5f86d73bf92e8bc!2z44CSMTA3LTAwNjEg5p2x5Lqs6YO95riv5Yy65YyX6Z2S5bGx77yT5LiB55uu77yVIOmdkuaci-ODk-ODqyAyRg!5e0!3m2!1sja!2sjp!4v1597848858741!5m2!1sja!2sjp" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>

    <div className="access_info">
      <table>
        <tr>
          <th>学校名</th>
          <td>チーズアカデミーTOKYO</td>
        </tr>
        <tr>
          <th>事務所所在地</th>
          <td>〒107-0061東京都港区北青山3-5-6 青朋ビル2F</td>
        </tr>
        <tr>
          <th>TEL</th>
          <td>03-5413-5045</td>
        </tr>
        <tr>
          <th>FAX</th>
          <td>03-5413-5046</td>
        </tr>
        <tr>
          <th>MAIL</th>
          <td>dummy@cheeseacademy.tokyo</td>
        </tr>
      </table>
      
    </div>

  </div>
  );
};

export default Access;
