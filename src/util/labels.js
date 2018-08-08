function addLabel(storyId, label, statusHandler) {
  let url = 'http://localhost:3000/items/' + storyId + '/' + label
  let xhr = new XMLHttpRequest()
  xhr.open('PUT', url)
  xhr.onload = function () {
    statusHandler(xhr.status)
  }
  xhr.send()
}

function getLabels(storyId, labelsHandler) {
  let url = 'http://localhost:3000/items/' + storyId

  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.responseText) {
      let data = JSON.parse(xhr.responseText)
      if (data) {
        labelsHandler(Object.keys(data))
        return
      }
    }
    labelsHandler([])
  }
  xhr.send()
}

export {
  addLabel,
  getLabels
}
