import React from "react";
import styled from "styled-components";
// import ImgPathH from "./img/header_logo.png";

const Header = () => {
  return (
    <>
<div className="contact" id="contact">
    <h1>CONTACT</h1>
    <p className="contactText1">説明会お申し込み・お問い合わせ</p>
    <p className="contactText2">ぜひ1度、足を運んでみませんか。説明会は随時開催中。<br/>
      その他、お問い合わせもお気軽にどうぞ。お待ちしております。</p>
    <p className="contactText3">※チーズアカデミーは実際には存在しません。<br/>
      間違っても問い合わせしないようお願いいたします。</p>

    <div className="contactForm">
      <form>
        <div className="formTable">
          <table>
            <tr>
              <th><label for="name">名前</label></th>
              <td><input id="name" className="inputText" type="text"/></td>
            </tr>
            <tr>
              <th><label for="kana">カナ</label></th>
              <td><input id="kana" className="inputText" type="text"/></td>
            </tr>
            <tr>
              <th><label for="mail">メールアドレス</label></th>
              <td><input id="mail" className="inputText" type="text"/></td>
            </tr>
            <tr>
              <th><label for="notice">
                <p>チーズアカデミーを<br/>知ったきっかけ</p></label></th>
              <td>
                <select id="notice" type="select" required>
                  <option value="">選択してください</option>
                  <option value="google検索">google検索</option>
                  <option value="SNS">SNS</option>
                  <option value="紹介">紹介</option>
                  <option value="たまたま通りかかった">たまたま通りかかった</option>
                  <option value="その他">その他</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>志望動機</th>
              <td>
                <p id="check1" className="form_ckbox"><input type="checkbox"/><label for="check1">起業をしたい</label></p>
                <p id="check2" className="form_ckbox"><input type="checkbox"/><label for="check2">チーズ系企業に就職・転職したい</label></p>
                <p id="check3" className="form_ckbox"><input type="checkbox"/><label for="check3">チーズと関わる仕事をしており、仕事に生かしたい</label></p>
                <p id="check4" className="form_ckbox"><input type="checkbox"/><label for="check4">チーズの教養を身につけたい</label></p>
              </td>
            </tr>
            <tr>
              <th><label for="detail">詳細</label></th>
              <td><textarea className="input_text" id="detail"></textarea></td>
            </tr>
          </table>
        </div>
      </form>
      <div className="submit">
        <button className="submit_btn">送信</button>
      </div>
    </div>
        {/* <!--  formのdivおわり --> */}
  </div>
 {/* <!--  contactのdivおわり --> */}

</>
  );

};

export default Header;
