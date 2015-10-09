/**
 * A component providing a slider for the user to drag and select a value
 */

require('normalize.css')
require('styles/App.css')

import React from 'react'

let RangeCard = React.createClass({

  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    text: React.PropTypes.string,
    questionSerial: React.PropTypes.number,
    questionTotalCount: React.PropTypes.number,
    currentValue: React.PropTypes.number,
    rangeSlideHandler: React.PropTypes.func,
    nextQuestionButtonClickHandler: React.PropTypes.func
  },

  getDefaultProps () {
    return {
      currentValue: 50
    }
  },

  getInitialState () {
    return {
      currentValue: this.props.currentValue
    }
  },

  rangeSlideLocalHandler (event) {
    this.setState({
      currentValue: event.target.value
    })
    this.props.rangeSlideHandler(event)
  },

  render () {
    let {min, max, text, questionSerial, questionTotalCount, nextQuestionButtonClickHandler} = this.props

    return (
    <div id='wrapper'>
      <div className='row' id='first'>
        <div id='leftUp'></div>
        <div id='up'></div>
        <div id='rightUp'></div>
      </div>
      <div className='row' id='second'>
        <div id='left'></div>
        <div id='middle'>
          <h3>{(questionSerial + 1) + '/' + questionTotalCount} {text}</h3>
          <div id='currentValue'>{this.state.currentValue}</div>
          <span>{min}</span>
          <input id='slider'
                 type='range'
                 min={min} max={max} value={this.state.currentValue}
                 onChange={this.rangeSlideLocalHandler} />
          <span>{max}</span>
          <button id='next' onClick={nextQuestionButtonClickHandler}>下一題</button>
        </div>
        <div id='right'></div>
      </div>
      <div className='row' id='third'>
        <div id='leftDown'></div>
        <div id='down'></div>
        <div id='rightDown'></div>
      </div>
    </div>
    )
  }
})

export default RangeCard
