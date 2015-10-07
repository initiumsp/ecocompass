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

  targetUrl = targetUrl ? encodeURIComponent(targetUrl) : ''
  imageUrl = imageUrl ? encodeURIComponent(imageUrl) : ''

  var shareUrl

  if (platform === 'facebook') {
    shareUrl = 'https://www.facebook.com/dialog/feed?' +
      'app_id=' + appId +
      '&link=' + targetUrl +
      '&redirect_uri=' + targetUrl

    if (imageUrl) {
      shareUrl += '&picture=' + imageUrl
    }

    if (title) {
      shareUrl += '&name=' + title
    }

    if (description) {
      shareUrl += '&description=' + description
    }

    return shareUrl
  } else if (platform === 'sinaweibo') {
    return 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + targetUrl
  } else if (platform === 'twitter') {
    return 'https://twitter.com/share?url=' + targetUrl + '&text=' + title
  }
}

let SocialBar = React.createClass({

  propTypes: {
    tracker: React.PropTypes.object
  },

  handleShareButtonClick: function (event) {
    var chosenPlatform = event.target.dataset.platform
    var shareUrl = getShareUrl({
      platform: chosenPlatform,
      targetUrl: window.location.origin
    })
    window.open(shareUrl)
  },

  render: function () {
    return (
      <div>
        <div data-platform='facebook'
             onClick={this.handleShareButtonClick}>
          分享到Facebook
        </div>
        <div data-platform='twitter'
             onClick={this.handleShareButtonClick}>
          分享到Twitter
        </div>
        <div data-platform='sinaweibo'
             onClick={this.handleShareButtonClick}>
          分享到新浪微博
        </div>
      </div>
    )
  }

})

export default SocialBar
