require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import Cover from './Cover';
import QACard from './QACard';

let AppComponent = React.createClass({

  getInitialState: () => ({
    stage: 'cover',
    questionSerial: 0
  }),

  handleOptionClick: function() {
    this.setState({
      questionSerial: this.state.questionSerial + 1
    });
  },

  startQuestion: function() {
    console.log('click');
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
      return <Result />
    }

  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
