<template>
  <div class="cartitem">
      <i class="fa fa-trash" aria-hidden="true"></i>
      <h3>{item.title}</h3>
      <p>$ 1.99</p>
  </div>  
</template>

<script>
export default {
    //prop: ["item"]
}
</script>
<style scoped>
    .cartitem {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>