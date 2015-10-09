/**
 * Main component of the quiz.
 * This component is stateful.
 */

require('normalize.css')
require('styles/App.css')

import React from 'react'
import Cover from './Cover'
import ChoiceCard from './ChoiceCard'
import RangeCard from './RangeCard'
import ResultPage from './ResultPage'
import createTracker from './Tracker'
import app_meta from '../sources/meta_data'

let AppComponent = React.createClass({

  tracker: createTracker('ecocompass'),

  propTypes: {
    survey: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  componentWillMount () {
    this.tracker.init()
    this.tracker.post('render', '')
    this.tracker.post('userAgent', window.navigator.userAgent)
    this.tracker.post('url', window.location.href)
    this.tracker.post('referrer', window.document.referrer)
  },

  getInitialState: () => ({
    stage: 'cover',
    totalScore: 0,
    questionSerial: 0
  }),

  /**
   * The global handler for option clicks
   * - increment currentSerial in state to move to the next question
   * - adds the score of the option to the totalScore counter
   * @param event - clickEvent
   */
  handleOptionClick (event) {
    let currentSerial = this.state.questionSerial
    let totalQuestionCount = this.props.survey.length
    let nextStage = 'qa'

    if (currentSerial + 1 === totalQuestionCount) {
      nextStage = 'result'
    }

    let optionScore = event.target.getAttribute('data-score')

    let optionChosen = event.target.textContent
    if (typeof optionChosen === 'undefined') {
      optionChosen = event.target.innerHTML
    }

    this.tracker.post('question_' + this.props.survey[currentSerial].question, 'option_' + optionChosen)

    this.setState({
      questionSerial: this.state.questionSerial + 1,
      totalScore: this.state.totalScore + Number(optionScore),
      stage: nextStage
    })
  },

  /**
   * The global handler of range sliders
   * - post the value to backend
   * @param event - the onChange event
   */
  handleRangeSlide (event) {
    let currentSerial = this.state.questionSerial
    this.tracker.post('question_' + this.props.survey[currentSerial].question, 'value_' + event.target.value)
  },

  /**
   * The handler for "click" event in the RangeCard page
   * - move to next question
   */
  handleNextQuestButtonClick () {
    this.tracker.post('next_button_clicked', '')
    this.setState({
      questionSerial: this.state.questionSerial + 1
      // We might need totalScore calculation here in the future
    })
  },

  /**
   * Starts the QA section.
   */
  startQASection () {
    this.tracker.post('QA_section_started', '')
    this.setState({
      stage: 'qa'
    })
  },

  /**
   * Renders the main app component
   * it first checks the stage:
   * - if the app is at cover stage it renders Cover;
   * - if the app is at qa stage, it further checks the type of the next qa,
   *   and renders the next card accordingly
   * - if the app is at result stage, it renders ResultPage
   * @returns {XML}
   */
  render () {
    if (this.state.stage === 'cover') {
      return <Cover coverClickHandler={this.startQASection} />
    } else if (this.state.stage === 'qa') {
      let serial = this.state.questionSerial
      let qa = this.props['survey'][serial]

      if (qa.optionType === 'multipleChoice') {
        return <ChoiceCard qa={qa}
                           optionClickHandler={this.handleOptionClick}
                           questionSerial={this.state.questionSerial}
                           questionTotalCount={this.props.survey.length} />
      } else if (qa.optionType === 'slider') {
        return <RangeCard text={qa.question}
                          min={qa.optionMin}
                          max={qa.optionMax}
                          questionSerial={this.state.questionSerial}
                          questionTotalCount={this.props.survey.length}
                          rangeSlideHandler={this.handleRangeSlide}
                          nextQuestionButtonClickHandler={this.handleNextQuestButtonClick} />
      }
    } else {
      return <ResultPage score={this.state.totalScore}
                         scoreNormalize={(score) => score / app_meta.maxTotalScore}
                         tracker={this.tracker} />
    }
  }
})

export default AppComponent
