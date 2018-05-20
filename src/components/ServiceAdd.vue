<template>
  <div :style="style()">
    <form id="service-add" @submit="checkForm">
      <table>
        <tr>
          <td>id:</td>
          <td><input v-bind:value="id" v-on:input="id = $event.target.value" placeholder="e.g. new-relic" size="25"/></td>
        </tr>
        <tr>
          <td>Name:</td>
          <td><input v-bind:value="name" v-on:input="name = $event.target.value" placeholder="e.g. New Relic" size="25"/></td>
        </tr>
        <tr>
          <td>Twitter:</td>
          <td><input v-bind:value="twitterHandle" v-on:input="twitterHandle = $event.target.value" placeholder="e.g. @newrelic" size="25"/></td>
        </tr>
        <tr>
          <td>Status page:</td>
          <td><input v-bind:value="statusPageUrl" v-on:input="statusPageUrl = $event.target.value" placeholder="e.g. https://status.newrelic.com" size="25"/></td>
        </tr>
        <tr>
          <td></td>
          <td><div v-for="(error, i) in errors" v-bind:key="i">{{error}}</div></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Add Service"/></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      id: '',
      name: '',
      twitterHandle: '',
      statusPageUrl: '',
      errors: []
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
    checkForm (e) {
      if (this.id && this.name && this.statusPageUrl) {
        this.$axios.post('http://statuspages.me:8080/services', {
                      'id': this.id,
                      'name': this.name,
                      'twitterHandle': this.twitterHandle,
                      'statusPageUrl': this.statusPageUrl
                    })
                   .then(response => { console.log('RESPONSE: ' + JSON.stringify(response.data)) })
        e.preventDefault()
      }
      this.errors = []
      if (!this.id) this.errors.push("'id' is required.")
      if (!this.name) this.errors.push("'Name' is required.")
      if (!this.statusPageUrl) this.errors.push("'Status page' is required.")
      e.preventDefault()
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
