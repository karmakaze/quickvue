<template>
  <tr>
    <td><input v-if="checked !== null" type="checkbox" :checked="checked" v-on:change="$emit('change', {serviceId: service.id, checked: $event.target.checked})"/></td>
    <td align="right"><text-value :type="'link'" :value="[twitterUrl(), serviceName()]" :color="{color: '#304444'}"></text-value></td>
    <td align="center" :style="statusColor()"><text-value :type="'age'" :value="since()"></text-value></td>
    <td :style="statusColor()"><text-value :type="'link'" :value="[status.statusPageUrl, statusLine()]" :color="statusColor()"></text-value></td>
  </tr>
</template>

<script>
export default {
  props: ['checked', 'service'],
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
    serviceName() {
      return window.innerWidth >= 420 ? this.service.name.replace(/ /g, '&nbsp;') : this.service.name
    },
    twitterUrl() {
      return this.service.twitterHandle ? 'https://twitter.com/' + this.service.twitterHandle.replace(/^@+/, '') : ''
    },
    since() {
      return this.state() ? this.status.createdAt : null
    },
    statusLine() {
      var state = this.state()
      if (!state) {
        if (this.status) {
          if (this.status.status === 'Checking...') {
            return this.status.status
          }
          if ((this.status.statusPageUrl || '').includes('twitter.com')) {
            return '(see Twitter for status)'
          }
        }
        return '(see status page)'
      }
      var status = this.status.status
      if (status) {
        status = status.trim()
      }
      if (!status) {
        return '(see status page for details)'
      }
      var i = status.indexOf('\n')
      if (i >= 0) {
        status = status.substring(0, i)
      }
      status = status.replace(/ +/, ' ').replace(/\x0B+/g, ', ')
      return status.length > 77 ? status.substring(0, 77) + '...' : status
    },
    statusColor () {
      var state = this.state()
      if (state === 'OK') {
        return {color: '#00a000'}
      } else if (state === 'WARN') {
        return {color: '#f08000'}
      } else if (state === 'DOWN') {
        return {color: '#e02020'}
      }
      return { color: '#909090' }
    },
    state() {
      if (!this.status || !this.status.statusDataUrl || !this.status.state) {
        return ''
      }
      return this.status.state
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
