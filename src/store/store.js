import Vue from 'vue'
import Vuex from 'vuex'

import cake from '../assets/cake.jpg'
import pasta from '../assets/pasta.jpg'
import fries from '../assets/fries.jpg'

import maccaron from '../assets/maccaron.jpg'
import pizza from '../assets/pizza.jpg'
import salad from '../assets/salad.jpg'

import samosa from '../assets/samosa.jpg'
import soup from '../assets/soup.jpg'
import tacos from '../assets/tacos.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRatedItems: [
      {id: 1, name: 'Cake', price: 100, url: cake, description: 'Chocolatte Cake with raspberry toppings', rating: 4.1},
      {id: 2, name: 'Bolognese pasta', price: 45.79, url: pasta, description: 'A Traditional Pasta alla Bolognese', rating: 5.0},
      {id: 3, name: 'French Fries', price: 30.50, url: fries, description: 'Crispy and salted French Fries', rating: 4.4},
      {id: 4, name: 'Macarron', price: 120.99, url: maccaron, description: 'Home-made Macarrons with berry custard', rating: 3.9},
      {id: 5, name: 'Pepperoni Pizza', price: 23.00, url: pizza, description: 'Pepperoni and cheese Pizza', rating: 5.0},
      {id: 6, name: 'Caeser Salad', price: 33.45, url: salad, description: 'The healthy option', rating: 3.7},
      {id: 7, name: 'Meat Samosa', price: 12.99, url: samosa, description: 'A delicious meat filled pastry', rating: 4.2},
      {id: 8, name: 'Vegetable Soup', price: 17.90, url: soup, description: 'A simple soup, but with great impact', rating: 4.0},
      {id: 9, name: 'Tacos', price: 10.00, url: tacos, description: 'The original tacos, with a specially spiced meat', rating: 4.4},
    ]
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
  }
})
