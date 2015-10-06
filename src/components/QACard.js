require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import QuestionText from './QuestionText';
import OptionList from './OptionList';

let QACard = ({qa, optionClickHandler}) =>
  <div>
    <QuestionText text={qa.question} />
    <OptionList options={qa.options} optionClickHandler={optionClickHandler} />
  </div>

export default QACard;