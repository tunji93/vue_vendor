<template>
    <section class="container">
        <section class="left">
            <div class="left-img">
                <img src="../assets/logo.png" class= "img" alt="">
            </div>
        </section>
        <section class="right">
            <div class="top-text">
                <div class="top-text-right">
                    <h3>item 1</h3>
                </div>
                <div class="top-text-icon">
                    <i class="fa fa-heart"></i>
                </div>
            </div>
            <p>Giving information on its origins, as well as a random Lipsum generator.</p>
            <div class="bottom">
                <div class="bottom-left">
                    <div class="middle-container-left-text"><h5>4 Reviews</h5></div>
                    <h1>Price: ₦ 100</h1>
                </div>
                <div class="bottom-right">
                    <div class="bottom-select"><CartSelect text="Add to cart"></CartSelect></div>
                    <div class="bottom-button"><CartButton></CartButton></div>
                    
                </div>
            </div>
        </section>
    </section>
    
</template>
<script>
import CartButton from './CartButton.vue'
import CartSelect from './CartSelect.vue'
export default {
    components: {
        CartButton,
        CartSelect
    }
    
}
</script>

<style scoped>
    .container {
        width: 80%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        color: black;
        border: 1px solid lightgray;
        padding: 5px;
        margin-left: auto ;
        margin-right: auto;
        
    }
    .left {
        width: 30%;
        height: 80%;
        align-items: center;
    }
    .img {
        width: 100%;
        height: 80%;

    }
    .right {
        width: 65%;
    }
    .bottom-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>