<template>
  <div class="quick-vue">
    <div>
      QuickVue
      <span>project: <input v-model="projectId"/></span>
      <span>trace/span: <input v-model="traceOrSpanId"/></span>
      <span>quicklog url: <input v-model="quicklogUrl"/></span>
    </div>
    <entries :projectId="projectId" :traceOrSpanId="traceOrSpanId" :quicklogUrl="quicklogUrl"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectId: "4",
      traceOrSpanId: "",
      quicklogUrl: ""
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
