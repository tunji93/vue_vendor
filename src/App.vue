<template>
  <main>
    <Header></Header>
    <section class="container">
      <h1 class="title">Ecomerce App built with Vue.js</h1>
      <h3 class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h3>
    </section>
    <product-details></product-details>
    
  </main>
</template>

<script>
import Header from './components/Header.vue'
import ProductDetails from './components/ProductDetails.vue'



export default {
  name: 'App',
  components: {
    Header,
    ProductDetails,
    
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  border: none;
  margin: 0;
}
.container{
  background: rgb(81, 186, 252);
  color: #fff;
  padding: 144px 24px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 5px;
}
</style>
