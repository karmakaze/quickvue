var shajs = require('sha.js')

const shards = {
}

function getShard(itemId) {
  console.log(`getting shard for item ${itemId}`)
  let shardKey
  if (Number.isInteger(itemId)) {
    let shard = (itemId % 1000).toString()
    shardKey = 'HN0-' + ('000'.substring(shard.length) + shard)
  } else {
    shardKey = 'HN0-' + itemId
  }

  let hash = shards[shardKey]
  if (!hash) {
    hash = shajs('sha256').update(shardKey).digest('hex')
    shards[shardKey] = hash
  }
  return hash
}

function addLabel(storyId, label, statusHandler) {
  let hash = getShard(storyId)

  let url = 'https://jsonstore.io/' + hash + '/items/' + storyId + '/labels/' + label
  let xhr = new XMLHttpRequest()
  xhr.open('PUT', url, 1)
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function () {
    statusHandler(xhr.status)
  }
  xhr.send()
}

function getLabels(storyId, labelsHandler) {
  let hash = getShard(storyId)

  let url = 'https://jsonstore.io/' + hash + '/items/' + storyId + '/labels'
  console.log(`getting labels for story ${storyId} shard url ${url}`)

  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.responseText) {
      let data = JSON.parse(xhr.responseText)
      if (data && data['result']) {
        labelsHandler(Object.keys(data['result']))
      } else {
        labelsHandler([])
      }
    } else {
      labelsHandler([])
    }
  }
  xhr.send()
}

export {
  addLabel,
  getLabels
}
