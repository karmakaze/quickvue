<template>
  <tr>
    <td align="right"><text-value :type="'link'" :value="[twitterUrl(), service.name]" :color="{color: '#304444'}"></text-value></td>
    <td align="center" :style="statusColor()"><text-value :type="'age'" :value="status.createdAt"></text-value></td>
    <td :style="statusColor()"><text-value :type="'link'" :value="[status.statusPageUrl, statusLine(status.status)]" :color="statusColor()"></text-value></td>
  </tr>
</template>

<script>
export default {
  props: ['service'],
  created () {
    this.load()
  },
  data () {
    return {
      status: {
        status: 'Checking...'
      }
    }
  },
  methods: {
    load () {
      var url = 'https://statuspages.me/services/' + this.service.id + '/checks/*/status'
      var self = this
      var xhr = new XMLHttpRequest()
      // if (authorization) {
      //   xhr.setRequestHeader('Authorization', authorization)
      //   url = url + '&_=' + Date.now()
      // }

      xhr.open('GET', url)
      xhr.onload = function() {
          if (xhr.status === 200 && xhr.responseText) {
            var data = JSON.parse(xhr.responseText)
            if (Array.isArray(data) && data.length) {
              self.status = data[0]
            } else {
              self.status = { status: '' }
            }
          } else {
            self.status = { status: '' }
          }
      }
      xhr.send()
    },
    twitterUrl() {
      return this.service.twitterHandle ? 'https://twitter.com/' + this.service.twitterHandle.replace(/^@+/, '') : ''
    },
    statusLine(s) {
      if (!s) {
        return '(see status page)'
      }
      var i = s.indexOf('\n')
      if (i >= 0) {
        s = s.substring(0, i)
      }
      return s.replace(/ +/, ' ')
    },
    statusColor () {
      if (this.status) {
        if (!this.status.status) {
          return { color: '#b0b0b0' }
        }
        if (this.status.status === 'Checking...') {
          return { color: '#808080' }
        }
      }
      var textColor = { 'color': '#e00000' }
      if (this.status) {
        if (this.status.state === 'OK') {
          textColor = { 'color': '#00a000' }
        } else if (this.status.state === 'WARN') {
          textColor = { 'color': '#f08000' }
        }
      }
      return textColor
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
ul {
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
