<template>
  <div :style="style()">
    <div>
      {{ service.name }}
      <text-value :type="'twitter'" :value="service.twitterHandle"></text-value>
      :{{ service.id }}
      <text-value :type="'link'" :value="service.statusPageUrl"></text-value>
      modified: <text-value :type="'date'" :value="service.updatedAt"></text-value>
    </div>
  </div>
</template>

<script>
export default {
  props: ['service'],
  data () {
    return {
      selecteditem: {}
    }
  },
  methods: {
    twitterLink (twitterHandle) {
      if (twitterHandle) {
        return '<>' + twitterHandle ? 'https://twitter.com/' + twitterHandle : '' + '</a>'
      } else {
        return ''
      }
    },
    item (option, value) {
      // console.log('item(option=' + option + ', value=' + JSON.stringify(value) + ')')
      return value
    },
    selected (item) {
      this.selecteditem = item
    },
    style () {
      var style = {
        'border-style': 'solid',
        'color': '#800080'
      }
      return style
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
