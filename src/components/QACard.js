require('normalize.css')
require('styles/App.css')

import React from 'react/addons'
import QuestionText from './QuestionText'
import OptionList from './OptionList'

let leftImage = require('../images/left.png')
let rightImage = require('../images/right.png')
let upImage = require('../images/up.png')
let downImage = require('../images/down.png')

//let leftUpImage = require('../images/left-up.png')
//let rightUpImage = require('../images/right-up.png')
let leftDownImage = require('../images/left-down.png')
let rightDownImage = require('../images/right-down.png')


let QACard = ({qa, optionClickHandler}) =>
  <div id="wrapper">
    <div class="row">
      <div id="leftUp"></div>
      <div id="up"></div>
      <div id="rightUp"></div>
    </div>
    <div class="row">
      <div id="left"></div>
      <div id="middle">
        <QuestionText text={qa.question} />
        <OptionList options={qa.options} optionClickHandler={optionClickHandler} />
      </div>
      <div id="right"></div>
    </div>
    <div class="row">
      <div id="leftDown"></div>
      <div id="down"></div>
      <div id="rightDown"></div>
    </div>
  </div>

export default QACard
