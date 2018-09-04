<template>
  <div class="entries">
    <table>
      <tr>
        <th width="6%" v-on:click="moreOlder()" style="padding-top: 3px">More Older</th>
        <th width="9%" rowspan="2">Actor</th>
        <th width="6%" rowspan="2" v-if="useSourceColumns()" v-for="source in sources" :key="source">{{ source.replace(/-/g, ' ') }}</th>
        <th width="6%" rowspan="2" v-if="!useSourceColumns()">Source</th>
        <th width="6%" rowspan="2" v-if="!useSourceColumns()">Type</th>
        <th width="9%" rowspan="2">Object</th>
        <th width="9%" rowspan="2">Target</th>
        <th rowspan="2">Context</th>
        <th width="12%" colspan="2" v-on:click="moreOlder()" style="padding-top: 3px">More Older</th>
      </tr>
      <tr>
        <th style="padding-top: 3px">Published UTC</th>
        <th style="padding-top: 3px">trace-id</th>
        <th style="padding-top: 3px">span-id</th>
      </tr>

      <template v-for="(entry, i) of entries">
        <tr class="data-row" :key="entry.seq">
          <td :style="spanColor(entry.span_id)">{{ entry.published.substring(5, 23).replace('T', ' ') }}</td>
          <td>{{ entry.actor }}</td>
          <td v-if="useSourceColumns()" v-for="source in sources" :key="source" :style="entryStyle(entry, source)">
            {{ source === entry.source ? entry.type : '' }}
          </td>
          <td v-if="!useSourceColumns()" :style="entryStyle(entry, '', i%2 !== 0)">{{ entry.source }}</td>
          <td v-if="!useSourceColumns()" :style="entryStyle(entry, '', i%2 !== 0)">{{ entry.type }}</td>
          <td :style="entryStyle(entry, '', i%2 !== 0)" v-on:click="clickTaggable(entry.object)">{{ entry.object }}</td>
          <td :style="entryStyle(entry, '', i%2 !== 0)" v-on:click="clickTaggable(entry.target)">{{ entry.target }}</td>
          <td :style="entryStyle(entry, '', i%2 !== 0)">{{ JSON.stringify(entry.context) }}</td>
          <td :style="spanColor(entry.trace_id)" v-on:click="$emit('selectTraceId', entry.trace_id)">{{ entry.trace_id }}</td>
          <td :style="spanColor(entry.span_id)" v-on:click="$emit('selectSpanId', entry.span_id)">{{ entry.span_id }}</td>
        </tr>
      </template>

      <tr>
        <th style="padding-top: 3px">Published UTC</th>
        <th rowspan="2">Actor</th>
        <th rowspan="2" v-if="useSourceColumns()" v-for="source in sources" :key="source">{{ source.replace(/-/g, ' ') }}</th>
        <th rowspan="2" v-if="!useSourceColumns()">Source</th>
        <th rowspan="2" v-if="!useSourceColumns()">Type</th>
        <th rowspan="2">Object</th>
        <th rowspan="2">Target</th>
        <th rowspan="2">Context</th>
        <th style="padding-top: 3px">trace-id</th>
        <th style="padding-top: 3px">span-id</th>
      </tr>
      <tr>
        <th v-on:click="moreRecent()" style="padding-top: 3px">More Recent</th>
        <th colspan="2" v-on:click="moreRecent()" style="padding-top: 3px">More Recent</th>
      </tr>
    </table>
  </div>
</template>

<script>
import { colorHash, saturationHash, valueHash } from '../util/colors.js'
import { getCookie } from '../util/cookies.js'

export default {
  props: ['quicklogUrl', 'projectId', 'tag', 'traceOrSpanId'],
  created () {
    this.load()
  },
  data () {
    return {
      sources: [],
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
    'tag' () {
      this.load()
    },
    'traceOrSpanId' () {
      this.load()
    }
  },
  methods: {
    useSourceColumns() {
      return this.tag || this.traceOrSpanId
    },
    clickTaggable(value) {
      if (/^[-:a-z0-9]+$/.test(value) && !/:.*:/.test(value)) {
        this.$emit('selectTag', value)
      }
    },
    load(dirCount) {
      let entries = this.entries
      let xhr = new XMLHttpRequest()
      // let params = new URLSearchParams(window.location.search.substring(1))
      let url = this.quicklogUrl + '/entries?project_id=' + this.projectId + '&tag=' + this.tag + '&trace_id=' + this.traceOrSpanId + '&span_id=' + this.traceOrSpanId
      if (isFinite(dirCount)) {
        if (dirCount < 0) {
          if (entries.length > 0) {
            url += '&published=%5B,' + entries[0].published + '%5D'
          }
          url += '&count=' + (-dirCount)
        } else {
          if (entries.length > 0) {
            url += '&published=%5B' + entries[entries.length - 1].published + ',%5D'
          }
          url += '&count=' + dirCount
        }
      } else if (this.tag || this.traceOrSpanId) {
          url += '&count=1000'
      }

      xhr.open('GET', url)
      xhr.onload = () => {
        if (xhr.status === 200 && xhr.responseText) {
          let data = JSON.parse(xhr.responseText)
          if (data && data.data && data.data.length) {
            if (isFinite(dirCount)) {
              if (dirCount < 0) {
                if (data.data[data.data.length - 1].seq === entries[0].seq) {
                  this.entries = data.data.concat(entries.slice(1))
                } else {
                  this.entries = data.data.concat(entries)
                }
              } else {
                if (entries[entries.length - 1].seq === data.data[0].seq) {
                  this.entries = entries.concat(data.data.slice(1))
                } else {
                  this.entries = entries.concat(data.data)
                }
              }
            } else {
              this.entries = data.data
            }
          } else {
            this.entries = []
          }
          let sources = []
          this.entries.forEach(e => {
            if (e.source && !sources.includes(e.source)) {
              sources.push(e.source)
            }
          })
          this.sources = sources
        }
      }
      xhr.send()
    },
    moreOlder() {
      this.load(-50)
    },
    moreRecent() {
      this.load(50)
    },
    parseCookie() {
      let filterServiceIds = {}
      let cookie = getCookie('filterServiceIds')
      if (cookie) {
        cookie.split(',').forEach(serviceId => (filterServiceIds[serviceId] = true))
      }
      return filterServiceIds
    },
    entryStyle(entry, source, isOddRow) {
      if (source && source !== entry.source) {
        return {}
      }
      let c = colorHash(entry.source, 0.125, 0.999)
      if (isOddRow) {
        c += 'd0'
      }
      return {
        'background': c
      }
    },
    spanColor(spanId) {
      if (!spanId) {
        return {}
      }
      let saturation = 0.5 + 0.5 * saturationHash(spanId)
      let value = 0.2 + 0.7 * valueHash(spanId)
      return {
        'color': colorHash(spanId, saturation, value)
      }
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
.entries {
  width: 100%;
}
table {
  table-layout: fixed;
  width: 100vw;
  border: 1px solid #eeeeee;
  border-spacing: 0px;
  border-collapse: collapse;
}
.heading-row { background: #ccffff; }
tr.data-row:nth-child(even) { background: #ffffff; }
tr.data-row:nth-child(odd) { background: #f0f0f0; }
tr.data-row {
  line-height: 1.2em;
}
th {
  border: 1px solid #c0c0c0;
  padding: 1px;
}
td {
  border-left: 1px solid #c0c0c0;
  border-right: 1px solid #c0c0c0;
  padding-top: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 1px;
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
