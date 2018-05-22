<template>
  <tr>
    <td>{{ service.name.trim().replace(/ +/g, '&nbsp;') }}</td>
    <td style="min-width: 160px">{{ status.name }} {{ firstLine(status.status) }}</td>
    <td><text-value :type="'age'" :value="status.createdAt"></text-value></td>
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
    firstLine(s) {
      if (!s) {
        return s
      }
      var i = s.indexOf('\n')
      return i === -1 ? s : s.substring(0, i)
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
