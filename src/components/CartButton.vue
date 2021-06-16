<template>
    <button class="button">
        <h2 class="cart-text">{{text}}</h2>
    </button>
</template>

<script>
export default {
    props: ["text"]
}
</script>


<style scoped>
    .button{
        width: 5rem;
        height:2rem;
        border: 1px solid chartreuse;
        padding: 2px;
        border-radius: 2px;
        background-color: chartreuse;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }
    .button:hover {
        background-color: blue;
    }
    .cart-text {
        color: #fff;
        font-size: 12px;
    }
</style>