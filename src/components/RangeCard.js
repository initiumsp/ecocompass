require('normalize.css')
require('styles/App.css')

import React from 'react'

let RangeCard = React.createClass({

  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    text: React.PropTypes.string,
    currentValue: React.PropTypes.number,
    rangeSlideHandler: React.PropTypes.func,
    nextQuestionButtonClickHandler: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      currentValue: 50
    }
  },

  getInitialState: function () {
    return {
      value: this.props.currentValue
    }
  },

  rangeSlideLocalHandler: function (event) {
    this.setState({
      currentValue: event.target.value
    })
    this.props.rangeSlideHandler(event)
  },

  render: function () {
    let {min, max, text, nextQuestionButtonClickHandler} = this.props

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
          <div>{text}</div>
          <div>{this.state.currentValue}</div>
          <span>{min}</span>
          <input type='range'
                 min={min} max={max} value={this.state.currentValue}
                 onChange={this.rangeSlideLocalHandler} />
          <span>{max}</span>
          <button onClick={nextQuestionButtonClickHandler}>Next</button>
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
