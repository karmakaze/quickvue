<template>
  <div style="width: 100%">
    <div><h2>&nbsp;&nbsp;&nbsp;{{ title() }}</h2></div>
    <div class="services" style="width: 100%">
      <table>
        <tr>
          <th v-if="editing"><input type="checkbox" :checked="allChecked()" v-on:change="toggle({serviceId: '*', checked: $event.target.checked})"/><input type="button" value="Done" v-on:click="editOrDone"/></th><th v-else><input type="button" value="Edit" v-on:click="editOrDone"/></th>
          <th align="right">Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
          <th align="center">Since</th>
          <th align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current status</th>
        </tr>
        <template v-for="service of services">
          <service-card v-if="included(service.id)" :checked="checked(service.id)" @change="toggle" :service="service" :key="service.id"></service-card>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from '../util/cookies.js'

export default {
  created () {
    this.load()
  },
  data () {
    return {
      editing: false,
      services: [],
      filterServiceIds: this.parseCookie()
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
    included (serviceId) {
      return this.editing || Object.keys(this.filterServiceIds).length === 0 || !!this.filterServiceIds[serviceId]
    },
    checked (serviceId) {
      if (!this.editing) {
        return null
      }
      return !!this.filterServiceIds[serviceId]
    },
    allChecked() {
      let values = Object.values(this.filterServiceIds)
      if (values.length < this.services.length) {
        return false
      }
      return !values.includes(false)
    },
    editOrDone () {
      this.editing = !this.editing
    },
    toggle (serviceIdChecked) {
      if (serviceIdChecked.serviceId === '*') {
        let filterServiceIds = {}
        this.services.forEach(service => (filterServiceIds[service.id] = serviceIdChecked.checked))
        this.filterServiceIds = filterServiceIds
      } else {
        this.$set(this.filterServiceIds, serviceIdChecked.serviceId, serviceIdChecked.checked)
      }
      let checkedServiceIds = Object.entries(this.filterServiceIds).filter(e => e[1]).map(e => e[0])
      setCookie('filterServiceIds', checkedServiceIds.join(','))
      console.log('set then getCookie', getCookie('filterServiceIds'))
    },
    title () {
      return window.location.hostname.toLowerCase().endsWith('s.me') ? "StatusPages.me" : "StatusPage.me"
    },
    parseCookie() {
      let filterServiceIds = {}
      let cookie = getCookie('filterServiceIds')
      if (cookie) {
        cookie.split(',').forEach(serviceId => (filterServiceIds[serviceId] = true))
      }
      return filterServiceIds
    },
    load () {
      let self = this
      let xhr = new XMLHttpRequest()
      let url = 'https://statuspages.me/services'
      // if (authorization) {
      //   xhr.setRequestHeader('Authorization', authorization)
      //   url = url + '&_=' + Date.now()
      // }
      xhr.open('GET', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          let data = JSON.parse(xhr.responseText)
          if (Array.isArray(data) && data.length) {
            let services = data
            services.sort((a, b) => {
              let aName = a.name.toLowerCase()
              let bName = b.name.toLowerCase()
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
