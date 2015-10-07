require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import Cover from './Cover';
import QACard from './QACard';
import ResultPage from './ResultPage';

let AppComponent = React.createClass({

  getInitialState: () => ({
    stage: 'cover',
    totalScore: 0,
    questionSerial: 0
  }),

  handleOptionClick: function(event) {

    let currentSerial = this.state.questionSerial;
    let totalQuestionCount = this.props.survey.length;
    let nextStage = 'qa';

    if (currentSerial + 1 === totalQuestionCount) {
      nextStage = 'result';
    }

    let optionScore = event.target.dataset.score;

    this.setState({
      questionSerial: this.state.questionSerial + 1,
      totalScore: this.state.totalScore + Number(optionScore),
      stage: nextStage
    });
  },

  startQuestion: function() {
    this.setState({
      stage: 'qa'
    });
  },

  render: function() {

    if (this.state.stage === 'cover') {
      return <Cover coverClickHandler={this.startQuestion} />

    } else if (this.state.stage === 'qa') {
      let serial = this.state.questionSerial;
      let qa = this.props['survey'][serial];
      return <QACard qa={qa} optionClickHandler={this.handleOptionClick} />

    } else {
      return <ResultPage score={this.state.totalScore} />
    }

  }
});

AppComponent.defaultProps = {
};

export default AppComponent;