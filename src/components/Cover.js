/**
 * Cover page of the quiz
 */

require('normalize.css')
require('styles/App.css')

import React from 'react'

let initialgraphImage = require('../images/graph_begin.png')
let logoImage = require('../images/initiumLogo.png')

/**
 * The cover page component
 * @param coverClickHandler - callback for clicking; usually used to switch to the next page
 * @constructor
 */
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
        <img className='initiumLogo' src={logoImage} />
        <image id='graphInitial' src={initialgraphImage}/>
        <div id='coverText'>測測你在經濟上是左翼還是右翼？</div>
        <div id='start'>開始</div>
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
