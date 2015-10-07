import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main'
import survey from './../sources/data'

// Render the main component into the dom
ReactDOM.render(<App survey={survey} />, document.getElementById('app'))
