// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Entries from '@/components/Entries'
import TextValue from '@/components/TextValue'
import Tags from '@/components/Tags'
import * as labels from './util/labels'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$labels', { value: labels })

Vue.component('entries', Entries)
Vue.component('text-value', TextValue)
Vue.component('tags', Tags)

App.router = router

new Vue(App).$mount("#app")
