<template>
  <span>
    <template v-if="type === 'date'">{{new Date(Date.parse(value)).toLocaleDateString('en-CA')}}</template>
    <template v-else-if="type === 'datetime'">{{new Date(Date.parse(value)).toISOString().replace('T', ' ')}}</template>
    <template v-else-if="type === 'image' && isValidUrl(value)"><img :src="value" /></template>
    <template v-else-if="type === 'link' && isValidUrl(value)"><a :href="value">{{value}}</a></template>
    <template v-else-if="type === 'twitter'"><a :href="twitterUrl(value)">{{twitterHandle(value)}}</a></template>
    <template v-else-if="typeof type === 'function'">{{ type('text', value) }}</template>
    <template v-else>{{value}}</template>
  </span>
</template>

<script>
export default {
  props: ['type', 'value'],
  methods: {
    isValidUrl (url) {
      return url.startsWith('https:') || url.startsWith('http:') || url.startsWith('data:')
    },
    twitterHandle(handle) {
      if (handle) {
        return handle.startsWith('@') ? handle : '@' + handle
      }
      return ''
    },
    twitterUrl (handle) {
      return handle ? 'https://twitter.com/' + handle.replace(/^@+/, '') : ''
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
ul {
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
