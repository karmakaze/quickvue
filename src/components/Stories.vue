<template>
  <div class="stories" style="width:60em">
    <table cellspacing="0">
      <tr>
        <th align="left" colspan="3"><h3><span class="logo-box">HN<sub>0</sub></span> Hacker News (redux)</h3></th>
      </tr>
      <template v-for="(storyId, index) of storyIds">
        <story-card :index="index" :storyId="storyId" :key="storyId" @change="toggle"></story-card>
      </template>
    </table>
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
      storyIds: []
    }
  },
  watch: {
    '$route' () {
      this.load()
    }
  },
  methods: {
    toggle (serviceIdChecked) {
      if (serviceIdChecked.serviceId === '*') {
        if (serviceIdChecked.checked) {
          let filterServiceIds = {}
          this.services.forEach(service => (filterServiceIds[service.id] = serviceIdChecked.checked))
          this.filterServiceIds = filterServiceIds
        } else {
          this.filterServiceIds = {}
        }
      } else {
        this.$set(this.filterServiceIds, serviceIdChecked.serviceId, serviceIdChecked.checked)
      }
      let checkedServiceIds = Object.entries(this.filterServiceIds).filter(e => e[1]).map(e => e[0])
      setCookie('filterServiceIds', checkedServiceIds.join(','))
      if (checkedServiceIds.length === 0) {
        this.filterServiceIds = {}
      }
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
      let url = 'https://hacker-news.firebaseio.com/v0/topstories.json'
      // if (authorization) {
      //   xhr.setRequestHeader('Authorization', authorization)
      //   url = url + '&_=' + Date.now()
      // }
      xhr.open('GET', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          let data = JSON.parse(xhr.responseText)
          if (Array.isArray(data) && data.length) {
            self.storyIds = data
          }
        }
      }
      xhr.send()
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}
a {
  text-decoration: none;
  color: #400040;
}
.logo-box {
  background-color: #ffe800;
  padding-top: 0.5em;
  padding-bottom: 0.25em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border: 1px solid #808080;
}
</style>
