import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ArticleList from './views/ArticleList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'list',
          component: ArticleList
        },
        {
          path: '/details/:id',
          name: 'details',
          component: () => import('./views/Details.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
