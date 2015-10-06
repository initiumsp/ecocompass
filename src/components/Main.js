require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import QuestionText from './QuestionText';

let AppComponent = React.createClass({
  render: () => (
    <div>
      <QuestionText text="Hello" />
    </div>
  )
});

AppComponent.defaultProps = {
};

export default AppComponent;
