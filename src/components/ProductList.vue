<template>
    <div class="container">
        <section class="products">
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
        </section>
    </div>
</template>


<script>
import ProductCard from './ProductCard.vue'
export default {
 components: {
     ProductCard
 }   
}
</script>
<style scoped>
    
    .products {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: darkslategray;
        
        flex-wrap: wrap;
        
    }
</style>