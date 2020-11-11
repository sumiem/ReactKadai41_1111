import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  background-color: pink;
`;

const Box = styled.div`
  background: blue;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Ohori = ({ text, title }) => {
  return (
    <>
      <Title className={text}>{text}</Title>
      <Box className="box">{title}</Box>
    </>
  );
};
export default Ohori;

// // propsとは引数なので、JSのただのテンプレ
// const Ohori = (props) => {
//   return (
//     <>
//       <div className={props.text}>{props.text}</div>
//       <div>{props.title}</div>
//     </>
//   );
// };
// export default Ohori;

// propsを使わないと、↓
// Javeのオブジェクトはファイル構造が決められる。
// Reactでは、全部のHTMKが収納された一式に変換される。
// Reactは最初の読み込みは遅いが、すべての情報が読み込まれるため。ただ、変更において反応が早い
// ただ、データを送るためだけの箱を作る。
// npmで使いたい
// onst Ohori = ({text, title}) => {
//   return (
//     <>
//       <div className={text}>{text}</div>
//       <div>{title}</div>
//     </>
//   );
// };
// export default Ohori;
