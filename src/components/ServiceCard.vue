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
      if (this.search_source) {
        this.search_source.cancel('cancel search due to newer request')
        this.search_source = null
      }
      this.search_source = this.$axios.CancelToken.source()

      var url = 'http://statuspages.me:8880/services/' + this.service.id + '/checks/*/status'
      var headers = {}
      // if (authorization) {
      //   headers = { 'Authorization': authorization }
      //   url = url + '&_=' + Date.now()
      // }

      var self = this
      this.$axios.get(url, { headers: headers })
                 .then(response => {
                    if (response && response.data && response.data.length) {
                      self.status = response.data[0]
                    } else {
                      self.status = { status: '' }
                    }
                  })
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
