<template>
    <router-link :to='link'>
        <div class="card">
            <img :src="obj.image" alt="image">
            <div><p>a</p></div>
            <h5 class="title">{{obj.title}}</h5>
            <h2 class="price"><i class="fa fa-usd" aria-hidden="true"></i>{{obj.amount}}</h2>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ["obj"],
        computed: {
            link() {
                return `/productdetails/${this.obj.isbn13}`
            }
        }
        
    }
</script>




<style scoped>
    .card {
        width: 10rem;
        height: 16rem;
        border: 1px solid #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        background-color: #fff;
        border-radius: 4px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    .card:hover {
        border: 1px solid #3C99DC;
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
    
    
    .title {
        font-weight:bold;
        font-size: 15px;
        margin: 8px 7px;
        text-align: center;
        
    }
    .card > h2 {
        margin-bottom: 3px;
    }
    i {
        font-size: 19px;
        margin-right: 3px;
    }
    
</style>