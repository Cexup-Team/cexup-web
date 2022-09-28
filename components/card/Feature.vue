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
        },
        link : {
            type : String
        }
    })
</script>

<template>
    <div class="card-feature pr-3">
        <nuxt-link :to="link">

            <div class="flex flex-col items-center bg-white px-7 py-4 rounded-lg w-full h-full cursor-pointer">
                <img :src="icon" class="h-16 w-16 mb-3" alt="">
                <p class="text-sm font-poppins font-medium leading-5">{{ title1 }}</p>
                <p class="text-sm font-poppins font-medium leading-5">{{ title2 }}</p>
            </div>

        </nuxt-link>
    </div>
</template>


<style>
    .card-feature {
        height: 140px;
        width: 150px;
    }
</style>