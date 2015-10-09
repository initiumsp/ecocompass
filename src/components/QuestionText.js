/**
 * Component displaying the question text
 */
require('normalize.css')
require('styles/App.css')

import React from 'react'

/**
 * A compoent to create a question text (and serial of the current question)
 * @param text - text of the question
 * @param questionSerial - position of the current question in the question list, 0-based
 * @param questionTotalCount - total number of questions, 1-based
 * @constructor
 */
let QuestionText = ({text, questionSerial, questionTotalCount}) =>
  <h3>{(questionSerial + 1) + '/' + questionTotalCount} {text}</h3>

export default QuestionText
