import Vue from 'vue'
import Router from 'vue-router'
import Presi from '@/components/Presi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Presi',
      component: Presi
    }
  ]
})
