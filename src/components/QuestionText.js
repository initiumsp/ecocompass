/**
 * Component displaying the question text
 */
require('normalize.css')
require('styles/App.css')

import React from 'react'

/**
 * A component to create a question text (and serial of the current question)
 * @param text - text of the question
 * @constructor
 */
let QuestionText = ({text}) =>
  <h3>{text}</h3>

export default QuestionText
