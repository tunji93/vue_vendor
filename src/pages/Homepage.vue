<template>
    <section class="main">
        <blue-bar></blue-bar>
        <product-list></product-list>

    </section>
</template>

<script>
import BlueBar from '../components/BlueBar.vue'
import ProductList from '../components/ProductList.vue'
export default {
    components: {
        BlueBar,
        ProductList
    }
    
}
</script>