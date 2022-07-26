<script setup lang="ts">
    defineProps({
        category: {
            type: String
        },
        title : {
            type: String
        },
        time : {
            type: String
        },
        author : {
            type: String
        },
        img: {
            type: String
        }
    })
</script>

<template>
     <div class="flex">
        <div class="w-full mr-4">
            <h4 class="font-poppins text-primary-color font-medium text-xs">{{category}}</h4>
            <p class="font-poppins mt-2 text-sm font-medium">{{title}}</p>
            <span class="font-poppins text-gray-375 text-xs mt-2">{{time}} | {{author}}</span>
        </div>
        <div class="w-auto">
            <div class="overflow-hidden" style="border-radius: 4px; height: 98px; width: 98px;">
                <img :src="img" class="w-full h-full object-cover" alt="">
            </div>
        </div>
    </div>
</template>


<style>

</style>