<template>
  <main>
    <Header class="header"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'





export default {
  name: 'App',
  components: {
    Header,
    Footer

    
    
  }
}
</script>

<style>

#app {
  box-sizing: border-box;
  border: none;
  margin: 0;
  
}
main {
  display: flex;
  flex-direction: column;
  
  height: 100vh;
}



</style>
