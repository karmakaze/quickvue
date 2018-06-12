<template>
  <span>
    <template v-if="value">
      <template v-if="type === 'date'">{{ new Date(Date.parse(value)).toLocaleDateString('en-CA') }}</template>
      <template v-else-if="type === 'datetime'">{{ new Date(Date.parse(value)).toISOString().replace('T', ' ') }}</template>
      <template v-else-if="type === 'age'">{{ age(new Date(Date.parse(value))) }}</template>
      <template v-else-if="type === 'image' && linkUrl(value)"><img :src="value" /></template>
      <template v-else-if="type === 'link'">
        <a v-if="linkUrl(value)" :href="linkUrl(value)" :style="color"><span v-html="linkText(value)"></span></a>
        <span v-else :style="color"><span v-html="linkText(value)"></span></span>
      </template>
      <template v-else-if="type === 'twitter'"><a :href="twitterUrl(value)">{{ twitterHandle(value) }}</a></template>
      <template v-else-if="typeof type === 'function'">{{ type('text', value) }}</template>
      <template v-else>{{value}}</template>
    </template>
  </span>
</template>

<script>
export default {
  props: ['type', 'value', 'label', 'color'],
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
    validUrl (value) {
    },
    linkUrl (value) {
      var url = value
      if (Array.isArray(value) && value.length === 2) {
        url = value[0]
      }
      return url && (url.startsWith('https:') || url.startsWith('http:') || url.startsWith('data:')) ? url : ''
    },
    linkText (value) {
      if (Array.isArray(value) && value.length === 2) {
        return value[1]
      } else {
        var url = value
        return url.replace(/^https?:\/\//, '').replace(/\?.*/, '').replace(/\/$/, '')
      }
    },
    age (d) {
      var ms = Date.now() - d.getTime()
      var days = Math.floor(ms / 86400000)
      if (days) {
        return days + 'd'
      }

      var hours = Math.floor((ms - days * 86400000) / 3600000)
      if (hours) {
        return hours + 'h'
      }

      var minutes = Math.floor((ms - days * 86400000 - hours * 3600000) / 60000)
      if (minutes) {
        return minutes + 'm'
      }
      return 'now'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
ul {
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
