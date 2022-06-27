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
        },
        link: {
            type: String
        }
    })
</script>
<template>
        <nuxt-link :to="link" class="flex justify-between pt-4 pb-4">
            <div class="flex items-center">
                <img :src="img" class="mr-5" v-if="img !== ''" :alt="alt">
                <h3 :class="(img === '' ? 'ml-5' : '') + ' text-base font-poppins font-medium'">{{title}}</h3>
            </div>
            <img src="../assets/images/arrow_right_gray.svg" alt="">
        </nuxt-link>
</template>


<style>

</style>