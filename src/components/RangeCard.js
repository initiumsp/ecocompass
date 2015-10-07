require('normalize.css')
require('styles/App.css')

import React from 'react'

let RangeCard = React.createClass({

  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    text: React.PropTypes.string,
    defaultValue: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      defaulValue: 50
    }
  },

  getInitialState: function () {
    return {
      value: this.props.defaultValue
    }
  },

  updateDisplayedValue: function (event) {
    console.log(event.target.value)
    this.setState({
      value: event.target
    })
  },

  render: function () {
    let {min, max, text} = this.props

    return (
      <div>
        <div>{text}</div>
        <span>{min}</span>
        <input type='range'
               min={min} max={max}
               onChange={this.updateDisplayedValue} />
        <span>{max}</span>
      </div>
    )
  }
})

export default RangeCard
