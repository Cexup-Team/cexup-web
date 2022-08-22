<script setup lang="ts">
    defineProps({
        title : {
            type: String
        },
        subTitle: {
            type: String
        },
        img : {
            type: String
        },
        price : {
            type: Number
        },
        icon : {
            type: String
        }
    })
</script>
<template>
    <div class="card-doctor pr-3">
        <div class="card-item w-36 mt-4 rounded-lg bg-white overflow-hidden">
            <img :src="icon" class="object-cover" alt="">
            <div class="w-full flex flex-col px-3 pb-3">
                <h3 class="text-sm font-poppins font-medium mt-2 line-clamp-2">{{title}}</h3>
                <p class="mt-2 w-full font-poppins text-gray-350 text-xs leading-5 line-clamp-1">{{subTitle}}</p>
                <p class="w-full mt-1 text-primary-color text-sm leading-5 font-poppins">Rp. {{price}}</p>
            </div>
        </div>
    </div>
</template>


<style>
    .card-item {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        height: 260px;
    }
</style>