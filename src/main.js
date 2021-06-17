import Router from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Homepage from './pages/Homepage.vue'
import Login from './components/Login.vue'
import Signup from './components/SignUp.vue'
import ProductDetails from './components/ProductDetails.vue'

Vue.use(Router)
Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup},
    { path: '/productdetails', component: ProductDetails },
  ]
})





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
