let createTracker = (targetLabel) => ({
  target: targetLabel,

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
    request.setRequestHeader('Content-Type', 'application/json charset=UTF-8')
    let jsonString = JSON.stringify(message)
    request.send(jsonString)
    console.log('Posting ' + jsonString)
  }
})

export default createTracker
