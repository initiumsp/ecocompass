/**
 * A compoent with an array of social sharing buttons
 */

require('normalize.css')
require('styles/App.css')

import React from 'react'
import app_meta from '../sources/meta_data'
import qrcode from './qrcode'

let wechatQrImage = require('../images/fallbackQR.gif')
let wechatIcon = require('../images/wechat.png')
let weiboIcon = require('../images/weibo.png')
let facebookIcon = require('../images/FB.png')
let twitterIcon = require('../images/twitter.png')

/**
 * Return the link to share a URL in a mansion specified by config
 * @param {object} config - an object containing the configurations of the sharing
 * @returns {string}
 */

function getShareUrl (config) {
  var platform = config.platform
  var facebookAppId = config.facebookAppId
  var targetUrl = config.targetUrl
  var title = config.title
  var description = config.description
  var imageUrl = config.imageUrl

  targetUrl = targetUrl ? encodeURIComponent(targetUrl) : ''
  imageUrl = imageUrl ? encodeURIComponent(imageUrl) : ''

  var shareUrl

  if (platform === 'facebook') {
    shareUrl = 'https://www.facebook.com/dialog/feed?' +
      'app_id=' + facebookAppId +
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
    tracker: React.PropTypes.object,
    resetHandler: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      displayWechatQrImage: 'none'
    }
  },

  handleShareButtonClick: function (event) {
    var chosenPlatform = event.target.dataset.platform
    var shareTitle, shareDescription

    if (chosenPlatform === 'facebook') {
      shareTitle = app_meta.appTitle
      shareDescription = app_meta.facebookShareDescription
    } else if (chosenPlatform === 'sinaweibo') {
      shareTitle = app_meta.sinaweiboShareTitle
    } else if (chosenPlatform === 'twitter') {
      shareTitle = app_meta.twitterShareTitle
    }

    var shareUrl = getShareUrl({
      facebookAppId: app_meta.facebookAppId,
      title: shareTitle,
      description: shareDescription,
      platform: chosenPlatform,
      targetUrl: window.location.href
    })
    this.props.tracker.post('share_button_click', chosenPlatform)
    window.open(shareUrl)
  },

  handleWechatShareButtonClick: function () {
    var display
    if (this.state.displayWechatQrImage === 'none') {
      display = 'block'
    } else {
      display = 'none'
    }

    this.props.tracker.post('share_button_click', 'wechat')

    this.setState({
      displayWechatQrImage: display
    })
  },

  getQrcodeImgSrc: function () {

    let url = window.location.href
    let urlLen = url.length

    // Heuristic determination of how detailed the QR code should be
    let qrTypeNumber = Math.floor((urlLen - 40) / 20) + 4
    console.log('qrTypeNumber=', qrTypeNumber)
    const qrErrorCorrectLevel = 'M'

    try {
      let qr = qrcode(qrTypeNumber, qrErrorCorrectLevel)
      qr.addData(url)
      qr.make()
      let imgString = qr.createImgTag()
      let re = /src="([^"]*)"/i
      return re.exec(imgString)[1]
    } catch (error) {
      // Fallback if anything went wrong
      console.log(error)
      return wechatQrImage
    }
  },

  render: function () {
    return (
      <div id='socialBar'>
        <button className='btnPlayAgain' onClick={this.props.resetHandler}>再玩一次!</button>
        <button data-platform='facebook'
                onClick={this.handleShareButtonClick}>
          <image src={facebookIcon}
                 data-platform='facebook' />
        </button>
        <button data-platform='twitter'
                onClick={this.handleShareButtonClick}>
          <image src={twitterIcon}
                 data-platform='twitter' />
        </button>
        <button data-platform='sinaweibo'
                onClick={this.handleShareButtonClick}>
          <image src={weiboIcon}
                 data-platform='sinaweibo' />
        </button>
        <button onClick={this.handleWechatShareButtonClick}>
          <image src={wechatIcon}/>
        </button>
        <div id='code' style={{display: this.state.displayWechatQrImage}}>
          <image src={this.getQrcodeImgSrc()} />
        </div>
      </div>
    )
  }

})

export default SocialBar
