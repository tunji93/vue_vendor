<template>
  <section class="header">
    <section class="header-left">
      <section class="header-left-logo">
        <router-link to='/'><i class="fa fa-tty" aria-hidden="true"></i></router-link>
        <h3 class="header-left-logo-text">Booksplus</h3>
      </section>
      <section class="header-left-search">
        <Search></Search>
      </section>
    </section>
    <section class="header-right">
      <section class="header-right-icons">
        <Icons></Icons>
      </section>
      <section class="header-right-menu">
        <Bar></Bar>
      </section>
    </section>
  </section>
</template>


<script>
  import Search from './Search.vue';
  import Icons from './Icons.vue'
  import Bar from './Bar.vue'
  export default {
    components: {
      Search,
      Icons,
      Bar
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
  .header-left-logo> h3 {
    font-size: 15px;
    color: #00008b
  }
  .fa-tty{
    width:40%;
    height: 70%;
    color: rgb(81, 186, 252);
    font-size: 40px;
  }
  .header-left-search {
    width:60%
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    height:80%
  }
  .header-right-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%
  }
  .header-right-menu {
    width: 40%;
    height:100%
  }
  
</style>