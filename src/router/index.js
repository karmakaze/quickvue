import Vue from 'vue'
import Router from 'vue-router'
import Services from "@/components/Services"
import Test from '@/components/Test'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Services", component: Services },
    { path: "/test", name: "Test", component: Test },
    { path: "/login", name: "Login", component: Login }
  ]
})
