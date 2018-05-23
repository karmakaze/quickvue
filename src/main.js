// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ServiceAdd from '@/components/ServiceAdd'
import ServiceCard from '@/components/ServiceCard'
import SearchBar from '@/components/SearchBar'
import SearchResult from '@/components/SearchResult'
import ListDetail from '@/components/ListDetail'
import ItemList from '@/components/ItemList'
import ItemDetail from '@/components/ItemDetail'
import TextValue from '@/components/TextValue'
import ListsCards from '@/components/ListsCards'
import ListsCard from '@/components/ListsCard'
import Tags from '@/components/Tags'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.component('service-card', ServiceCard)
Vue.component('service-add', ServiceAdd)
Vue.component('search-bar', SearchBar)
Vue.component('search-result', SearchResult)
Vue.component('list-detail', ListDetail)
Vue.component('item-list', ItemList)
Vue.component('item-detail', ItemDetail)
Vue.component('text-value', TextValue)

Vue.component('lists-cards', ListsCards)
Vue.component('lists-card', ListsCard)
Vue.component('tags', Tags)

App.router = router

new Vue(App).$mount("#app")
