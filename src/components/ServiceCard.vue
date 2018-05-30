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
      var self = this
      var url = 'https://statuspages.me/services/' + this.service.id + '/checks/*/status'
      var xhr = new XMLHttpRequest()
      // if (authorization) {
      //   xhr.setRequestHeader('Authorization', authorization)
      //   url = url + '&_=' + Date.now()
      // }

      xhr.open('GET', url, true)
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
        if (this.status && this.status.statusPageUrl && this.status.statusPageUrl.includes('twitter.com')) {
          return '(see Twitter page)'
        } else {
          return '(see status page)'
        }
      }
      var i = s.indexOf('\n')
      if (i >= 0) {
        s = s.substring(0, i)
      }
      s = s.replace(/ +/, ' ').replace(/\x0B+/g, ', ')
      return s.length > 77 ? s.substring(0, 77) + '...' : s
    },
    statusColor () {
      if (this.status) {
        if (this.status.state === 'OK') {
          return { 'color': '#00a000' }
        } else if (this.status.state === 'WARN') {
          return { 'color': '#f08000' }
        }

        if (!this.status.status) {
          return { color: '#b0b0b0' }
        }
        if (this.status.status === 'Checking...') {
          return { color: '#808080' }
        }
      }
      return { 'color': '#e00000' }
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
