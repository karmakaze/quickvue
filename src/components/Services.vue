<template>
  <div style="width: 100%">
    <div class="services" style="width: 100%">
      <table>
        <tr>
          <th>Service</th>
          <th>Status</th>
          <th>Since</th>
          <th>Twitter</th>
          <th>Status Page</th>
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
    load () {
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
