<template>
    <div class="cart">
        <cart-items></cart-items>
        <div class="button">
            <button>buy now</button>
            <h2>Total: 450</h2>
        </div>

    </div>
</template>

<script>
import CartItems from './CartItems.vue'
export default {
   components: {
       CartItems
   } 
}
</script>

<style scoped>
    .cart {
        margin: auto;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px, 20px 20px 5px;
        width: 50%;
        border: 2px solid #00008b;
    }
    .button {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>