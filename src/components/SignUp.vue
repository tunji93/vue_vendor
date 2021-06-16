<template>
    <section class="container">
        <h1 class="title">Sign Up</h1>
        <div class="details">
            <div class="input-container">
                <i class="fa fa-envelope"></i>
                <input type="text" placeholder="name">
            </div>
            <div class="input-container">
                <i class="fa fa-envelope"></i>
                <input type="email" placeholder="email">
            </div>
            <div class="input-container">
                <i class="fa fa-lock"></i>
                <input type="password" placeholder="your password">
            </div>
            <div class="input-container">
                <i class="fa fa-lock"></i>
                <input type="password" placeholder="repeat password">
            </div>
        </div>
        <div class="button">
                <cart-button text="Sign up"></cart-button>
        </div>
    </section>
</template>

<script>
import CartButton from './CartButton.vue'
export default {
    components: {
        CartButton
    }
    
}
</script>

<style scoped>
    .container {
        background-color: #fff;
        width: 60%;
        height: 15rem;
        padding: 0px 0px 5px 0px;
        margin: auto;
        border: 1px solid lightgray;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .title {
        background-color: lightgray;
        color: dimgray;
        display: flex;
        justify-content: left;
        align-items: center;
        height: 3rem;
        padding-left: 1rem;
        margin: 0px;
    }
    .details {
        height: 8rem;
        display: flex;
        flex-direction: column;
        
        margin-top: 5px;
        padding-top: 8px;
        padding-bottom: 8px;
        justify-content: space-between;
        align-items: center;
        
    }
    .input-container {
        width: 80%;
        height: 2rem;
        border: 1px solid lightgray;
        border-radius: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
    }
    input, input:focus {
        border: none;
        flex: 1;
        outline: none;
    }
    .input-container:hover {
        border: 1px solid blue;
    }
    .button {
        padding: 5px 0px 5px 10px;
        display: flex;
        justify-content: flex-start;
    }
</style>