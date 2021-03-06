require('normalize.css')
require('styles/App.css')

import React from 'react'
import result_comments from '../sources/result_comments'
import final_notice from '../sources/final_notice'
import SocialBar from './SocialBar'
import Spinner from './Spinner'
let logoImage = require('../images/initiumLogo.png')

/**
 * @param score - the final score, un-normalized
 * @param {func} scoreNormalize - a function to normalize the score
 * @param tracker - the event tracker (for sending statistics)
 * @param resetHandler - function to call when the user clicks "play again" button
 * @returns {XML}
 * @constructor
 */

let ResultPage = ({score, scoreNormalize, tracker, resetHandler}) => {
  let commentText

  for (let comment of result_comments) {
    if ((score >= comment.minScore) && (score <= comment.maxScore)) {
      commentText = comment.commentText
    }
  }

  return (
  <div id='wrapper'>
      <div id='leftUp'></div>
      <div id='up'></div>
      <div id='rightUp'></div>
      <div id='left'></div>
      <div id='middle'>
        <img className='initiumLogo' src={logoImage} />
        <Spinner index={scoreNormalize(score)} />
        <div id='commentText'>
          {commentText}
        </div>
        <SocialBar tracker={tracker} resetHandler={resetHandler} />
      </div>
      <div id='right'></div>
      <div id='leftDown'></div>
      <div id='down'></div>
      <div id='rightDown'></div>
    <div id='finalNotice'>{final_notice}</div>
  </div>
  )
}

export default ResultPage
