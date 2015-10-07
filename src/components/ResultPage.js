require('normalize.css')
require('styles/App.css')

import React from 'react'

let ResultPage = ({score}) =>
  <div>
    Result: {score}
  </div>

export default ResultPage
