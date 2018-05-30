<template>
  <div>
      <h2>Login</h2>
      <form>
          <label for="username">Username:</label><input name="username" v-model="username" type="text"/>
          <label for="password">Password:</label><input name="password" v-model="password" type="password"/>
          <button v-on:click.prevent="login">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      var url = 'https://statuspages.me/auth'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({username: this.username, password: this.password}))
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
