require('normalize.css')
require('styles/App.css')

let React = require('react')

let graphImage = require('../images/graph.png')
let pointerImage = require('../images/pointer.png')

let Spinner = React.createClass({
  propTypes: {
    index: React.PropTypes.number
  },

  getInitialState () {
    return {pointerStyle: {
      transform: 'rotate: 0deg'
    }}
  },

  componentDidMount () {
    let rotateDegree = this.props.index * 90
    setTimeout(function () {
      this.refs.pointer.style.transform = `rotate(${rotateDegree}deg`
    }.bind(this), 0)
  },

  render () {

    console.log(this.state.pointerStyle)
    return (
      <div>
        <image id='graph' src={graphImage}/>
        <image id='pointer'
               ref='pointer'
               src={pointerImage}
               className='rotate'
               style={this.state.pointerStyle}/>
      </div>
    )
  }

})

export default Spinner
