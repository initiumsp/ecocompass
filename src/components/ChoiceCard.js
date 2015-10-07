require('normalize.css')
require('styles/App.css')

import React from 'react'
import QuestionText from './QuestionText'
import OptionList from './OptionList'

let ChoiceCard = ({qa, optionClickHandler}) =>
  <div id='wrapper'>
      <div id='leftUp'></div>
      <div id='up'></div>
      <div id='rightUp'></div>
      <div id='left'></div>
      <div id='middle'>
        <QuestionText text={qa.question} />
        <OptionList options={qa.options} optionClickHandler={optionClickHandler} />
      </div>
      <div id='right'></div>
      <div id='leftDown'></div>
      <div id='down'></div>
      <div id='rightDown'></div>
  </div>

export default ChoiceCard
