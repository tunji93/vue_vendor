import Router from 'vue-router'
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Homepage from './pages/Homepage.vue'
import Login from './components/Login.vue'
import Signup from './components/SignUp.vue'
import ProductDetails from './components/ProductDetails.vue'
//import details from './components/details.vue'
import card from './components/card.vue'

Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false
const proxy = `http://alloworigin.com/get?url=`
const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup},
    { path: '/productdetails/:id', component: ProductDetails, props:true },
    { path: '/test', component: card },

  ]
})

const store = new Vuex.Store({
      state() {
        return {
          booksList: [],
          productDetails: null,
          isLoggedIn : false
        }
      },
     mutations: {
        fetchData(state, payLoad) {
          
          state.booksList =  [state.booksList, ...payLoad]
        },
        setBook(state, payLoad) {
          state.ProductDetails = null
          state.productDetails = payLoad
        }
     },
     actions: {
      fetchData(context) {
        
          
        const url = `${proxy}https://api.itbook.store/1.0/new`
          axios.get(url).then( (res) => {
              let data = res.data.books
              data.forEach(element => {
                element.amount = (Math.random() * 100).toFixed(2)
              });
              context.commit('fetchData', data)
              
            });
            
          
      },
      setBook(context,id) {
        
        const url = `${proxy}https://api.itbook.store/1.0/books/${id}`
        axios.get(url).then((res)=> {
          context.commit('setBook', res)
          

        })
      }
     },
     getters: {

     }
})





new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
