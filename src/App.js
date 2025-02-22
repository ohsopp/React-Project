
/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import List from './pages/List';
import {Routes, Route, Link} from 'react-router-dom';

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

      <div>
          <nav>
            <Link to='/'>Home</Link> |
            <Link to='/about'>About</Link> |
            <Link to='/counter'>Counter</Link> |
            <Link to='/input'>Input</Link> |
            <Link to='/input2'>Input2</Link> |
            <Link to='/list'>List</Link>
          </nav>
          <br/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/counter" element={<Counter/>}></Route>
            <Route path="/input" element={<Input/>}></Route>
            <Route path="/input2" element={<Input2/>}></Route>
            <Route path="/list" element={<List/>}></Route>
          </Routes>
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

    </div>
  );
}


export default App;
