import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import FoodDetails from '../components/FoodDetails.vue'
import Cart from '../components/Cart.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/food-details',
    name: 'food-details',
    component: FoodDetails
  },
  {
    path: '/card',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
