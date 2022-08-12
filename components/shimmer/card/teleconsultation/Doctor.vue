<script setup lang="ts">
</script>
<template>
    <div class="tele-doctor-list bg-white py-3 px-4 rounded-xl mt-4 mb-4">
        <div class="flex">
            <div class="w-2/6 h-auto rounded-xl overflow-hidden mr-4 relative">
                 <div class=" bg-gray-400 w-full h-full object-cover object-center animate-pulse mb-2 rounded-lg"></div>
            </div>
            <div class="w-4/6">
                <div class="flex justify-between items-center">
                    <p class="leading-relaxed w-3/4 h-3 animate-pulse bg-gray-400"></p>
                    <img src="../../../../assets/images/icon_pin.svg" class="w-4 h-5" alt="">
                </div>
                    <p class="leading-relaxed mt-2 w-6/12 h-3 animate-pulse bg-primary-color"></p>
                     <p class="leading-relaxed w-5/12 h-3 mt-4 animate-pulse bg-gray-400"></p>
                    <div class="flex justify-between items-center mt-3">
                        <div class="flex flex-col w-full">
                            <div class="flex mt-2 items-center justify-start w-full">
                                <div class="h-3 w-3 mr-2 rounded-full">
                                    <div class="bg-gray-400 w-full h-full rounded-full animate-pulse"></div>
                                </div>
                                
                                <p class="leading-relaxed w-3/12 h-2 animate-pulse bg-gray-400"></p>
                            </div>
                            <div class="flex mt-2 items-center justify-start">
                                <img src="../../../../assets/images/bag_icon.svg" class="mr-2" alt="">
                                <p class="leading-relaxed w-5/12 h-2 animate-pulse bg-gray-200"></p>
                            </div>
                        </div>
                    <div class="flex w-full justify-end items-center">
                        <!-- <span class="text-gray-350 font-poppins font-semibold text-xs discount relative" v-if="priceDiscount">Rp. {{priceDiscount}}</span> -->
                        <span class="text-primary-color font-semibold text-sm font-poppins mr-1">Rp.</span>
                        <p class="leading-relaxed w-8/12 h-4 animate-pulse bg-primary-color"></p>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>


<style>

</style>