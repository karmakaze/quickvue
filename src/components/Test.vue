<template>
  <div>
      <h2>Test</h2>
      <form>
          <table>
              <tr>
                  <td><label for="service_id">service_id</label>:</td><td><input name="service_id" v-model="service_id" type="text" size="20"/> <button v-on:click.prevent="load">Load</button></td>
              </tr>
              <tr>
                  <td><label for="status_data_url">status_data_url</label>:</td><td><input name="status_data_url" v-model="status_data_url" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="selector">selector</label>:</td><td><input name="selector" v-model="selector" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="mapper">mapper</label>:</td><td><input name="mapper" v-model="mapper" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="match_okay">match_okay</label>:</td><td><input name="match_okay" v-model="match_okay" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="match_warn">match_warn</label>:</td><td><input name="match_warn" v-model="match_warn" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="match_down">match_down</label>:</td><td><input name="match_down" v-model="match_down" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="script">script:</label>:</td><td><button v-on:click.prevent="test">Test</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button v-on:click.prevent="save">Save</button></td>
              </tr>
              <tr>
                  <td colspan="2"><textarea v-model="script" rows="24" cols="80"></textarea></td>
              </tr>
              <tr>
                  <td></td><td></td>
              </tr>
          </table>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      service_id: '',
      status_data_url: '',
      selector: '',
      mapper: '',
      match_okay: '',
      match_warn: '',
      match_down: '',
      script: ''
    }
  },
  methods: {
    load () {
      var self = this
      var url = 'https://statuspages.me/services/' + this.service_id + '/checks'
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          var data = JSON.parse(xhr.responseText)
          if (Array.isArray(data) && data.length) {
            data = data[0]
          }
          self.status_data_url = data.statusDataUrl
          self.selector = data.selector
          self.mapper = data.mapper
          self.match_okay = data.matchOkay
          self.match_warn = data.matchWarn
          self.match_down = data.matchDown
          self.script = data.script
        }
      }
      xhr.send()
    },
    save() {
      var url = 'https://statuspages.me/services/' + this.service_id + '/checks'
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      var data = {
          service_id: this.service_id,
          name: '',
          statusDataUrl: this.status_data_url,
          selector: this.selector,
          mapper: this.mapper,
          matchOkay: this.match_okay,
          matchWarn: this.match_warn,
          matchDown: this.match_down,
          script: this.script
      }
      xhr.send(data)
    },
    test () {
      var url = 'https://statuspages.me/checks/test'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({
          statusDataUrl: this.status_data_url,
          selector: this.selector,
          mapper: this.mapper,
          matchOkay: this.match_okay,
          matchWarn: this.match_warn,
          matchDown: this.match_down,
          script: this.script }))
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #42b983;
}
</style>
