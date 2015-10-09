/**
 *  A component providing multiple-choice Q&A
 */

require('normalize.css')
require('styles/App.css')

import React from 'react'
import QuestionText from './QuestionText'
import OptionList from './OptionList'

/**
 * @param qa - the Q&A object, containing a question and a series of options
 * @param optionClickHandler - handler to trigger when an option is clicked / touched
 * @param {number} questionSerial - position of this question in the list of question
 * @param {number} questionTotalCount - total number of questions
 * @constructor
 */

let ChoiceCard = ({qa, optionClickHandler, questionSerial, questionTotalCount}) =>

  <div id='wrapper'>
      <div id='leftUp'></div>
      <div id='up'></div>
      <div id='rightUp'></div>
      <div id='left'></div>
      <div id='middle'>
        <QuestionText text={qa.question}
                      questionSerial={questionSerial}
                      questionTotalCount={questionTotalCount}/>
        <OptionList options={qa.options} optionClickHandler={optionClickHandler} />
      </div>
      <div id='right'></div>
      <div id='leftDown'></div>
      <div id='down'></div>
      <div id='rightDown'></div>
  </div>

export default ChoiceCard
