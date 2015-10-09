/**
 * A semi-circle with a pointer that span to the score input
 */

require('normalize.css')
require('styles/App.css')

let React = require('react')

let graphImage = require('../images/graph.png')
let pointerImage = require('../images/pointer.png')

/**
 * index should be in the range of [-1, 1]
 * index of -1 is reflected by a horizontal pointer pointing left; likewise,
 * index of 1 means a horizontal pointer pointing right;
 * index of 0 means a vertical pointer.
 */
let Spinner = React.createClass({
  propTypes: {
    index: React.PropTypes.number
  },

  componentDidMount () {
    let rotateDegree = this.props.index * 90
    setTimeout(function () {
      this.refs.pointer.style.transform = `rotate(${rotateDegree}deg)`
      this.refs.pointer.style.webkitTransform = `rotate(${rotateDegree}deg)`
    }.bind(this), 0)
  },

  render () {
    return (
      <div id='spinner'>
        <image id='graph' src={graphImage}/>
        <image id='pointer'
               ref='pointer'
               src={pointerImage}
               className='rotate' />
      </div>
    )
  }

})

export default Spinner
