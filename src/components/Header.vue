<template>
  <section class="header">
    <section class="header-left">
      <section class="header-left-logo">
        <img src="../assets/logo.png" alt="logo" class="header-left-logo-img">
        <h3 class="header-left-logo-text">COM</h3>
      </section>
      <section class="header-left-search">
        <Search></Search>
      </section>
    </section>
    <section class="header-right">Right</section>
  </section>
</template>


<script>
  import Search from './Search.vue'
  export default {
    components: {
      Search
    },
    data () {
      return {
        linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram',
        isCheckoutActive: false,
        isMenuOpen: false
      }
    },
  }
</script>

    

    
  

  
  
  
<style scoped>
  .header {
    width:100%;
    height: 3rem;
    padding-right: 10px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%
  }
  .header-left-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%
  }
  .header-left-logo-img{
    width:40%;
    height: 70%;
  }
  .header-left-search {
    width:60%
  }
  
</style>