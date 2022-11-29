import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Rate from '@/components/Rate'
import StatementTable from '@/components/StatementTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/StatementTable',
      name: 'StatementTable',
      component: StatementTable
    }
  ]
})
