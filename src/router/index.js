import Vue from 'vue'
import Router from 'vue-router'
import Stories from "@/components/Stories"
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Stories", component: Stories },
    { path: "/login", name: "Login", component: Login }
  ]
})
