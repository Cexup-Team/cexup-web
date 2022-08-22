<script setup lang="ts">
    defineProps({
        img : {
            type: String
        },
        alt : {
            type: String,
            default: "image article"
        },
        title: {
            type: String
        },
        subTitle: {
            type: String
        },
        date: {
            type: String
        },
        author : {
            type: String
        }
    })
</script>
<template>
  <div class="aticle-item rounded-lg w-80 mr-4 h-auto p-4 bg-white">
        <div class="flex justify-between items-center">
            <div class="w-3/6">
                <h2 class="text-sm font-medium text-primary-color font-poppins mb-2">{{ title }}</h2>
                <p class="text-base font-poppins font-medium line-clamp-3">{{ subTitle }}</p>
            </div>
            <div class="w-2/6">
                <img :src="img" class="w-24 h-24 object-cover rounded-lg" :alt="alt">
            </div>
        </div>

        <div class="flex justify-between w-full items-center mt-5">
            <h4 class="text-xs font-poppins text-gray-400">{{date}} | {{author}}</h4>
            <img src="../../assets/images/more_icon.svg" class="w-6 h-6" alt="">
        </div>
    </div>
</template>

<style>

</style>