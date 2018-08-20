<template>
  <div class="quick-vue">
    <div class="quickvue-filters">
      <h2>QuickVue</h2>&nbsp;&nbsp;&nbsp;&nbsp;
      <span>project: <input v-model="projectId" size="6"/></span>&nbsp;
      <span>quicklog url: <input v-model="quicklogUrl" size="30"/></span>&nbsp;
      <span>trace/span: <input v-model="traceOrSpanId"/></span><span v-on:click="selectTraceOrSpanId('')"><img class="delete-back" src="/static/images/delete-back.png"></span>
    </div>
    <entries :projectId="projectId" :traceOrSpanId="traceOrSpanId" :quicklogUrl="quicklogUrl"
      @selectTraceId="selectTraceOrSpanId($event)" @selectSpanId="selectTraceOrSpanId($event)"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectId: "4",
      traceOrSpanId: "",
      quicklogUrl: 'https://quicklog.' + window.location.hostname.split('.').slice(1).join('.')
    }
  },
  methods: {
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
