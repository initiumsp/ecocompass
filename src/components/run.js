import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main'
import survey from './../sources/survey_data'

// Render the main component into the dom
ReactDOM.render(<App survey={survey} />, document.getElementById('app'))

// DEBUG
//import ResultPage from './ResultPage'
//ReactDOM.render(<ResultPage score={-0.8} scoreNormalize={x => x} tracker={{}} />, document.getElementById('app'))
