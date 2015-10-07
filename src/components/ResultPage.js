require('normalize.css')
require('styles/App.css')

import React from 'react'
import result_commments from '../sources/result_comments'
import final_notice from '../sources/final_notice'

let ResultPage = ({score}) => {
  let commentText

  for (let comment of result_commments) {
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
        <div>Result: {score}</div>
        <div>{commentText}</div>
        <div>{final_notice}</div>
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
