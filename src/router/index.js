import Vue from 'vue'
import Router from 'vue-router'
import Services from "@/components/Services"
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Services", component: Services },
    { path: "/login", name: "Login", component: Login }
  ]
})
