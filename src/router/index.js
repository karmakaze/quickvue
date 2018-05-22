import Vue from 'vue'
import Router from 'vue-router'
import Services from "@/components/Services"

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Services", component: Services }
  ]
})
