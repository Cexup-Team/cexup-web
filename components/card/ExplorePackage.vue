<script setup lang="ts">
    defineProps({
        title : {
            type: String
        },
        subTitle : {
            type: String
        },
        img : {
            type: String
        },
        price: {
            type: String
        },
        duration : {
            type: String
        }
    
    })
</script>

<template>
    <div class="card-explore-package bg-white overflow-hidden" style="border-radius: 10px;">
        <div class="grid grid-cols-5" style="height: 135px;">
            <div class=" overflow-hidden h-full w-full">
                <img :src="img" class="object-cover h-full w-full outline-none border-0 transform scale-105" alt="">
            </div>
            <div class="col-span-4 grid grid-cols-6 items-center">
                <div class="flex flex-col w-auto ml-4 col-span-5">
                    <h3 class="font-poppins text-lg font-medium">{{title}}</h3>
                    <h5 class="font-poppins text-xs text-gray-350 mt-1">{{subTitle}} </h5>
                    <span class="font-poppins text-xs mt-3 font-medium">Dari {{price}} / {{duration}}</span>
                </div>
                <div class="w-auto items-center mx-4">
                    <img src="~/assets/images/icon_right_background_rounded.svg" class="w-10 h-10" alt="">
                </div>
            </div>
        </div>
    </div>  
</template>


<style>
    .card-explore-package {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
</style>