<template>
  <span>
    <template v-if="value">
      <template v-if="type === 'date'">{{ new Date(Date.parse(value)).toLocaleDateString('en-CA') }}</template>
      <template v-else-if="type === 'datetime'">{{ new Date(Date.parse(value)).toISOString().replace('T', ' ') }}</template>
      <template v-else-if="type === 'age'">{{ age(new Date(Date.parse(value))) }}</template>
      <template v-else-if="type === 'image' && isValidUrl(value)"><img :src="value" /></template>
      <template v-else-if="type === 'link' && isValidUrl(value)"><a :href="value">{{trimUrl(value)}}</a></template>
      <template v-else-if="type === 'twitter'"><a :href="twitterUrl(value)">{{ twitterHandle(value) }}</a></template>
      <template v-else-if="typeof type === 'function'">{{ type('text', value) }}</template>
      <template v-else>{{value}}</template>
    </template>
  </span>
</template>

<script>
export default {
  props: ['type', 'value'],
  methods: {
    twitterHandle(handle) {
      if (handle) {
        return handle.startsWith('@') ? handle : '@' + handle
      }
      return ''
    },
    twitterUrl (handle) {
      return handle ? 'https://twitter.com/' + handle.replace(/^@+/, '') : ''
    },
    isValidUrl (url) {
      return url.startsWith('https:') || url.startsWith('http:') || url.startsWith('data:')
    },
    trimUrl (url) {
      return url.replace(/^https?:\/\//, '').replace(/\?.*/, '').replace(/\/$/, '')
    },
    age (d) {
      var ms = Date.now() - d.getTime()
      var days = Math.floor(ms / 86400000)
      var hours = Math.floor((ms - days * 86400000) / 3600000)
      var minutes = Math.floor((ms - days * 86400000 - hours * 3600000) / 60000)
      var age = ''
      if (days) {
        age = age + ' ' + days + 'd'
      }
      if (days < 3 && hours) {
        age = age + ' ' + hours + 'h'
      }
      if (days === 0 && hours < 3 && minutes) {
        age = age + ' ' + minutes + 'm'
      }
      return age.trim() || 'now'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
a:visited {
  color: #2c3e50;
}
ul {
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
