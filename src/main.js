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
        //let data 
        //const url = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=6ckHPPnuuh8udmahwODzUmyZVtPJvfki'
        //const url = 'https://api.nytimes.com/svc/books/v3/lists/history/hardcover-fiction/20.json?api-key=6ckHPPnuuh8udmahwODzUmyZVtPJvfki'
        //const key = '6ckHPPnuuh8udmahwODzUmyZVtPJvfki'
       //const key = 'AIzaSyDr8NqD6brIZddXwBCmUl0Fwt3G7OyTnOo'
        //const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+subject&filter=paid-ebooks:keyes&key=${key}`
          
        const url = 'https://thingproxy.freeboard.io/fetch/https://api.itbook.store/1.0/new'
          axios.get(url).then( (res) => {
              let data = res.data.books
              data.forEach(element => {
                element.amount = (Math.random() * 100).toFixed(2)
              });
              context.commit('fetchData', data)
              console.log(data)
            });
            
          
      },
      setBook(context,id) {
        
        const url = `https://thingproxy.freeboard.io/fetch/https://api.itbook.store/1.0/books/${id}`
        axios.get(url).then((res)=> {
          context.commit('setBook', res)
          console.log(res)

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
