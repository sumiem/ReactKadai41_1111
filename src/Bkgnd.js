import React from 'react';
import ImgPathM from "./img/mainbg.png";

function Bkgnd() {
  return (
    <div
      style={{
        backgroundImage: 'url('+ImgPathM+')',
        backgroundSize: "cover",
        width: '100%',
        height: '100px'
      }}
    />
  );
}

export default Bkgnd;