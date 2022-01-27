import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',

    component: ()=> import('../views/Home')
  },
  {
    path: '/CashOnCard',
    name: 'CashOnCard',
    component: () => import('../views/CashOnCard')
  },
  {
    path: '/BankCards',
    name: 'BankCards',
    component: () => import('../views/bankCards')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/registration/registrationPage')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
