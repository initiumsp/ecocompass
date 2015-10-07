require('normalize.css')
require('styles/App.css')

import React from 'react/addons'

let ResultPage = ({score}) =>
  <div>
    Result: {score}
  </div>

export default ResultPage
