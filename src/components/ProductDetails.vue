<template>
    <div class="product">
        <div class="container">
            <div class="container-left">
                <div class="container-left-top">
                    <router-link to='/'><i class=" chev fa fa-angle-left" aria-hidden="true"></i></router-link>
                    <h3>BACK TO LIST</h3>
                </div>
                <div class="container-left-bottom">
                    <img :src="data.image" alt="img">
                </div>
            </div>
            <div class="container-right">
                <div class="container-right-title">
                    <h1>{{data.title}}</h1>
                </div>
                <div class="container-right-reviews">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>133 reviews</p>
                </div>
                <div class="container-right-paragraph">
                    <p>{{data.desc}}</p>
                </div>
                <div class="container-right-price">
                    <i class="fa fa-usd" aria-hidden="true"></i>
                    <h1>1.99</h1>
                    <span>+</span>
                    <p>Shipping costs</p>

                </div>
                <div class="container-right-quantity">
                    <h5>Quantity</h5>
                </div>
                <div class="container-right-select">
                    <div>
                        <i class="chev1 fa fa-angle-left " aria-hidden="true"></i>
                        <h3>2</h3>
                        <i class="chev1 fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <p>3 items in stock</p>
                </div>
                <div class="container-right-button">
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    <h3>Add to cart</h3>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    
    props:['id'],
    computed: {
            data() {
                return this.$store.state.productDetails
            }
    },
    mounted() {
      this.$store.dispatch('setBook', this.id)
 } 
    
}
</script>


<style scoped>
    .product{
        width: 50%;
        background-image : linear-gradient(to top right, #3C99DC, #66D3FA, #D5F3FE);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 5rem;
        padding: 16px;
    }
    .container {
        background-color: #fff;
        width: 100%;
        border-radius: 4px;
        padding: 8px;
        display: flex;
        
    }
    .container-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        
        
    }
    .container-left-top {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 9px;
        color: #66D3FA;
        font-weight: 800;
        font-family: Arial, Helvetica, sans-serif
    }
    
    .container-right {
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width:50%;
        flex: 3;
        align-items: flex-start
        
    }
    .container-right-title {
        padding: none;
    }
    .container-right-title >h1 {
        margin: 0px;
        font-family: Arial, Helvetica, sans-serif;
        color: #696969;
    }
    .container-right-reviews {
        display: flex;
        align-items: center;
    }
    .container-right-price {
        display: flex;
        align-items: center;
        height: 2rem;
    }
    .container-right-price > i {
        align-self: flex-start;
        margin-bottom: 0px;
    }
    .container-right-price > h1 {
        align-self: center;
        font-size: 45px;
        margin-right: 1rem;
    }
    .container-right-price > p {
        align-self: flex-start;
        font-size: 15px;
        margin-left: 6px;
        color: #66D3FA
    }
    .container-right-price > span {
        align-self: flex-end;
        color: #66D3FA;
        font-size: 10px;
        margin-bottom: 3px;
        
    }
    .container-right-reviews > p {
        color: #c0c0c0;
        font-size: 15px;
        overflow-wrap: break-word;
    }
    .container-right-quantity>h5 {
        color: #c0c0c0;
        font-size: 18px;
        margin-top:1.5rem;
        margin-bottom: 1px
    }
    .stars {
        margin-right: 8px;
        color: #ffd700;
    }
    .container-right-paragraph {
        width: 100%;
    }
    .container-right-paragraph > p {
        width:100%;
        font-size: 14px;
        
    }
    .container-right-select {
        display: flex;
        align-items: center;
        margin-top: 0px;
        
        padding: 0px;
    }
    .container-right-select > div {
        margin-right: 1.5rem;
        height: 2rem;
        padding: 2px 4px;
        border-radius: 4px;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #c0c0c0;
    }
    .container-right-select > p {
        color: #c0c0c0;
        font-size: 15px;
    }


    .container-left-bottom {
        height: 90%;
        
    }
    .container-left-bottom > img {
        width:90%;
        height: 100%
    }

    .chev {
        color: #00008b;
        font-size: 20px;
        margin-right: 6px;
        font-weight: 800;
    }
    .chev1 {
        color: #00008b;
        font-size: 20px;
        font-weight: 800;
    }
    .container-right-button {
        width: 100%;
        height: 2.8rem;
        background-color: #00008b;
        border: 1px solid #00008b;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 5px 0px;
        font-size: 20px;
    }
    .container-right-button> h3 {
        font-size: 15px;
        margin-left: 1rem;
    }
    .container-right-button:hover {
        background-color: #66D3FA ;
    }

</style>