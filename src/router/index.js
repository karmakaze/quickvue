import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Admin from '@/components/Admin'
import Ping from '@/components/Ping'
import AuthService from './../auth/AuthService'
import QuickVue from "@/components/QuickVue"

Vue.use(Router)
Vue.use(VueResource)

const auth = new AuthService()
const beforeEnter = (to, from, next) => {
  console.log(`beforeEnter: to ${JSON.stringify(to)}, from ${JSON.stringify(from)}`)
  if (!auth.isAuthenticated()) {
    next(false)
  } else {
    next()
  }
}

export default new Router({
  routes: [
    { path: '/home', name: 'Home', component: Home, beforeEnter: beforeEnter },
    { path: '/', name: 'QuickVue', component: QuickVue, beforeEnter: beforeEnter },
    { path: '/tag/:tag', name: 'QuickVueTag', component: QuickVue, beforeEnter: beforeEnter },
    { path: '/trace/:traceId', name: 'QuickVueTrace', component: QuickVue, beforeEnter: beforeEnter },
    { path: '/profile', name: 'Profile', component: Profile, beforeEnter: beforeEnter },
    { path: '/admin', name: 'Admin', component: Admin, beforeEnter: beforeEnter },
    { path: '/ping', name: 'Ping', component: Ping }
  ]
})
