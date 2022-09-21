<script setup lang="ts">
    defineProps({
        title : {
            type: String
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
        link: {
            type: String
        }
    })
</script>

<template>
    <nuxt-link class="card-medical-feature mr-4 rounded-lg" :to="link">
        <div class="flex flex-col items-center px-4 py-3 rounded-lg w-20 h-full">
            <img :src="icon" class="h-10 w-10 mb-3" alt="">
            <p class="text-sm font-poppins font-medium leading-5">{{ title }}</p>
        </div>
    </nuxt-link>
</template>


<style>
    .card-medical-feature {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
    }
</style>