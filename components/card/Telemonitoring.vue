<script setup lang="ts">

    defineProps({
        title: {
            type: String
        },
        icon : {
            type: String
        },
        link : {
            type: String
        }
    })
</script>

<template>
    <nuxt-link :to="link" class="telemonitoring-card h-40 w-full rounded-xl cursor-pointer">
        <div class="flex flex-col justify-center items-center h-full w-full">
            <img :src="icon" class="p-4 rounded-full bg-blue-50" alt="">
            <h4 class="text-base font-poppins font-semibold mt-4">{{title}}</h4>
        </div>
    </nuxt-link>
</template>


<style>
    .telemonitoring-card {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
</style>