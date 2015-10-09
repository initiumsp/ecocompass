require('normalize.css')
require('styles/App.css')

import React from 'react'

let QuestionText = ({text, questionSerial, questionTotalCount}) =>
  <h3>{(questionSerial + 1) + '/' + questionTotalCount} {text}</h3>

export default QuestionText
