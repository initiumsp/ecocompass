/**
 * A tracker for customized event tracking
 */

/**
 * creates a tracker customized for Initium Lab backend
 * @param appLabel - the identifier of the app, to be sent to backend
 */
let createInitiumLabTracker = (appLabel) => ({
  target: appLabel,

  /**
   *  Init() tries to fetch the UUID from localStorage, if none is found,
   *  it generates a UUID for user identification, so that
   *  if a user play the quiz twice, we'll know.
   */
  init () {
    let localStorage = window.localStorage

    function getUUID () {
      let d = new Date().getTime()
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
    }

    if (localStorage.uuid === undefined) {
      let uuid = getUUID()
      this.uuid = uuid
      try {
        localStorage.uuid = uuid
      } catch (error) {
        this.post('localStorage_error', '')
      }
    } else {
      this.uuid = localStorage.uuid
    }
  },

  /**
   * Post message, organized in key-value pairs to the backend
   * @param {string} keyInput  - the key of the message
   * @param {string} valueInput - the value of the message
   */

  post (keyInput, valueInput) {
    let XMLHttpRequest = window.XMLHttpRequest

    let url = `http://s.init.im:8081/remember/${this.target}/`
    let request = new XMLHttpRequest()
    let message = {
      username: this.uuid,
      key: keyInput,
      value: valueInput,
      raw: '',
      datetime: Date.now()
    }

    request.open('POST', url, true)
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    let jsonString = JSON.stringify(message)
    request.send(jsonString)
    console.log('Posting ' + jsonString)
  }
})

export default createInitiumLabTracker
