import React, { Component } from 'react';
import './App.css';
import imgs from './images/top-xingxiangtu.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>首页</li>
          <li>产品简介</li>
          <li>赢在细节</li>
          <li>多色可选</li>
          <li>服务保障</li>
          <a href="http://wpa.qq.com/pa?p=2:272216758:51"><li>在线咨询</li></a>
        </ul>
        <img src={imgs} />
        <img src={require('./images/1.jpg')} />
        <img src={require('./images/2.jpg')} />
        <img src={require('./images/3.jpg')} />
        <img src={require('./images/4.jpg')} />
        <img src={require('./images/5.jpg')} />
        <img src={require('./images/6.jpg')} />
        <img src={require('./images/7.jpg')} />
        <img src={require('./images/8.jpg')} />
        <img src={require('./images/9.jpg')} />
        <img src={require('./images/10.jpg')} />
        <img src={require('./images/11.jpg')} />
        <img src={require('./images/12.gif')} />
        <img src={require('./images/13.jpg')} />
        <img src={require('./images/14.jpg')} />
        <img src={require('./images/15.jpg')} />
        <img src={require('./images/16.jpg')} />
        <img src={require('./images/17.jpg')} />
        <img src={require('./images/18.png')} />
      </div>
    );
  }
}

export default App;
