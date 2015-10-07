require('normalize.css')
require('styles/App.css')

import React from 'react'

let OptionList = ({options, optionClickHandler}) => <ul>
    {options.map(option => <li key={option.optionText}
                               onClick={optionClickHandler}
                               data-score={option.optionScore}>
                              {option.optionText}
                           </li>)
    }
  </ul>

export default OptionList
