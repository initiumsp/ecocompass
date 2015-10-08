require('normalize.css')
require('styles/App.css')

let React = require('react')

let graphImage = require('../images/graph.png')
let pointerImage = require('../images/pointer.png')

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
      <div id="spinner">
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
