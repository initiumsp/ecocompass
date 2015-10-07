require('normalize.css')
require('styles/App.css')

import React from 'react'

function getShareUrl (config) {
  var platform = config.platform
  var appId = config.appId
  var targetUrl = config.targetUrl
  var title = config.title
  var description = config.description
  var imageUrl = config.imageUrl

  targetUrl = encodeURIComponent(targetUrl)
  imageUrl = encodeURIComponent(imageUrl)

  if (platform === 'facebook') {
    return 'https://www.facebook.com/dialog/feed?' +
      'app_id=' + appId +
      '&link=' + targetUrl +
      '&redirect_uri=' + targetUrl +
      '&picture=' + imageUrl +
      '&name=' + title +
      '&description=' + description
  } else if (platform === 'sinaweibo') {
    return 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + targetUrl
  } else if (platform === 'twitter') {
    return 'https://twitter.com/share?url=' + targetUrl + '&text=' + title
  }
}

let SocialBar = React.createClass({


  render: function () {
    return (
      <div>Share</div>
    )
  }

})

export default SocialBar
