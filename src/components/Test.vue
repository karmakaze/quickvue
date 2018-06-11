<template>
  <div>
      <h2>Test</h2>
      <form>
          <table>
              <tr>
                  <th>Service</th>
              </tr>
              <tr>
                  <td><label for="service_id">service_id</label>:</td><td><input name="service_id" v-model="service_id" type="text" size="20"/> <button v-on:click.prevent="load">Load</button> <button v-on:click.prevent="deleteService">Delete</button></td>
              </tr>
              <tr>
                  <td><label for="service_name">name</label>:</td><td><input name="service_name" v-model="service_name" type="text" size="20"/></td>
              </tr>
              <tr>
                  <td><label for="twitter_handle">twitter_handle</label>:</td><td><input name="twitter_handle" v-model="twitter_handle" type="text" size="20"/></td>
              </tr>
              <tr>
                  <th>Check</th>
              </tr>
              <tr>
                  <td><label for="status_page_url">status_page_url</label>:</td><td><input name="status_page_url" v-model="status_page_url" type="text" size="52"/></td>
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
                  <td><label for="warn_selector">warn_selector</label>:</td><td><input name="warn_selector" v-model="warn_selector" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="match_warn">match_warn</label>:</td><td><input name="match_warn" v-model="match_warn" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="down_selector">down_selector</label>:</td><td><input name="down_selector" v-model="down_selector" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="match_down">match_down</label>:</td><td><input name="match_down" v-model="match_down" type="text" size="52"/></td>
              </tr>
              <tr>
                  <td><label for="script">script:</label>:</td><td><button v-on:click.prevent="test">Test</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button v-on:click.prevent="save">Save</button></td>
              </tr>
              <tr>
                  <td colspan="2" valign="top"><textarea v-model="script" rows="24" cols="80"></textarea></td><td valign="top">{{test_output}}</td>
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
      service_name: '',
      twitter_handle: '',
      name: '',
      status_page_url: '',
      status_data_url: '',
      selector: '',
      mapper: '',
      match_okay: '',
      warn_selector: '',
      match_warn: '',
      down_selector: '',
      match_down: '',
      script: '',
      test_output: ''
    }
  },
  methods: {
    load () {
      var self = this
      var url = 'https://statuspages.me/services/' + this.service_id + '/checks?_=' + new Date().getTime()
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          var data = JSON.parse(xhr.responseText)
          if (Array.isArray(data) && data.length) {
            data = data[0]
          }
          self.service_id = data.serviceId
          self.service_name = data.service.name
          self.twitter_handle = data.service.twitterHandle
          self.name = ''
          self.status_page_url = data.statusPageUrl
          self.status_data_url = data.statusDataUrl
          self.selector = data.selector
          self.mapper = data.mapper
          self.match_okay = data.matchOkay
          self.warn_selector = data.warnSelector
          self.match_warn = data.matchWarn
          self.down_selector = data.downSelector
          self.match_down = data.matchDown
          self.script = data.script
          self.test_output = ''
        }
      }
      xhr.send()
    },
    save() {
      var url = 'https://statuspages.me/services/' + this.service_id + '/checks'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      var data = {
          service: {
            id: this.service_id,
            name: this.service_name,
            twitterHandle: this.twitter_handle
          },
          name: '',
          statusPageUrl: this.status_page_url,
          statusDataUrl: this.status_data_url,
          selector: this.selector,
          mapper: this.mapper,
          matchOkay: this.match_okay,
          warnSelector: this.warn_selector,
          matchWarn: this.match_warn,
          downSelector: this.down_selector,
          matchDown: this.match_down,
          script: this.script
      }
      xhr.send(JSON.stringify(data))
    },
    deleteService () {
      var url = 'https://statuspages.me/services/' + this.service_id
      var xhr = new XMLHttpRequest()
      xhr.open('DELETE', url)
      xhr.send()
    },
    test () {
      var self = this
      self.test_output = ''
      var url = 'https://statuspages.me/checks/test'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText) {
          var data = JSON.parse(xhr.responseText)
          self.test_output = JSON.stringify(data, true)
        }
      }
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({
          service: {
            id: this.service_id,
            name: this.service_name,
            twitterHandle: this.twitter_handle
          },
          name: '',
          statusPageUrl: this.status_page_url,
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
