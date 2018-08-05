// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryCard from '@/components/StoryCard'
import TextValue from '@/components/TextValue'
import Tags from '@/components/Tags'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.component('story-card', StoryCard)
Vue.component('text-value', TextValue)
Vue.component('tags', Tags)

App.router = router

new Vue(App).$mount("#app")
