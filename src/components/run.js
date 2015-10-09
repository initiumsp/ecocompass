/**
 * Entry point of JavaScript execution.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main'
import survey from './../sources/survey_data'

// Render the main component into the DOM
ReactDOM.render(<App survey={survey} />, document.getElementById('app'))

/* DEBUG code for result page.
*  To debug result page, uncommnet the two lines below and comment the line above that calls ReactDOM.
* */
//import ResultPage from './ResultPage'
//ReactDOM.render(<ResultPage score={-0.8} scoreNormalize={x => x} tracker={{}} />, document.getElementById('app'))
