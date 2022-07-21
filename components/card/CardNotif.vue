<script setup lang="ts">
    defineProps({
        img: {
            type: String
        },
        title: {
            type: String
        },
        time : {
            type: String
        },
        notif : {
            type: String
        }
    })
</script>

<template>
    <div class="flex items-center px-4 py-6">
        <div class="p-4 rounded-full bg-blue-150 w-auto">
            <img :src="img" alt="" class="w-8 h-8">
        </div>
        <div class="w-full ml-3">
            <div class="flex items-center justify-between">
                <h3 class="font-poppins font-semibold text-sm">{{title}}</h3>
                <span class="font-poppins text-gray-350 text-xs">{{time}}</span>
            </div>
            <p class="font-poppins text-sm mt-1">{{notif}}</p>
        </div>
    </div>
</template>

<style>

</style>