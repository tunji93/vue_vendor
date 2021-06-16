<template>
    <select class="select">
        <option class="option" v-for="i in select" value="i" :key="i">{{i}}</option>
    </select>
</template>



<script>
export default {
    data() {
        return {
            select: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    },
    
}
</script>

<style scoped>
    .select, .select:focus {
        width:3rem;
        border: 1px solid lightgray;
        height: 1.5rem;
        border-radius: 12px;
        padding: 2px;
    }
    .option {
        font-size: 15px;
    }
</style>
