require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import QuestionText from './QuestionText';

let AppComponent = React.createClass({

  getInitialState: () => ({
    questionSerial: 0
  }),

  render: function() {

    let serial = this.state.questionSerial;
    let qa = this.props['survey'][serial];

    return (
      <div>
        <QuestionText text={qa.question} />
      </div>
    )
  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
