<template>
  <div style="width: 100%">
    <div class="services" style="width: 100%">
      <template v-for="service of services">
        <service-card :service="service" :key="service.id"></service-card>
      </template>
    </div>
    <div>
      <service-add></service-add>
    </div>
  </div>
</template>

<script>
const isLocalHost = ['localhost', '127.0.0.1', '::1'].includes(location.hostname)
function debug (line) {
  if (isLocalHost) {
    if (typeof line === 'function') {
      line = line()
    }
    console.log(line)
  }
}

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
    load () {
      this.loadGithub(() => {})
    },
    selected (item) {
      this.selecteditem = item
    },
    loadGithub (callback) {
      if (this.search_source) {
        this.search_source.cancel('cancel search due to newer request')
        this.search_source = null
      }
      this.search_source = this.$axios.CancelToken.source()

      var url = 'http://statuspages.me:8880/services'
      var headers = {}
      // if (authorization) {
      //   headers = { 'Authorization': authorization }
      //   url = url + '&_=' + Date.now()
      // }

      this.$axios.get(url, { headers: headers,
                             cancelToken: this.search_source.token })
                 .then(response => {
                    this.services = response.data
                    debug('got services response body: ' + JSON.stringify(this.services))
                    callback()
                  })
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
