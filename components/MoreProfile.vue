<script setup lang="ts">
    defineProps({
        img :{
            type: String
        },
        title: {
            type: String
        },
        alt:{
            type: String
        }
    })
</script>
<template>
     <div class="flex justify-between pt-4 pb-4">
        <div class="flex items-center">
            <img :src="img" class="mr-5" alt="">
            <h3 class="text-base font-poppins font-medium">{{title}}</h3>
        </div>
        <img src="../assets/images/arrow_right_gray.svg" :alt="alt">
    </div>
</template>


<style>

</style>