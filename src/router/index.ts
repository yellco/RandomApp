import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Number from '../views/Number.vue'
import Category from '../views/Category.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Category',
    component: Category
  },
  {
    path: '/number',
    name: 'Number',
    component: Number
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
