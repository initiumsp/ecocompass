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
    <div>
      <div>Result: {score}</div>
      <div>{commentText}</div>
      <div>{final_notice}</div>
    </div>
  )
}

export default ResultPage
