<script setup lang="ts">
    defineProps({
        title1 : {
            type: String
        },
        title2 :{
            type : String,
        },
        icon : {
            type : String
        },
        alt : {
            type : String
        },
        className : {
            type: String,
        }
    })
</script>

<template>
<div class="card-feature pr-3">
    <div class="flex flex-col items-center bg-white px-7 py-4 rounded-lg w-full h-full">
        <img :src="icon" class="h-16 w-16 mb-3" alt="">
        <p class="text-sm font-poppins font-medium leading-5">{{ title1 }}</p>
        <p class="text-sm font-poppins font-medium leading-5">{{ title2 }}</p>
    </div>
        </div>
</template>


<style>
    .card-feature {
        height: 140px;
        width: 150px;
    }
</style>