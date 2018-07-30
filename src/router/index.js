import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/components/Main"
import Test from '@/components/Test'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Main", component: Main },
    { path: "/test", name: "Test", component: Test },
    { path: "/login", name: "Login", component: Login }
  ]
})
