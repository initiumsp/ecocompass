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

  componentWillMount: function () {
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

  handleOptionClick: function (event) {
    let currentSerial = this.state.questionSerial
    let totalQuestionCount = this.props.survey.length
    let nextStage = 'qa'

    if (currentSerial + 1 === totalQuestionCount) {
      nextStage = 'result'
    }

    let optionScore = event.target.dataset.score

    this.tracker.post('question_' + this.props.survey[currentSerial].question, 'option_' + event.target.textContent)

    this.setState({
      questionSerial: this.state.questionSerial + 1,
      totalScore: this.state.totalScore + Number(optionScore),
      stage: nextStage
    })
  },

  handleRangeSlide: function (event) {
    let currentSerial = this.state.questionSerial
    this.tracker.post('question_' + this.props.survey[currentSerial].question, 'value_' + event.target.value)
  },

  handleNextQuestButtonClick: function (event) {
    this.tracker.post('next_button_clicked', '')
    this.setState({
      questionSerial: this.state.questionSerial + 1
      // We might need totalScore calculation here in the future
    })
  },

  startQASection: function () {
    this.setState({
      stage: 'qa'
    })
  },

  render: function () {
    if (this.state.stage === 'cover') {
      return <Cover coverClickHandler={this.startQASection} />
    } else if (this.state.stage === 'qa') {
      let serial = this.state.questionSerial
      let qa = this.props['survey'][serial]
      if (qa.optionType === 'multipleChoice') {
        return <ChoiceCard qa={qa}
                           optionClickHandler={this.handleOptionClick} />
      } else if (qa.optionType === 'slider') {
        return <RangeCard text={qa.question}
                          min={qa.optionMin}
                          max={qa.optionMax}
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
