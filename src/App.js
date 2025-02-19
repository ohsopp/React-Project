
/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let [title,changeTitle] = useState(['남자 코트 추천', '여자 코트 추천', '강남 우동 맛집']);
  let [count, changeCount] = useState(0);

  function changeTitleFunc() {
    var newTitles = [...title];
    newTitles.sort()
    changeTitle(newTitles);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog </div>
      </div>
      <div style={{ marginTop: "20px" }}><button onClick={ changeTitleFunc }>오름차순 정렬</button></div>
      <div className="list">
        <h3> { title[0] } <span className="like" onClick={ ()=>{ changeCount(count + 1) } }>😍</span> { count } </h3>
        <p>2월 4일 발행</p>
        <hr/>

        <h3> { title[1] } </h3>
        <p>2월 5일 발행</p>
        <hr/>

        <h3> { title[2] } </h3>
        <p>2월 6일 발행</p>
        <hr/>
      </div>

      <Modal count={count} changeCount={changeCount}></Modal>
      <Test></Test>

    </div>
  );
}

function Modal({count, changeCount}){
  return(
    <div className="modal">
      <h2>title</h2>
      <p>date</p>
      <p>detail</p>
      <button onClick={()=>changeCount(count + 1)}>btn</button> {/* 숫자 1씩 증가. props를 이용하여 App에서 state 받아옴 */}
    </div>
  )
}

function Test() {

  let [posts, changePosts] = useState("안녕하세요!");
  let [greet, changeGreet] = useState("");

  function onClickButton() {
    changePosts("반가워요!");
  }

  return(
    <div>
      <h1 className="h1">{ posts }</h1>
      <button onClick={onClickButton}>인사말 바꾸기</button>
    </div>
  )
}

export default App;
