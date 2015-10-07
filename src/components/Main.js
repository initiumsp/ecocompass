require('normalize.css')
require('styles/App.css')

import React from 'react'
import Cover from './Cover'
import ChoiceCard from './ChoiceCard'
import RangeCard from './RangeCard'
import ResultPage from './ResultPage'

let AppComponent = React.createClass({

  propTypes: {
    survey: React.PropTypes.arrayOf(React.PropTypes.object)
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
        return <ChoiceCard qa={qa} optionClickHandler={this.handleOptionClick} />
      } else {
        return <RangeCard text={qa.question} min={qa.optionMin} max={qa.optionMax} />
      }
    } else {
      return <ResultPage score={this.state.totalScore} />
    }
  }
})

export default AppComponent
