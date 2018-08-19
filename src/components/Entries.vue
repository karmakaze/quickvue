<template>
  <div class="entries">
    <table cellspacing="0" border="1">
      <tr>
        <th>Published UTC</th>
        <th>Source</th>
        <th>Actor</th>
        <th>Type</th>
        <th>Object</th>
        <th>Target</th>
        <th>Context</th>
        <th>trace-id</th>
        <th>span-id</th>
      </tr>

      <template v-for="entry of entries">
        <tr :key="entry.seq">
          <td>{{ entry.published.substring(5, 23).replace('T', ' ') }}</td>
          <td>{{ entry.source }}</td>
          <td>{{ entry.actor }}</td>
          <td>{{ entry.type }}</td>
          <td>{{ entry.object }}</td>
          <td>{{ entry.target }}</td>
          <td>{{ JSON.stringify(entry.context) }}</td>
          <td>{{ entry.trace_id }}</td>
          <td>{{ entry.span_id }}</td>
        </tr>
      </template>

      <tr>
        <th>Published UTC</th>
        <th>Source</th>
        <th>Actor</th>
        <th>Type</th>
        <th>Object</th>
        <th>Target</th>
        <th>Context</th>
        <th>trace-id</th>
        <th>span-id</th>
      </tr>
    </table>
  </div>
</template>

<script>
import { getCookie, setCookie } from '../util/cookies.js'

export default {
  props: ['quicklogUrl', 'projectId', 'traceOrSpanId'],
  created () {
    this.load()
  },
  data () {
    return {
      entries: []
    }
  },
  watch: {
    '$route' () {
      this.load()
    },
    'quicklogUrl' () {
      this.load()
    },
    'projectId' () {
      this.load()
    },
    'traceOrSpanId' () {
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
      // let params = new URLSearchParams(window.location.search.substring(1))
      let url = this.quicklogUrl + '/entries?project_id=' + this.projectId + '&trace_id=' + this.traceOrSpanId + '&span_id=' + this.traceOrSpanId
      xhr.open('GET', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          let data = JSON.parse(xhr.responseText)
          self.entries = data.data
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
