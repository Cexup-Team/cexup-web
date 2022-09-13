<script setup lang="ts">
    defineProps({
        name: {
            type: String
        },
        speciality : {
            type: String
        },
        rs:{
            type: String
        },
        online : {
            type: Boolean
        },
        year : {
            type: Number
        },
        image : {
            type: String
        },
        price: {
            type: Number,
        },
        priceDiscount: {
            type: Number
        },
        link: {
            type: String
        }
    })
</script>
<template>
    <nuxt-link :to="link">
        <div class="tele-doctor-list bg-white py-3 px-4 rounded-xl mt-4 mb-4">
            <div class="flex items-center">
                <div class="w-2/6 rounded-xl overflow-hidden mr-4 relative h-32"  >
                    <img :src="image" class="rounded-xl overflow-hidden object-cover w-full h-full" alt="">
                </div>
                <div class="w-4/6">
                    <div class="flex justify-between items-center">
                        <h3 class="text-base font-poppins font-medium leading-6 line-clamp-1">{{name}}</h3>
                        <img src="../../../assets/images/icon_pin.svg" class="w-4 h-5" alt="">
                    </div>
                        <h5 class="mt-1 font-poppins text-primary-color text-xs line-clamp-1">{{speciality}}</h5>
                        <h6 class="mt-3 font-poppins text-3">{{rs}}</h6>
                        <div class="flex justify-between items-center">
                        <div class="flex flex-col">
                            <div class="flex mt-2 items-center justify-start">
                                <div class="bg-teal-550 h-3 w-3 rounded-full mr-2"></div>
                                <h5 class="text-teal-550 font-poppins font-medium text-xs">{{online ? 'Online' : 'Offline'}}</h5>
                            </div>
                            <div class="flex mt-2 items-center justify-start">
                                <img src="../../../assets/images/bag_icon.svg" class="mr-1" alt="">
                                <h5 class="text-gray-350 font-poppins font-medium text-xs">{{year}} Years</h5>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-gray-350 font-poppins font-semibold text-xs discount relative" v-if="priceDiscount">Rp. {{priceDiscount}}</span>
                            <span class="text-primary-color font-semibold text-sm font-poppins">Rp. {{price}}</span>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>


<style>

</style>