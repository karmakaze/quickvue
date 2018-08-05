<template>
  <tr valign="baseline">
    <td align="center" v-html="numberLabel()"></td>
    <td><div class="upvote">▲</div></td>
    <td>
      <div>
        <a class="title" :href="'https://news.ycombinator.com/item?id=' + story.id">{{ story.title }}
        <span class="domain">({{ domain() }})</span></a>
      </div>
      <div class="line2">
        {{ story.score }} points by {{ story.by }} <text-value type="age" :value="story.time * 1000"/> | {{ story.descendants }} comments
        <a :href="'https://hacker-news.firebaseio.com/v0/item/' + story.id +'.json'">🏷</a>
        <span v-if="story.dead">dead</span>
        <span v-if="story.deleted">deleted</span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['index', 'storyId'],
  created () {
    this.load()
  },
  data () {
    return {
      story: {}
    }
  },
  methods: {
    load () {
      var self = this
      var url = 'https://hacker-news.firebaseio.com/v0/item/' + this.storyId + '.json'
      var xhr = new XMLHttpRequest()
      // if (authorization) {
      //   xhr.setRequestHeader('Authorization', authorization)
      //   url = url + '&_=' + Date.now()
      // }
      xhr.open('GET', url, true)
      xhr.onload = function() {
          if (xhr.status === 200 && xhr.responseText) {
            var data = JSON.parse(xhr.responseText)
            self.story = data
          } else {
            self.story = {}
          }
      }
      xhr.send()
    },
    numberLabel() {
      var number = 1 + this.index
      return (number < 10 ? '&nbsp;'.concat(number) : number)
    },
    domain() {
      var l = document.createElement("a")
      l.href = this.story.url
      var parts = l.hostname.split('.')
      parts = parts.length <= 2 ? parts : parts.slice(parts.length - 2)
      return parts.join('.')
    }
  }
}
</script>

<style scoped>
a {
  color: #505050;
  text-decoration: none;
}
ul {
  margin-top: 2px;
  margin-bottom: 5px;
}
.upvote {
  color: #a0a0a0;
  vertical-align: middle;
}
.title {
  color: #303030;
  font-size: 110%;
  font-family: Verdana, Geneva, sans-serif;
}
.title:visited {
  color: #808080;
}
.domain {
  color: #a0a0a0;
  font-size: 0.86em;
}
.line2 {
  color: #a0a0a0;
  font-size: 0.86em;
}
</style>
