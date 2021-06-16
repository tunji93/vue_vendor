<template>
    <section class="container">
        <section class="top">
            <div class="top-img">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="top-text">
                <div class="top-text-right">
                    <h3>item 1</h3>
                </div>
                <div class="top-text-icon">
                    <i class="fa fa-heart"></i>
                </div>
            </div>
        </section>
        <section class="middle">
            <p>Giving information on its origins, as well as a random Lipsum generator.</p>
            <div class="middle-container">
                <div class="middle-container-left">
                    <div class="middle-container-left-star"><i class="fa fa-star"></i></div>
                </div>
                <div class="middle-container-right">
                    <h1>₦ 100</h1>
                </div>
            </div>
            <div class="middle-container-left-text"><h5>4 Reviews</h5></div>
        </section>
        
        <section class="bottom">
            <div class="bottom-button"><CartButton></CartButton></div>
            <div class="bottom-select"><CartSelect></CartSelect></div>
        </section>
    </section>
</template>

<script>
import CartButton from './CartButton.vue'
import CartSelect from './CartSelect.vue'
export default {
    components:{
        CartButton,
        CartSelect,
    }
}
</script>

<style scoped>
    .container {
        width: 20rem;
        height: fit-content;
        background-color: #fff;
        border: 1px solid lightgray;
        padding: 5px;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        
    }
    .container:hover {
        border: 1px solid #51bafc;
    }
    .top {
        display: flex;
        flex-direction: column;
        height: fit-content;
        
    }
    .top-img {
        border: 1px solid darkgrey;
        margin-bottom: none;
    }
    .top-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.5rem;
        color: darkslategray;
    }
    .fa {
        color: none
    }
    .middle {
        display: flex;
        flex-direction: column;
        color: lightslategray;
        
    }
    .middle > p {
        text-align: left;
        margin: 1rem 5px
    }
    .middle-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        color: darkgrey
        
    }
    .middle-container-left-text >h5 {
        margin: 0px 0px;
        text-align: left;
        height: 1rem
       
    }
    
    .bottom {
        border-top: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px ;
        margin-top: 8px
    }
</style>