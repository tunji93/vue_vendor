<template>
    <div class="container">
        <h1>Books Bestsellers</h1>

        <section class="products">
            <product-card v-for="item in data" 
            :key="item.isbn13"
            :obj="item">
            </product-card>
        </section>
    </div>
</template>


<script>
import ProductCard from './ProductCard.vue'
export default {
 components: {
     ProductCard
 },
 computed: {
     data() {
         return this.$store.state.booksList
     }
 },
 mounted() {
      this.$store.dispatch('fetchData')
 } 
}
</script>
<style scoped>
.container {
    background-color: #a0d6b4;
}
    .container > h1 {
        text-align: center;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 100
    }
    
    .products {
        display: flex;
        align-items: center;
        justify-content: center;
        
        flex-wrap: wrap;
        
    }
</style>