<template>
    <div class="card">
        <img src="../assets/logo.png" alt="">
        <div><p>a</p></div>
        <h5 class="title">There was a country</h5>
        <p class="author"><span>by</span> chinua achebe</p>
        <h2 class="price"><i class="fa fa-usd" aria-hidden="true"></i>1.99</h2>
    </div>
</template>




<style scoped>
    .card {
        width: 10rem;
        height: 16rem;
        border: 1px solid grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        background-color: #fff;
        border-radius: 4px;
    }
    .card > img {
        height: 50%;
        margin: 3px
    }
    .card > div {
        width: 100%;
        height: 2px;
       color: #3C99DC;
       background-color: #3C99DC;
       font-size: 2px;
    }
    .card > p {
        margin: 0px 7px ;
        text-align: center;
        color:#66D3FA
    }
    span {
        color: #a9a9a9;
        font-size: 12px;
    }
    .title {
        font-weight:bold;
        font-size: 15px;
        margin: 8px 7px;
        text-align: center;
    }
    i {
        font-size: 19px;
        margin-right: 3px;
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
