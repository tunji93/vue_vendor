<template>
    <div class="icons">
          <div class="icons-social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
          <div class="cart">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span class="num">0</span>
          </div>
    </div>
</template>

<style scoped>
    .icons {
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        
    }
    .icons-social {
        width:70%;
        
        color: grey;
        display: flex;
        justify-content: space-between;

    }
    .num{
        font-size: 15px;
    }
</style>