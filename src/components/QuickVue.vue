<template>
  <div class="quick-vue">
    <div class="quickvue-filters">
      <h2>{{ title() }}</h2>&nbsp;&nbsp;&nbsp;&nbsp;
      <span>project: <input v-model="projectId" size="6"/></span>&nbsp;
      <span>quicklog url: <input v-model="quicklogUrl" size="30"/></span>&nbsp;
      <span>tag: <input v-model="tag" size="52"/></span><span v-on:click="selectTag('')"><img class="delete-back" src="/static/images/delete-back.png"></span>&nbsp;&nbsp;
      <span>trace/span: <input v-model="traceOrSpanId" size="23"/></span><span v-on:click="selectTraceOrSpanId('')"><img class="delete-back" src="/static/images/delete-back.png"></span>
    </div>
    <entries :projectId="projectId" :tag="tag" :traceOrSpanId="traceOrSpanId" :quicklogUrl="quicklogUrl"
      @selectTag="selectTag($event)" @selectTraceId="selectTraceOrSpanId($event)" @selectSpanId="selectTraceOrSpanId($event)"/>
  </div>
</template>

<script>
export default {
  data () {
    let quicklogUrl = 'http://' + window.location.hostname + ':8124'
    let nameParts = window.location.hostname.split('.')
    if (nameParts.length >= 2) {
      quicklogUrl = 'https://api.quicklog.io'
    }
    let tag = this.$route.params.tag || ''
    let traceId = this.$route.params.traceId || ''
    return {
      projectId: '4',
      tag: tag,
      traceOrSpanId: traceId,
      quicklogUrl: quicklogUrl
    }
  },
  methods: {
    title() {
      return window.location.hostname === 'quicklog.io' ? 'Quicklog.io' : 'QuickVue'
    },
    selectTag(tag) {
      this.tag = tag
      this.traceOrSpanId = ''
    },
    selectTraceOrSpanId(traceOrSpanId) {
      this.traceOrSpanId = traceOrSpanId
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
.quickvue-filters {
  background: #51f87c;
  display: flex;
  align-items: center;
}
.delete-back {
  margin-top: 0.25em;
  margin-left: -2.5em;
  margin-right: 1em;
  height: 2em;
  width: auto;
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
