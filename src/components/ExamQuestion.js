require('normalize.css')
require('styles/App.css')

import React from 'react'

let ExamQuestion = React.createClass({

  propTypes: {
    question: React.PropTypes.string,
    correctOption: React.PropTypes.string,
    options: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  getInitialState () {
    return {
      status: 'to-answer'
    }
  },

  handleOptionClick (event) {
    if (this.props.correctOption === event.target.textContent) {
      this.setState({
        status: 'correct'
      })
    } else {
      this.setState({
        status: 'wrong'
      })
    }
  },

  render () {
    let {question, options, correctOption} = this.props
    console.log(question, options)

    let notice
    let status = this.state.status

    if (status === 'to-answer') {
      notice = <div />
    } else if (status === 'correct') {
      notice = <div>Correct</div>
    } else if (status === 'wrong') {
      notice = <div>Wrong</div>
    }

    return <div>
      <div>{question}</div>
      <ul>
        {options.map(option =>
          <li key={option.optionText}
              onClick={this.handleOptionClick}>
            {option.optionText}
          </li>)}
      </ul>
      {notice}
    </div>
  }
})

export default ExamQuestion
