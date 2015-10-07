require('normalize.css')
require('styles/App.css')

import React from 'react'
import QuestionText from './QuestionText'
import OptionList from './OptionList'

let ChoiceCard = ({qa, optionClickHandler}) =>
  <div>
    <QuestionText text={qa.question} />
    <OptionList options={qa.options} optionClickHandler={optionClickHandler} />
  </div>

export default ChoiceCard
