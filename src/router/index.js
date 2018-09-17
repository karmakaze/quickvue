import Vue from 'vue'
import Router from 'vue-router'
import QuickVue from "@/components/QuickVue"

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "QuickVue", component: QuickVue },
    { path: "/search/:search", name: "QuickVue", component: QuickVue },
    { path: "/trace/:traceId", name: "QuickVue", component: QuickVue }
  ]
})
