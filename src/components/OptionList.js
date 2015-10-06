require('normalize.css');
require('styles/App.css');

import React from 'react/addons';

let OptionList = ({options, optionClickHandler}) => <ul>
    {options.map(option => <li key={option.optionText} onClick={optionClickHandler}>{option.optionText}</li>)}
  </ul>

export default OptionList;
