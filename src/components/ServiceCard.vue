<template>
  <tr>
    <td>{{ service.name.trim().replace(/ +/g, '&nbsp;') }}</td>
    <td :style="Object.assign({'min-width': '160px'}, statusColor())">{{ status.name }} {{ statusLine(status.status) }}</td>
    <td :style="statusColor()"><text-value :type="'age'" :value="status.createdAt"></text-value></td>
    <td align="center"><text-value :type="'twitter'" :value="service.twitterHandle"></text-value></td>
    <td><text-value :type="'link'" :value="status.statusPageUrl"></text-value></td>
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
    twitterLink (twitterHandle) {
      if (twitterHandle) {
        return '<>' + twitterHandle ? 'https://twitter.com/' + twitterHandle : '' + '</a>'
      } else {
        return ''
      }
    },
    item (option, value) {
      // console.log('item(option=' + option + ', value=' + JSON.stringify(value) + ')')
      return value
    },
    selected (item) {
      this.selecteditem = item
    },
    load () {
      var url = 'https://api.statuspages.me/services/' + this.service.id + '/checks/*/status'
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
    statusLine(s) {
      if (!s) {
        return s
      }
      var i = s.indexOf('\n')
      if (i >= 0) {
        s = s.substring(0, i)
      }
      return s.replace(/ +/, ' ')
    },
    statusColor () {
      var textColor = { 'color': '#a00000' }
      if (this.status && this.status.status) {
        if (this.status.status.startsWith('All Systems Operational') || this.status.status.startsWith('All services available') || this.status.status.startsWith('Server is up.')) {
          textColor = { 'color': '#00c000' }
        }
      }
      return textColor
    },
    style () {
      var style = {
        'border-style': 'solid',
        'color': '#800080'
      }
      return style
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #0000e0;
}
a:visited {
  color: #8000e0;
}
ul {
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
