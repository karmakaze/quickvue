<template>
  <div style="width: 100%">
    <div><h2>&nbsp;&nbsp;&nbsp;{{ title() }}</h2></div>
    <div class="services" style="width: 100%">
      <table>
        <tr>
          <th align="right">Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
          <th align="center">Since</th>
          <th align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current status</th>
        </tr>
        <template v-for="service of services">
          <service-card :service="service" :key="service.id"></service-card>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.load()
  },
  data () {
    return {
      services: []
    }
  },
  watch: {
    '$route' () {
      this.load()
    }
  },
  methods: {
    selected (item) {
      this.selecteditem = item
    },
    title () {
      return window.location.hostname.toLowerCase().endsWith('s.me') ? "StatusPages.me" : "StatusPage.me"
    },
    load () {
      var self = this
      var xhr = new XMLHttpRequest()
      var url = 'https://statuspages.me/services'
      // if (authorization) {
      //   xhr.setRequestHeader('Authorization', authorization)
      //   url = url + '&_=' + Date.now()
      // }
      xhr.open('GET', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          var data = JSON.parse(xhr.responseText)
          if (Array.isArray(data) && data.length) {
            var services = data
            services.sort((a, b) => {
              var aName = a.name.toLowerCase()
              var bName = b.name.toLowerCase()
              if (aName < bName) return -1
              if (aName > bName) return 1
              return 0
            })
            self.services = services
          }
        }
      }
      xhr.send()
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
</style>
