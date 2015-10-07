require('normalize.css')
require('styles/App.css')

import React from 'react'
import result_comments from '../sources/result_comments'
import final_notice from '../sources/final_notice'
import SocialBar from './SocialBar'

let graphImage = require('../images/graph.png')
let pointerImage = require('../images/pointer.png')

let ResultPage = ({score, tracker}) => {
  let commentText

  for (let comment of result_comments) {
    if ((score >= comment.minScore) && (score <= comment.maxScore)) {
      commentText = comment.commentText
    }
  }

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
        <div id='result'>Result: {score}</div>
        <div>{commentText}</div>
        <div>{final_notice}</div>
        <div>
          <image id='graph' src={graphImage}/>
          <image id='pointer' src={pointerImage}/>
        </div>
        <SocialBar tracker={tracker} />

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

export default ResultPage
