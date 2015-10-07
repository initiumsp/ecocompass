require('normalize.css')
require('styles/App.css')

import React from 'react'

let initialgraphImage = require('../images/initialgraph.png')

let Cover = ({coverClickHandler}) =>
  <div id='wrapper' onClick={coverClickHandler}>
    <div className='row' id='first'>
      <div id='leftUp'></div>
      <div id='up'></div>
      <div id='rightUp'></div>
    </div>
    <div className='row' id='second'>
      <div id='left'></div>
      <div id='middle'>
        <image id='graph' src={initialgraphImage}/>
        測測你是左派還是右派
      </div>
      <div id='right'></div>
    </div>
    <div className='row' id='third'>
      <div id='leftDown'></div>
      <div id='down'></div>
      <div id='rightDown'></div>
    </div>
  </div>

export default Cover
