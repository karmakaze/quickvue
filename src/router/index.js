import Vue from 'vue'
import Router from 'vue-router'
import ReadMe from "@/components/ReadMe"
import Services from "@/components/Services"
import KaizenBoard from "@/components/KaizenBoard"

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "ReadMe", component: ReadMe },
    { path: "/services", name: "Services", component: Services },
    { path: "/:repoOwner/:repoName", name: "KaizenBoard", component: KaizenBoard }
  ]
})
