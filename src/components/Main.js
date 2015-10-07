require('normalize.css')
require('styles/App.css')

import React from 'react'
import Cover from './Cover'
import ChoiceCard from './ChoiceCard'
import RangeCard from './RangeCard'
import ResultPage from './ResultPage'
import createTracker from './Tracker'

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

    this.setState({
      questionSerial: this.state.questionSerial + 1,
      totalScore: this.state.totalScore + Number(optionScore),
      stage: nextStage
    })
  },

  startQuestion: function () {
    this.setState({
      stage: 'qa'
    })
  },

  render: function () {
    if (this.state.stage === 'cover') {
      return <Cover coverClickHandler={this.startQuestion} />
    } else if (this.state.stage === 'qa') {
      let serial = this.state.questionSerial
      let qa = this.props['survey'][serial]
      let type = qa.optionType
      if (type === 'multipleChoice') {
        return <ChoiceCard qa={qa}
                           optionClickHandler={this.handleOptionClick}
                           tracker={this.tracker} />
      } else {
        return <RangeCard text={qa.question}
                          min={qa.optionMin}
                          max={qa.optionMax}
                          tracker={this.tracker} />
      }
    } else {
      return <ResultPage score={this.state.totalScore}
                         tracker={this.tracker} />
    }
  }
})

export default AppComponent
